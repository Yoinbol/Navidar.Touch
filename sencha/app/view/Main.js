Ext.define('Navidar.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Navidar.view.projects.UserProjectsNavigator',
        'Navidar.view.contributions.ContributionsNavigator',
        'Navidar.view.friends.FriendsNavigator'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype   : 'user-projects-navigator'
            },
            {
                xtype   : 'contributions-navigator'
            },
            {
                xtype   : 'friends-navigator'
            }
        ]
    }
});
