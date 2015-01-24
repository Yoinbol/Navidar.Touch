/**
 * Created by Diego Garcia on 1/24/15.
 *
 * Session model used to store user data on local storage
 */
Ext.define('Navidar.model.application.Session', {
    extend  : 'Navidar.model.User',

    config  : {
        fields  : [
        ],

        proxy: {
            type : 'encodedlocalstorage'
        }
    }
});