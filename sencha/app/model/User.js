/**
 * Created by Diego Garcia on 1/24/15.
 *
 * Base user model
 */
Ext.define('Navidar.model.User', {
    extend  : 'Navidar.model.Base',

    config  : {
        fields  : [
            { name: 'user_id', type: 'string' },
            { name: 'first_name', type: 'string' },
            { name: 'last_name', type: 'string' },
            { name: 'middle_name', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'gender', type: 'string' },
            { name: 'locale', type: 'string' },
            { name: 'email', type: 'string' }
        ]
    }
});
