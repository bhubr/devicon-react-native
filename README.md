# Devicons to React Native

## What is it?

A dead-simple script that converts icons from [devicon](https://devicon.dev/) to React Native icons

## How to use it?

You need to have Node.js and NPM installed.

1. Clone this repo
2. Run `npm install`
3. Run `./convert.sh`
4. Use the `dest/IconMapped.js` file in your project

Example of use:

```jsx
import { View } from 'react-native';

import Icon from './IconMapped';

export default function IconExample() {
  return (
    <View style={{ flex: 1 }}>
      <Icon name="react-original" width={50} height={50} color="#61DBFB" />
    </View>
  );
}

```

## How does it work?

1. Downloads the `.ttf` and `.svg` versions of the devicon pack from [the devicon repo](https://github.com/devicons/devicon/tree/master/fonts)
2. Runs the [react-font-svg](https://www.npmjs.com/package/react-font-svg) tool to convert the `.ttf` file to a JSX file
3. Uses the glyph names from the SVG file to remap the icons to the correct names in the JSX file
