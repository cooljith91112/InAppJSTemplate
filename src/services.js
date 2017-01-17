define(['global'], function(global) {
    var _services = {
        /*
         * @url - String : API End Point
         * @requestType - String : The type of the ajax call, possible values are POST, GET, PUT...
         * additionalHeaders - JSON Object : Additional headers which can be passed with request. If none empty {} should be passed
         * autheticate - boolean : wheather the request requires an authentication. If true token values stored in global.accessToke will be used
         * data JSON Object: the paramters/data to send with the request
         * shouldStringify - boolean : When set to true the parameter passed will be stingified before sending
         * successMethod - function : Callback function when request results in success
         * errorMethod - function : Callback function when request results in error
         */
        send: function(url, requestType, additionalHeader, authenticate, data, shouldStringify, successMethod, errorMethod) {
            var headers = {
                "Content-Type": 'application/json'
            }

            if (!_.isEmpty(additionalHeader)) {
                headers = _.assign(headers, additionalHeader)
            }

            if (authenticate) {
                headers = _.assign(headers, {
                    "X-Auth-Token": global.accessToken
                })
            }

            if (shouldStringify) {
                data = JSON.stringify(data);
            }

            $.ajax({
                async: true,
                crossDomain: true,
                url: url,
                type: requestType,
                headers: headers,
                data: data,
                success: successMethod,
                error: errorMethod
            })


        }
    }
    return _services;
})
