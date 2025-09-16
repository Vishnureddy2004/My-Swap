# Vercel Deployment Script for Intent Swap (PowerShell)
param(
    [string]$Environment = "preview"
)

Write-Host "Starting Vercel deployment for Intent Swap..." -ForegroundColor Green

# Build the frontend
Write-Host "Building frontend..." -ForegroundColor Yellow
Set-Location frontend
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Frontend build failed!" -ForegroundColor Red
    exit 1
}

Set-Location ..

# Deploy to Vercel
if ($Environment -eq "production") {
    Write-Host "Deploying to production..." -ForegroundColor Magenta
    vercel --prod
} else {
    Write-Host "Deploying preview..." -ForegroundColor Cyan
    vercel
}

Write-Host "Deployment completed!" -ForegroundColor Green