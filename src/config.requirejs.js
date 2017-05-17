// requirejs.config({
//     waitSeconds: 30,
//     urlArgs: "bust=v1",
//     baseUrl: 'src',
//     paths: {
//         main: 'main',
//         text: 'libs/text',
//         jquery: 'libs/jquery.min',
//         jqueryui: 'libs/jquery-ui-1.12.1.custom/jquery-ui.min',
//         lodash: 'libs/lodash.min',
//         stateman: 'libs/stateman',
//         nunjucks: 'libs/nunjucks',
//         moment: 'libs/moment.min',
//         urlparser: 'urlparser',


//         global: "global",
//         utils: "utils",
//         constants: "constants",
//         config: "config",
//         moduleloader: "moduleLoader",
//         services: "services",
//         templaterenderer: "templateRenderer",
//         router: "router"

//     },

//     shim: {
//         'jquery': {
//             exports: '$'
//         },
//         lodash: {
//             exports: "_"
//         },
//         "bootstrap": { "deps": ['jquery'] },
//         "moduleloader": { "deps": ['jquery', 'lodash', 'config', 'nunjucks'] },
//         "services": { deps: ['global'] },
//         'router': {
//             deps: ['jquery', 'jqueryui', 'lodash', 'stateman',
//                 'nunjucks', 'moment', 'urlparser', 'global', 'utils', 'constants', 'config',
//                 'global', 'services', 'templaterenderer'
//             ]
//         }
//     }
// });

require('./main');
