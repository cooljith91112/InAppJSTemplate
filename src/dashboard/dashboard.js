define(['services', 'moment', 'constants', 'dashboard/dashboard.model'], function(_services, moment, CONSTANTS, DASHBOARD_MODEL) {


    var DASHBOARD_MODULE = {
        init: function(){
            console.log("INIT");
            anotherMethod("Kool")
        },
        anotherMethod : function() {
            console.log("Param ",param);
        }


    };


    return DASHBOARD_MODULE;


});
