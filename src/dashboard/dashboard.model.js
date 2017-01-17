define([], function(){


function DASHBOARD_MODEL() {
    this.dashboardData = {
        dashboardDetails: []
    };
}

DASHBOARD_MODEL.prototype = {
    setData: function(data) {
       
    },

    getData: function() {
        var localData = UTILS.getLocalStorage('dashboardData');
        return localData;
    }

};

return DASHBOARD_MODEL;

})

