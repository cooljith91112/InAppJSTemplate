define(['nunjucks'], function(nunjucks) {

    var TEMPLATE_RENDERER = {
        /*
         * target: target HTML element can be an #id or .class.
         * partialUrl : the url where specified partial exists.
         * data : JSON object contains the data to be rendered.
         * callback : The callback method that will be executed when
         *             template is successfull loaded
         */
        render: function(target, partialUrl, data, callback) {
            require(['text!' + partialUrl], function(template) {
                var rendered = nunjucks.renderString(template, data);
                $(target).html(rendered);
                callback.call();
            });


        }
    }

    return TEMPLATE_RENDERER;

});
