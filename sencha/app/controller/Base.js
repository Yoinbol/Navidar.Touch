/**
 * Created by Diego Garcia on 1/20/15.
 *
 * Base controller
 */
Ext.define('Navidar.controller.Base', {
    extend  : 'Ext.app.Controller',

    mixins : [
        'Navidar.mixin.Serviceable'
    ],

    config  : {

    },

    /**
     * shows a loading indicator
     */
    mask : function(view, message) {
        var toMask = view || Ext.Viewport;
        toMask.mask({
            xtype  : 'loadmask',
            zIndex : 2147483647,
            message: message || _getText('GLOBAL', 'loading')
        });
    },

    /**
     * removes the loading indicator
     */
    unmask : function(view) {
        var toMask = view || Ext.Viewport;
        toMask.unmask();
    },

    /**
     * Displays a collection of errors resulting from failed sql queries
     */
    showMessage : function(message) {
        Ext.Msg.alert(null, message);
    }
});
