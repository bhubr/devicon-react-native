#!/bin/bash
BASE_URL=https://github.com/devicons/devicon/blob/master/fonts
TTF_FONT=devicon.ttf
SVG_FONT=devicon.svg

# Create fonts dir if it doesn't exist
[ -d fonts ] || mkdir fonts
[ -d dest ] || mkdir dest

# Download .ttf and .svg fonts if not present
[ -f "fonts/$TTF_FONT" ] || curl -O "fonts/$TTF_FONT" "$BASE_URL$TTF_FONT"
[ -f "fonts/$SVG_FONT" ] || curl -O "fonts/$SVG_FONT" "$BASE_URL$SVG_FONT"

# Invoke react-native-svg
node node_modules/react-font-svg/cli "fonts/$TTF_FONT" -d dest

# Get all glyph names from svg file,
# modifies output from react-native-svg
node index.js