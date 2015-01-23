/**
 * Used to manage the definition and loading of locale-specific message catalogs
 */
(function(global) {
    var LocaleManager = {
        /**
         * @property {String} language
         * The language detected (en-us)
         */
        language : null,

        /**
         * @property {Object} messageCatalog
         * The message catalog loaded for the detected language
         */
        messageCatalog : null,

        /**
         * Method which initializes the message catalog.
         * Language is detected by inspecting the navigator object.
         * We've kept this simple for now but we can always modify this to load
         * languages based on the logic we want later on.
         *
         * @param {String} lang
         * Optional language set to load
         */
        init : function(lang) {
            this.language = (lang || navigator.language || navigator.userLanguage).toLowerCase();

            var req      = new XMLHttpRequest(),
                fileLang = this.language;

            req.open('get', 'resources/locales/' + fileLang + '.json?bustCache=' + Math.random(), false);
            req.send(null);

            if (! req.responseText || req.status == 404) {
                console.log('No message catalog for ' + fileLang + ' defaulting to en-US.');
                req.open('get', 'resources/locales/en-us.json?bustCache=' + Math.random(), false);
                req.send(null);
            }

            this.messageCatalog = JSON.parse(req.responseText);
        },

        /**
         * Queries the message catalog for a given context, key, and optional params
         *
         * @param {String} context
         * Usually equates to a 'view' but it's basically the object key to the first locale group definition
         *
         * @param {String} messageKey
         * An object key to a given string fragment. These are located under a 'context'
         *
         * @param {String[]} params
         * Strings that are to be interpolated as part of the returned fragment
         *
         * @returns {String}
         * The translated string
         */
        getText : function(context, messageKey, params) {
            if (!this.messageCatalog) {
                this.init();
            }

            return this.doGetText(context, messageKey, params);
        },

        doGetText : function(context, messageKey, params) {
            var ctx = this.messageCatalog.messageCatalog.messages[context];

            if (! ctx) {
                console.log('***Error: No context in message catalog for "' + context + '"');
                return 'ERROR';
            } else {
                var mkey = ctx[messageKey];
                if (! mkey) {
                    console.log('***Error: No message key "' + messageKey + '" in context "' + context + '" in message catalog');
                    return 'ERROR';
                } else {
                    var messageText = this.messageCatalog.messageCatalog.messages[context][messageKey];
                    var paramStart = messageText.indexOf('%%');
                    var paramEnd = 0;
                    var paramIdx = 0;
                    var paramNum = 0;
                    var paramValue = '';

                    while (paramStart != -1) {
                        paramEnd = messageText.indexOf('%%', paramStart + 2);
                        paramNum = messageText.substring(paramStart + 2, paramEnd);
                        if (! params[paramNum]) {
                            paramValue = 'ERROR';
                            console.log('***Error: Message catalog requires value for key "' + messageKey + '", parameter "' + paramNum + '" in context "' + context + '"');
                        } else {
                            paramValue = params[paramNum];
                        }

                        messageText = messageText.substring(0, paramStart) + paramValue + messageText.substring(paramEnd + 2);
                        paramStart = messageText.indexOf('%%');
                    }

                    return messageText;
                }
            }
        }
    };

    global.LocaleManager = LocaleManager;

    // convenience method
    global._getText = LocaleManager.getText.bind(LocaleManager);
})(window);