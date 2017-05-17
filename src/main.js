require.ensure('./config', function() {
    require.ensure('./router', function(router) {
        router.init(); // Entry point of application
    });
});
