/**
 * Created by Diego Garcia on 1/22/15.
 *
 * Base of all app services
 */
Ext.define('Navidar.service.Base', {

    config : {
        /**
         * @cfg {Object} application
         * The application instance
         */
        application : null
    },

    mixins : [
        'Navidar.mixin.Serviceable'
    ],

    /**
     * Creates a new service
     *
     * @param config
     * A standard configuration object
     */
    constructor : function(config) {
        var me = this;

        // <debug error>
        if (config === undefined || 'application' in config === false) {
            console.error('An application instance is required to construct a service', config);
            return;
        }
        // </debug>

        me.initConfig(config);
        me.callParent(arguments);
    }

});
