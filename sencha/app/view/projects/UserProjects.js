/**
 * Created by Diego Garcia on 1/23/15.
 *
 * User projects list
 */
Ext.define('Navidar.view.projects.UserProjects', {
    extend  : 'Ext.List',
    xtype   : 'user-projects',

    config  : {
        title       : _getText('USERPROJECTS', 'viewTitle'),
        emptyText   : _getText('USERPROJECTS', 'noProjects'),
        store       : 'UserProjects'
    }
});
