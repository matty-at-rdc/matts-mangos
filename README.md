# Matts Mangos 🥭

## What is this?

This is a delightful React application that will allow Matt to sell his awesome mangos.

## Why make this? 

Mostly I made it for testing React Infinite Scrolling...

## How did you set this up?

Here's my recollection:

### Get Set Up

- Create a project 

```bash
mkdir matts-mangos
cd matts-mangos
yarn init -y
```

- Install a bunch-o-deps

```bash
# Add deps that will allow you to build the projects

yarn add -D \
@babel/core \
@babel/preset-env \
@babel/preset-react \
babel-loader \
css-loader \
html-webpack-plugin \
postcss \
postcss-loader \
postcss-preset-env \
standard \
style-loader \
tailwindcss \
webpack \
webpack-cli \
webpack-dev-server 

# Add deps that your app will use at runtime
yarn add 
react \
react-dom \
react-router-dom
```

- Create a bunch-o-config-files

```bash
touch webpack.config.js
touch babel.config.json
touch postcss.config.js
touch tailwind.config.js
```

- Create your harness file

```bash
mkdir public
touch public/index.html
```

- Create your source files [🪄](https://webpack.js.org/concepts/#entry)

```bash
mkdir src
touch src/index.js
```

- Tell your webpack config to use the babel-loader

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
    ]
  },
}
```

> __Note:__ This tells webpack to `test` js files not found in the _node_modules_ directory and allow babel to transform these files.

- Populate your _babel.config.json_

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

> __Note:__ When Webpack consumes the source and passes it off to the babel-loader the babel-loader in turn consumes the _babel.config_ which specifies a list of presets to pass the code through starting at the __end__ of the presets array. So in this case before running through preset-env is will send the code through preset-react.

---

### Checkpoint + Review

So at this point we nearly have a working set up. We have created our project, installed all of our deps, created our harness and source files for webpack to use (though these files are presently empty), and setup webpack and babel with enough configuration data to be able to transform React code into browser runnable JavaScript. From here we will want to populate our harness and source files, test that it works, and then begin loading our styles, and finally files.  

---

### Confirm JS Transformation Works

- Put some boilerplate HTML into our harness file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Matt's Mangos 🥭</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

> __Note:__ Two things, first we have our React entrypoint `#root`. Second there is no spot for a script this is some 🪄 provided by the plugin  working together with Webpack that we will show working in a second.

- Add some content to our _src/index.js_ file

```js
console.log("Welcome to the future...")
```

- Add the `HtmlWebpackPlugin` to the _webpack.config_

```js
// webpack.config.js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [/*Existing rules elided for brevity*/]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
}
```

> __Note:__ This plugin will __copy__ the _public/index.html_ and __inject__ a script tag into it with the name of the __bundled__ javascript file created by webpack 🪄 and will place it in the Webpack output directory (_dist.index.html_ by default)