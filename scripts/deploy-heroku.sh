#!/bin/bash

# Heroku Deployment Script
# This script automates deployment to Heroku

set -e

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

# Set app name (customize this)
APP_NAME="congenial-octo-fortnight-$(date +%s)"
read -p "Enter Heroku app name (default: $APP_NAME): " USER_APP_NAME
APP_NAME=${USER_APP_NAME:-$APP_NAME}

echo "📱 Creating Heroku app: $APP_NAME"
heroku create $APP_NAME

echo "🗄️ Setting MongoDB Atlas connection string..."
echo "Get your MongoDB Atlas connection string from: https://www.mongodb.com/cloud/atlas"
read -p "Enter DATABASE_URL: " DATABASE_URL
heroku config:set DATABASE_URL=$DATABASE_URL --app $APP_NAME

echo "🔧 Setting environment variables..."
heroku config:set NODE_ENV=production --app $APP_NAME
heroku config:set PORT=3000 --app $APP_NAME

echo "📤 Deploying to Heroku..."
git push heroku main

echo "✅ Deployment complete!"
echo "🌐 View your app: https://$APP_NAME.herokuapp.com"
echo "📊 View logs: heroku logs --tail --app $APP_NAME"
