#!/bin/bash

echo "🔍 Testing build for image handling..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if the build succeeded
if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "✅ Build successful!"

# Check if images are in the dist folder
echo "🖼️  Checking for images in dist..."
if [ -d "dist/images" ]; then
  echo "✅ Images directory exists in dist!"
  ls -la dist/images
else
  echo "⚠️  dist/images directory not found, checking if images were processed differently..."
  find dist -name "*.jpeg" -o -name "*.jpg" -o -name "*.png"
fi

echo "🧪 Test complete!"
