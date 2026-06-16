#!/bin/bash

# Heroku Deployment Script
# This script automates deployment to Heroku
# Usage: ./deploy-heroku.sh [--dryrun]

set -e

DRYRUN=false
if [[ "$1" == "--dryrun" ]]; then
    DRYRUN=true
    echo "🔍 Running in DRY-RUN mode (no changes will be made)"
fi

echo "🚀 Starting Heroku Deployment..."

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "❌ Heroku CLI not found. Install it from: https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

# Check if logged in to Heroku
if ! heroku auth:whoami &> /dev/null; then
    echo "❌ Not logged in to Heroku. Run: heroku login"
    exit 1
fi

# Validate git status
if [[ $(git status --porcelain) ]]; then
    echo "⚠️  Uncommitted changes detected. Commit changes before deploying."
    exit 1
fi

# Validate main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
    echo "⚠️  You are on branch '$CURRENT_BRANCH'. Switch to 'main' to deploy."
    exit 1
fi

# Set app name (customize this)
DEFAULT_APP="congenial-octo-fortnight-$(date +%s)"
read -p "Enter Heroku app name (default: $DEFAULT_APP): " USER_APP_NAME
APP_NAME=${USER_APP_NAME:-$DEFAULT_APP}

# Validate app name
if [[ ! $APP_NAME =~ ^[a-z0-9][a-z0-9-]{2,29}$ ]]; then
    echo "❌ Invalid Heroku app name. Must be 3-30 chars, lowercase, hyphens allowed."
    exit 1
fi

echo "📱 Creating Heroku app: $APP_NAME"
if [[ "$DRYRUN" == true ]]; then
    echo "[DRY-RUN] Would run: heroku create $APP_NAME"
else
    heroku create "$APP_NAME" || { echo "❌ Failed to create app (might already exist)."; exit 1; }
fi

echo "🗄️ Setting MongoDB connection string..."
echo "Get your MongoDB Atlas connection string from: https://www.mongodb.com/cloud/atlas"
echo "Format: mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority"
read -p "Enter DATABASE_URL (or press Enter to skip): " DATABASE_URL

if [[ -z "$DATABASE_URL" ]]; then
    echo "⚠️  Skipping MongoDB configuration. Set DATABASE_URL manually via heroku config:set"
elif [[ ! "$DATABASE_URL" =~ ^mongodb ]]; then
    echo "❌ Invalid MongoDB URL. Must start with 'mongodb' or 'mongodb+srv'"
    exit 1
else
    if [[ "$DRYRUN" == true ]]; then
        echo "[DRY-RUN] Would set DATABASE_URL"
    else
        heroku config:set DATABASE_URL="$DATABASE_URL" --app "$APP_NAME" || { echo "❌ Failed to set DATABASE_URL"; exit 1; }
    fi
fi

echo "🔧 Setting environment variables..."
if [[ "$DRYRUN" == true ]]; then
    echo "[DRY-RUN] Would set NODE_ENV=production and PORT=3000"
else
    heroku config:set NODE_ENV=production --app "$APP_NAME" || { echo "❌ Failed to set NODE_ENV"; exit 1; }
    heroku config:set PORT=3000 --app "$APP_NAME" || { echo "❌ Failed to set PORT"; exit 1; }
fi

echo ""
echo "📋 Deployment Summary:"
echo "  App Name: $APP_NAME"
echo "  Branch: $CURRENT_BRANCH"
echo "  Database: ${DATABASE_URL:0:50}..."
echo ""

if [[ "$DRYRUN" == true ]]; then
    echo "✅ Dry-run completed successfully!"
    exit 0
fi

read -p "Proceed with deployment? (yes/no): " CONFIRM
if [[ "$CONFIRM" != "yes" ]]; then
    echo "❌ Deployment cancelled."
    exit 1
fi

echo "📤 Building and deploying to Heroku..."
if git remote | grep -q heroku; then
    git push heroku main || { echo "❌ Failed to push to Heroku"; exit 1; }
else
    echo "❌ Heroku remote not found. Run: heroku git:remote --app $APP_NAME"
    exit 1
fi

echo ""
echo "✅ Deployment complete!"
echo "🌐 View your app: https://$APP_NAME.herokuapp.com"
echo "📊 View logs: heroku logs --tail --app $APP_NAME"
echo "⚙️  Manage config: heroku config --app $APP_NAME"
