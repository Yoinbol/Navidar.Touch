/**
 * Created by Diego Garcia on 1/22/15.
 */
Ext.define('Navidar.controller.friends.FriendsNavigator', {
    extend  : 'Navidar.controller.Base',

    config: {
        refs: {
            friendsNavigator    : 'friends-navigator',
            friendsList         : 'friends-list'
        },
        control: {
            friendsNavigator: {
                activate    : 'onFriendsNavigatorActivate'
            },
            friendsList : {
                initialize  : 'onFriendsListInitialize'
            }
        }
    },

    onFriendsListInitialize: function (friendsList) {
    },

    onFriendsNavigatorActivate: function (friendsNavigator) {
        var me              = this,
            friendsStore    = Ext.getStore('Friends');

        if(friendsStore.getInitialized() === false) {

            me.mask(friendsNavigator);

            //Get user friends
            facebookConnectPlugin.api('/me/friends', ['user_friends'], function (friendsResponse) {

                me.unmask(friendsNavigator);

                console.log('User friends data', friendsResponse);

                if(friendsResponse && !friendsResponse.error) {
                    friendsStore.setData(friendsResponse.data);
                }

            }, function (error) {
                //Error getting user friends
                console.error(error);
            });
        }
    }
});
