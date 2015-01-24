/**
 * Created by Diego Garcia on 1/22/15.
 */
Ext.define('Navidar.view.projects.UserProjectsNavigator', {
    extend  : 'Navidar.view.base.Navigator',
    xtype   : 'user-projects-navigator',
    requires: [
        'Navidar.view.projects.UserProjects'
    ],

    config  : {
        title   : _getText('USERPROJECTS', 'tabtitle'),
        iconCls : 'home',

        items   : [
            {
                xtype   : 'user-projects'
            }
        ]
    }
});
