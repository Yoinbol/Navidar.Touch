/**
 * Created by Diego Garcia on 1/23/15.
 *
 * Project model
 */
Ext.define('Navidar.model.projects.Project', {
    extend  : 'Navidar.model.Base',

    config  : {

        fields  : [
            { name: 'id', type: 'integer' },
            { name: 'title', type: 'string' },
            { name: 'createdOn', type: 'date' },
            { name: 'deadline', type: 'date' }
        ]
    }
});
