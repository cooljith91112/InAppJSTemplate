const path = require('path');

module.exports = {
  entry: './src/config.requirejs.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.bundle.js'
  },
  resolve:{
	  alias:{
		    main$: path.resolve(__dirname, './src/main'),
        text$: path.resolve(__dirname, './node_modules/text-loader/'),
        jquery$: path.resolve(__dirname, './src/libs/jquery.min'),
        jqueryui$: path.resolve(__dirname, './src/libs/jquery-ui-1.12.1.custom/jquery-ui.min'),
        lodash$: path.resolve(__dirname, './src/libs/lodash.min'),
        stateman$: path.resolve(__dirname, './src/libs/stateman'),
        nunjucks$: path.resolve(__dirname, './src/libs/nunjucks'),
        moment$: path.resolve(__dirname, './src/libs/moment.min'),
        urlparser$: path.resolve(__dirname, './src/urlparser'),


        global$: path.resolve(__dirname, "./src/global"),
        utils$: path.resolve(__dirname, "./src/utils"),
        constants$: path.resolve(__dirname, "./src/constants"),
        config$: path.resolve(__dirname, "./src/config"),
        moduleloader$: path.resolve(__dirname, "./src/moduleLoader"),
        services$: path.resolve(__dirname, "./src/services"),
        templaterenderer$: path.resolve(__dirname, "./src/templateRenderer"),
        router$: path.resolve(__dirname, "./src/router")
	  }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader'}
        ]
      }
    ]
  }
};

