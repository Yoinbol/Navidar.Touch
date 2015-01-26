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
        title   : '<i class="ion-heart"></i><span class="label">' + _getText('CONTRIBUTIONS', 'tabtitle') + '</span>',
        iconCls : 'home',

        items   : [
            {
                xtype   : 'user-contributions'
            }
        ]
    }
});