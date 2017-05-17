define(['nunjucks', 'config', 'jqueryui'], function(nunjucks, CONFIG) {

    var MODULE_LOADER = {
        load: function(moduleName, title) {

            var module = CONFIG.module[moduleName];


            if (CONFIG.module[moduleName]["template"]) {
                require(['text!' + CONFIG.module[moduleName]["template"]], function(template) {
                    var compiledTemplate = nunjucks.renderString(template, { title: title });

                    if (module.childView) {
                        if (!$(module.childView.mainView).length) {
                            $(CONFIG.renderArea).html('');
                            require(['text!' + module.childView.template], function(childTemplate) {
                                var compiledChildTemplate = nunjucks.renderString(childTemplate, { title: title });
                                $(compiledChildTemplate).appendTo(CONFIG.renderArea);
                                $(compiledTemplate).appendTo(CONFIG.renderArea);
                            });

                        } else {
                            $(CONFIG.renderArea).children(":not(" + module.childView.mainView + ")").remove();
                            $(compiledTemplate).appendTo(CONFIG.renderArea);
                        }

                    } else {
                        $(CONFIG.renderArea).html('');
                        $(compiledTemplate).appendTo(CONFIG.renderArea);
                    }


                    if (module.scripts.length > 0) {
                        if (module.main) {
                            // require.undef(module.main);
                            require.ensure([module.main], function(module_obj) {
                                console.log(module_obj)
                                module_obj.init();
                            })
                        }
                        require.ensure([module.scripts]);
                    }

                    if (CONFIG.common && !module.rejectcommon) {
                        // require.undef(CONFIG.common[0]);
                        require.ensure(CONFIG.common, function(common) {
                            common.init();
                        });
                    }

                });

            }

            if (title) {
                setTimeout(function(){
                    document.title = CONFIG.appName + " - " + title;
                })
                
            }

        }
    }

    return MODULE_LOADER;

});
