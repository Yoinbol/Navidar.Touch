/**
 * Created by Diego Garcia on 1/21/15.
 *
 * View to show user friends list
 */
Ext.define('Navidar.view.friends.FriendsList', {
    extend  : 'Ext.List',
    xtype   : 'friends-list',

    config  : {
        title       : _getText('FRIENDS', 'viewTitle'),
        emptyText   : _getText('FRIENDS', 'noFriends'),
        store       : 'Friends'
    }
});
