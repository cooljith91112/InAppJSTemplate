// Router Config file
// For routing we uses stateman state based routing
define(['stateman', 'jquery', 'moduleloader', 'global'], function(Stateman, $, MODULE_LOADER, global) {


    var ROUTER = {
        statemanInstance: null,
        init: function() {
            ROUTER.statemanInstance = new Stateman();

            ROUTER.statemanInstance
                .state('app', config)
                .state('app.login', create({
                    enter: function() {
                        MODULE_LOADER.load('login', "Login");
                    },
                    canEnter: function() {

                    },
                    leave: function() {

                    },
                    canLeave: function() {

                    }
                }))

            .state('app.signout', create({
                    enter: function() {
                        localStorage.clear();
                        global.destroyAll();
                        window.location.href = "/";
                    }
                }))
                .state('app.layout', create({
                    enter: function() {
                        MODULE_LOADER.load('layout')
                    }
                }))
                .state('app.layout.dashboard', create({
                    enter: function() {
                        MODULE_LOADER.load('dashboard', "Dashboard");
                    },
                    canEnter: function() {

                    },
                    leave: function() {

                    },
                    canLeave: function() {

                    }
                }))
                .state('app.layout.test', create({
                    enter: function() {
                        MODULE_LOADER.load('test', "Test");
                    },
                    canEnter: function() {

                    },
                    leave: function() {

                    },
                    canLeave: function() {

                    }
                }))
                .state('404', create({
                    enter: function() {
                        MODULE_LOADER.load('404');
                    },
                    canEnter: function() {

                    },
                    leave: function() {

                    },
                    canLeave: function() {

                    }
                }))
                .on("notfound", function() {
                    if (global.accessToken) {
                        this.go('app.layout.dashboard');
                    } else {
                        this.go('app.login'); // if not found                    
                    }
                })
                .start();
        }
    };

    var config = {
        enter: function(option) {
            // var loginData = JSON.parse(localStorage.getItem('loginData'));
            // if (loginData) {
            //     global["accessToken"] = loginData["token"];
            // } else {
            //     if (option.current.name != "app.login") {
            //         ROUTER.statemanInstance.go('app.login');
            //     }
            // }
        },
        leave: function() {
            console.log("leave: " + this.name)
        },
        canEnter: function() {
            console.log("canEnter: " + this.name)
        },
        canLeave: function() {
            console.log("canLeave: " + this.name)
        }
    };


    function create(o) {
        o = o || {};
        o.enter = o.enter || config.enter;
        o.leave = o.leave || config.leave;
        return o;
    }

    return ROUTER;

});
