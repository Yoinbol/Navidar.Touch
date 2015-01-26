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
    },

    setSessionData: function (data) {
        var me      = this;

        me.set('user_id', data.id);
        me.set('first_name', data.first_name);
        me.set('last_name', data.last_name);
        me.set('middle_name', data.middle_name);
        me.set('name', data.name);
        me.set('gender', data.gender);
        me.set('email', data.email);

        if(data.locale) { //!me.get('locale') &&
            me.set('locale', data.locale.toLowerCase().replace('_', '-'));
        }

        me.save();
    }
});