/**
 * Created by Diego Garcia on 1/22/15.
 */
Ext.define('Navidar.store.friends.Friends', {
    extend  : 'Navidar.store.Base',
    requires: [
        'Navidar.model.friends.Friend'
    ],

    config  : {
        model: 'Navidar.model.friends.Friend'
    }
});
