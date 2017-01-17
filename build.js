{
     baseUrl: "src",
     appDir: "./",
     dir: "dist",

     modules: [
         { name: "main" }
     ],
     mainConfigFile: "src/config.requirejs.js",
     paths: {
         app: 'main',
         'jquery':'empty:',
         'jqueryui':'empty:',
         'datatable':'empty:'
     },
     optimize:'uglify2'
 }
