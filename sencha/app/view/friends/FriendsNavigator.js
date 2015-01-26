/**
 * Created by Diego Garcia on 1/23/15.
 *
 * Friends navigation view
 */
Ext.define('Navidar.view.friends.FriendsNavigator', {
    extend  : 'Navidar.view.base.Navigator',
    xtype   : 'friends-navigator',
    requires: [
        'Navidar.view.friends.FriendsList'
    ],

    config  : {
        title   : '<i class="ion-person-stalker"></i><span class="label">' + _getText('FRIENDS', 'tabtitle') + '</span>',
        iconCls : 'home',

        items   : [
            {
                xtype   : 'friends-list'
            }
        ]
    }
});
