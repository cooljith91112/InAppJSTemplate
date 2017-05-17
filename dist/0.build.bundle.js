webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Main Config File

// renderArea stores where the dynamic template should be loaded
// module stores metadata about the modules. The structure should be similar to given below
// 'moduleName':{
//      scripts:[],//Array of paths of the module dependent scripts
//      template:string, 'path to the template'
//  }
//  
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {


    var CONFIG = {
        appName:'Boiler Plate',
        renderArea: '#renderArea',
        common: ['./common/header'],
        module: {
            'layout': {
                scripts: [
                    'common/header'
                ],
                main: 'common/header',
                rejectcommon: true
            },
            'login': {
                scripts: [
                    'login/login.model',
                    'login/login'
                ],
                template: "../partials/login/login.html",
                main: 'login/login',
                rejectcommon: true
            },
            'dashboard': {
                scripts: [
                    'dashboard/dashboard.model',
                    'dashboard/dashboard',
                    'common/header'
                ],
                main: 'dashboard/dashboard',
                template: "../partials/dashboard/dashboard.html",
                childView: {
                    mainView: '#header',
                    template: '../partials/common/header.html'
                }
            },
            'test': {
                scripts: [],
                template: "../partials/test/test.html",
                childView: {
                    mainView: '#header',
                    template: '../partials/common/header.html'
                }
            },

            '404': {
                scripts: [],
                template: "../partials/common/404.html",
                rejectcommon: true
            }
        }
    }

    return CONFIG;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

});