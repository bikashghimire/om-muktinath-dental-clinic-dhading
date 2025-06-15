#!/bin/sh
# Pre-deployment build script

echo "Running pre-deployment checks..."

# Build the project to check for errors
echo "Building project..."
npm run build

# Check build status
if [ $? -ne 0 ]; then
  echo "Build failed! Fix errors before deploying."
  exit 1
else
  echo "Build successful!"
fi

# Check if images are correctly imported
echo "Checking image imports..."
grep -r "import.*from.*\.(jpeg|jpg|png|svg|gif)" ./src

echo "Pre-deployment check complete! Ready to deploy."
