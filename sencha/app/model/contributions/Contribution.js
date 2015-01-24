/**
 * Created by Diego Garcia on 1/23/15.
 *
 * Contribution model
 */
Ext.define('Navidar.model.contributions.Contribution', {
    extend  : 'Navidar.model.Base',

    config  : {
        fields  : [
            { name: 'id', type: 'integer' },
            { name: 'projectId', type: 'integer' }
        ]
    }
});
