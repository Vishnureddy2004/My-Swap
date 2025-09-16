#!/bin/bash

# Vercel Deployment Script for Intent Swap
echo "🚀 Starting Vercel deployment for Intent Swap..."

# Build the frontend
echo "📦 Building frontend..."
cd frontend
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed!"
    exit 1
fi

cd ..

# Deploy to Vercel
if [ "$1" = "production" ]; then
    echo "🌟 Deploying to production..."
    vercel --prod
else
    echo "🔄 Deploying preview..."
    vercel
fi

echo "✅ Deployment completed!"