/**
 * Created by Diego Garcia on 1/22/15.
 */
Ext.define('Navidar.store.Base', {
    extend  : 'Ext.data.Store',

    config  : {

        initialized : false

    },

    setData: function () {
        var me = this;
        me.callParent(arguments);
        me.setInitialized(true);
    }
});
