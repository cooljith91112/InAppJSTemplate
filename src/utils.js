var UTILS = {
    getLocalStorage: function(key) {
        var localData = localStorage.getItem(key);
        var parsedData = JSON.parse(localData);

        return parsedData;
    },

    setLocalStorage: function(storageKey, data) {
        var stringifiedData = JSON.stringify(data);
        localStorage.setItem(storageKey, stringifiedData);
    },

    toJSON: function(data) {
        if (_.isObject(data)) {
            return data;
        }
        try {
            var o = JSON.parse(data);
            if (o && typeof o === "object") {
                return o;
            }
        } catch (e) {
            console.log(e);
        }

        return false;
    },
    isEmail: function(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
        return regex.test(email);
    },
    isTag: function(content) {
        if (content.match(/<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/)) {
            return true;
        }
    }
}
