# InApp JS Boilerplate

### Feature list:

 * Easy to start a project from scratch
 * Build on top of RequireJS
 * Templating (based on Mozilla's Nunjucks)
 * State based routing
 * Integrated Optimizer/Minifier ([r.js](http://requirejs.org/docs/optimization.html))



### Requirements
**NodeJS** - For final building

No other dependencies

### Installation:
```sh
$ npm install -g requirejs
```

### Build:

```sh
$ node r.js -o build.js
```
output/production code will be copied to **dist** folder.


### Directory Structure
```sh
Project
├───css
│   └───lib --> Third party libraries
├───fonts
├───images
├───partials --> module wiser partial views should be stored here
│   ├───common
│   ├───dashboard
│   ├───login
│   └───test
└───src
    ├───common 
    ├───dashboard --> module folder
    ├───libs  -> put all third party dependencies here
    │   └───jquery-ui-1.12.1.custom
    │       ├───external
    │       │   └───jquery
    │       └───images
    └───login --> module folder
```

### File Descriptions

| File  | Description |
| ------ | ------ |
| build.js | This file contains final build configurations, customizable |
| src/config.js |This files holds module definition, render area declaration, template path etc |
| src/config.require.js | Holds third party library/module definitions |
| src/constants.js | Used to store Application constants like API url, end points etc |
| src/global.js | Global application variable storage (acts like $rootScope of angularJS) |
| src/router.js | This file is important, stores the application routing, module permissions, module loading etc |
| src/main.js | Entry point/ boostraper of the Application. This will initiate the router config |
| src/moduleLoader.js | Utility library used to load module, utilizing config.js |
| src/services.js | services is a wrapper library around standard JQuery Ajax |
| src/templateRenderer.js | Used to load template using nunjucks |



