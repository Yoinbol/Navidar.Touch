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
        var friendsStore = Ext.getStore('Friends');

        if(friendsStore.getInitialized() === false) {

            var me              = this,
                facebookService = me.getService('facebook');

            //Mask the view
            me.mask(friendsNavigator);
            //Get user friends
            facebookService.getFriends(function (friendsResponse) {
                //Unmask the view
                me.unmask(friendsNavigator);
                //Validate the service response
                if(friendsResponse.success === true) {
                    friendsStore.setData(friendsResponse.data);
                }
            }, me);
        }
    }
});
