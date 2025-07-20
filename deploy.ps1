# Docker deployment script for React Landing Page
# This script builds and runs the Docker container

Write-Host "🐳 Starting Docker deployment of React Landing Page..." -ForegroundColor Green

# Check if Docker is running
try {
    docker --version | Out-Null
    Write-Host "✓ Docker is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not installed or not running" -ForegroundColor Red
    Write-Host "Please install Docker Desktop from https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Build the Docker image
Write-Host "🔨 Building Docker image..." -ForegroundColor Blue
docker build -t react-landing-page .

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Docker build failed" -ForegroundColor Red
    exit 1
}

# Stop and remove existing container if it exists
Write-Host "🧹 Cleaning up existing container..." -ForegroundColor Yellow
docker stop react-landing-page 2>$null
docker rm react-landing-page 2>$null

# Run the container
Write-Host "🚀 Starting container..." -ForegroundColor Blue
docker run -d -p 3000:80 --name react-landing-page react-landing-page

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to start container" -ForegroundColor Red
    exit 1
}

Write-Host "✅ React Landing Page is now running!" -ForegroundColor Green
Write-Host "🌐 Access your app at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔍 To view logs: docker logs react-landing-page" -ForegroundColor Yellow
Write-Host "🛑 To stop: docker stop react-landing-page" -ForegroundColor Yellow
