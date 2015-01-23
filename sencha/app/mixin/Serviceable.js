/**
 * Created by Diego Garcia on 1/22/15.
 */
Ext.define('Navidar.mixin.Serviceable', {

    /**
     * Returns a service instance from the application's service cache
     * based on a dot-notation path. For instance, we could pass in 'native.connection'
     * to get the connection service instance.
     *
     * @param {String} servicePath
     * @returns {Object} A service instance
     */
    getService : function(servicePath) {
        var me = this;
        return me.getApplication().getService(servicePath);
    }
});
