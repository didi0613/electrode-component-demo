# my-component

__COMPONENT DESCRIPTION GOES HERE__


## Demo & Examples

Live demo: [.github.io/my-component](http://.github.io/my-component/)

To build the package locally, run:

```
npm install

```

To run the package demo locally, run the `demo-app` :

```
npm install
gulp dev

```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use my-component is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/my-component.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install my-component --save
```


## Usage

__EXPLAIN USAGE HERE__

```
var MyComponent = require('my-component');

<MyComponent>Example</MyComponent>
```

### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

## License

__PUT LICENSE HERE__

Copyright (c) 2017 .
