/**
 * Created by Diego Garcia on 1/22/15.
 *
 * Service to handle device logic related to the device
 */
Ext.define('Navidar.service.Device', {
    extend  : 'Navidar.service.Base',

    requires : [
        'Ext.device.Connection',
        'Ext.device.Geolocation'
    ],

    /**
     * Returns the network connection status of the device
     *
     * @returns {Boolean}
     */
    isOnline : function() {
        return Ext.device.Connection.isOnline();
    }
});
