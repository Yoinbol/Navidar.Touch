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
        title   : _getText('FRIENDS', 'tabtitle'),
        iconCls : 'home',

        items   : [
            {
                xtype   : 'friends-list'
            }
        ]
    }
});
