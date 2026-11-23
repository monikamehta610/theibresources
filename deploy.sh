#!/bin/bash
# Deploy to Cloudflare Pages using wrangler
# Run this after: npm run build:cf

set -e

echo "🚀 Deploying to Cloudflare Pages..."

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ wrangler not found. Installing..."
    npm install -g wrangler
fi

# Check authentication
echo "🔐 Checking Cloudflare authentication..."
wrangler whoami || {
    echo "❌ Not authenticated. Run: wrangler login"
    exit 1
}

# Deploy
echo "📦 Deploying from ./out directory..."
wrangler pages deploy ./out --project-name=theibresources

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at:"
echo "   https://theibresources.pages.dev"
echo "   https://theibresources.com (after custom domain setup)"