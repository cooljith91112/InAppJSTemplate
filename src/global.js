//Global storage section
//global object stores data which is dependent on different modules
//to release an object from memory specify global.destroy("variablename")
define(['lodash'], function(_) {


    var global = {
        destroy: function(objectName) {
            global[objectName] = null;
        },
        destroyAll: function() {
            var _keysExceptMethods = _.omitBy(global, function(value, key) {
                return (
                    _.eq(key, 'destroy') ||
                    _.eq(key, 'destroyAll') ||
                    _.eq(key, 'find')
                );
            });

            _.forEach(_keysExceptMethods, function(value, key) {
                global[key] = null;
            })
        },
        find: function(key) {
            var pickedVar = _.pick(global, key);
            return pickedVar;
        }
    }

    return global;
});
