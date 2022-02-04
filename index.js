const fs = require('fs');

const svg = fs.readFileSync('fonts/devicon.svg', 'utf8');
const jsx = fs.readFileSync('dest/Icon.js', 'utf8');

const svgLines = svg.split('\n');
const svgFirstIndex = svgLines.findIndex((line) =>
  line.match(/<glyph unicode="&#x[0-9a-f]{4};" glyph-name="[a-z0-9-]+"/)
);
const jsxLines = jsx.split('\n');
const jsxFirstIndex = jsxLines.findIndex((line) => line.match(/.*uni-\d{5}/));

console.log(svgLines[svgFirstIndex]);
console.log(jsxLines[jsxFirstIndex]);

let i = 0;
for (i = 0; ; i++) {
  const jsxLine = jsxLines[jsxFirstIndex + i];
  const svgLine = svgLines[svgFirstIndex + i];
  const jsxMatches = jsxLine.match(/.*(uni-\d{5})/);
  const svgMatches = svgLine.match(
    /<glyph unicode="&#x[0-9a-f]{4};" glyph-name="([a-z0-9-]+)"/
  );
  if (!jsxMatches || !svgMatches) break;

  const codeToReplace = jsxMatches[1];
  const glyphName = svgMatches[1];
  console.log(codeToReplace, glyphName);

  jsxLines[jsxFirstIndex + i] = jsxLine.replace(/uni-\d{5}/, glyphName);
}

const convertedJsx = jsxLines.join('\n');

fs.writeFileSync('dest/IconMapped.js', convertedJsx);
