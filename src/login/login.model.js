define([], function() {

    function LOGIN_MODEL() {

        this.loginData = {};
    }

    LOGIN_MODEL.prototype = {

        setData: function(data) {
            this.loginData.token = data.tokenDetails.token;
            this.loginData.username = data.tokenDetails.profile.username;
            this.loginData.ManagerId = data.tokenDetails.profile.ranchid;
            this.loginData.role = data.tokenDetails.profile.roles[0];
            UTILS.setLocalStorage('loginData', this.loginData);
        },

        getData: function(key) {
            var localData = UTILS.getLocalStorage('loginData');
            return localData[key];
        }
    };

    return LOGIN_MODEL;

})
