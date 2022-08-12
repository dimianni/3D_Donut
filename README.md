# My webpack 5 configuration.
It was built by following the [official Webpack documentation](https://webpack.js.org/guides/). This is a basic configuration, which is perfectly suitable for landing page development and can be easily tweaked for any needs. 

## To clone the repo, run the following command:

```bash
git clone https://github.com/dimianni/my-webpack-configuration.git
```

## Installation.

After cloning the repo, run the following command in the folder's terminal:

```bash
  npm i 
```

node_modules folder and all the dependencies will be downloaded.


## Usage.

There are only two commands.

This will start a development server:
```bash
npm run start
```

This will create a production build:
```bash
npm run build
```

## Details.

There are three webpack configuration files present: 

- webpack.common.js 
- webpack.dev.js 
- webpack.prod.js 

__common__ contains general configuration, while __dev__ and __prod__ extend it depending on the task. If *npm run start* is run, dev configuration is executed. If *npm run build* is run, prod configuration is executed. The difference between each is that dev is less optimized, which eases the development and makes npm run start execution faster.

## Features.

Some features of this configuration:

 - It knows how to handle SASS (CSS) files, all types of images and fonts. NOTE: sass files and images have to be imported to __index.js__ to be included when building.  
 - It runs JavaScript through Babel and separates vendors code. 
 - It knows how to handle static files with CopyWebpackPlugin (for now, it transfers ‘inc’ folder as well as a favicon to dist). 

Besides, dist is configured to output classic website structure:

```
  |- /dist
    |- index.html
    |- favicon.ico
    |- /js
      | - index.js
      | - .
      | - .
    |- /css
      | - index.css
      | - .
      | - .
    |- /fonts
    |- /images
    |- /inc
```

## Contributing

Pull requests are welcome. Feel free to fix any issues, and suggest any other features that this configuration could support.
