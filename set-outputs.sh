#!/bin/bash
echo "script-file=dist/assets/main.js" >> "$GITHUB_OUTPUT"
echo "build-folder=dist" >> "$GITHUB_OUTPUT"
echo "status=Build successful" >> "$GITHUB_OUTPUT"
