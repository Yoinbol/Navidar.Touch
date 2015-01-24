/**
 * Created by Diego Garcia on 1/24/15.
 *
 * Application service
 */
Ext.define('Navidar.service.Application', {
    extend  : 'Navidar.service.Base',

    config  : {

        /**
         * Session model instance
         */
        session: null
    },

    loadSessionModel : function() {
        var me            = this,
            configService = me.getService('configuration');

        Navidar.model.application.Session.load(configService.getSessionModelId(), {
            callback : me.onSessionModelLoad,
            scope    : me
        });
    },

    /**
     * Event handler for loading the session model from local storage.
     *
     * @param {Navidar.model.application.Session} record
     */
    onSessionModelLoad : function(sessionModel) {
        var me            = this;

        if (sessionModel) {
            me.setSession(sessionModel);
        }
    }
});
