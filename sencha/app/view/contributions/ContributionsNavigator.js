/**
 * Created by Diego Garcia on 1/23/15.
 *
 * Contributions navigation view
 */
Ext.define('Navidar.view.contributions.ContributionsNavigator', {
    extend  : 'Navidar.view.base.Navigator',
    xtype   : 'contributions-navigator',
    requires: [
        'Navidar.view.contributions.UserContributions'
    ],

    config  : {
        title   : _getText('CONTRIBUTIONS', 'tabtitle'),
        iconCls : 'home',

        items   : [
            {
                xtype   : 'user-contributions'
            }
        ]
    }
});