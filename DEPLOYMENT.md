# Deployment Guide

This project can be deployed to several cloud platforms. Here are the instructions:

## Heroku Deployment

### Prerequisites
- Heroku CLI installed
- A Heroku account

### Steps

1. **Login to Heroku:**
   ```bash
   heroku login
   ```

2. **Create a new Heroku app:**
   ```bash
   heroku create your-app-name
   ```

3. **Add MongoDB Atlas connection string:**
   ```bash
   heroku config:set DATABASE_URL=<your-mongodb-atlas-connection-string>
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

5. **View logs:**
   ```bash
   heroku logs --tail
   ```

## AWS Deployment (EC2/Elastic Beanstalk)

### Prerequisites
- AWS account
- AWS CLI configured

### Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Create an .ebextensions directory:**
   ```bash
   mkdir .ebextensions
   ```

3. **Create nodecommand.config in .ebextensions:**
   ```yaml
   option_settings:
     aws:autoscaling:launchconfiguration:
       EC2KeyName: your-ec2-key
     aws:elasticbeanstalk:container:nodejs:
       NodeCommand: "npm run start:prod"
   ```

4. **Deploy with Elastic Beanstalk CLI:**
   ```bash
   eb init
   eb create
   eb deploy
   ```

## Environment Variables

Ensure the following environment variables are set on your hosting platform:
- `PORT` - Default: 3000
- `NODE_ENV` - Set to 'production'
- `DATABASE_URL` - MongoDB connection string

## Monitoring

After deployment:
1. Monitor logs regularly
2. Set up error tracking (e.g., Sentry)
3. Configure alerts for critical errors
4. Monitor database performance

## Rollback

If you need to rollback to a previous version:

**Heroku:**
```bash
heroku releases
heroku rollback v<version-number>
```

**AWS Elastic Beanstalk:**
```bash
eb appversion
eb clone <environment-name> --clone-environment-config
```
