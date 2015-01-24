/**
 * Created by Diego Garcia on 1/23/15.
 *
 * User projects store
 */
Ext.define('Navidar.store.projects.UserProjects', {
    extend  : 'Navidar.store.Base',
    requires: [
        'Navidar.model.projects.Project'
    ],

    config  : {
        model   : 'Navidar.model.projects.Project'
    }
});
