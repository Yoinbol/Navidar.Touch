/**
 * Created by Diego Garcia on 1/25/15.
 *
 * Facebook data service
 */
Ext.define('Navidar.service.Facebook', {
    extend  : 'Navidar.service.Base',

    config  : {

        requiredFacebookPermissions: ['public_profile', 'email', 'user_friends']

    },

    getLoginStatus: function (callback, scope) {
        var me              = this,
            callbackScope   = scope || me,
            response        = {
                success : true,
                data    : null
            };

        facebookConnectPlugin.getLoginStatus(function (session) {

            response.data = session;
            callback && callback.call(callbackScope, response);

        }, function (error) {
            //Error getting the facebook login status
            console.error('Error getting user login status', error);
            response.success = false;
            callback && callback.call(callbackScope, response);
        });
    },

    login: function (callback, scope) {
        var me              = this,
            fbPermissions   = me.getRequiredFacebookPermissions(),
            callbackScope   = scope || me,
            response        = {
                success : true,
                data    : null
            };

        //Try to login the user on facebook
        facebookConnectPlugin.login(fbPermissions, function (loginResponse) {

            response.data = loginResponse;
            callback && callback.call(callbackScope, response);

        }, function (error) {
            //Error login user
            console.error('Error login user', error);
            response.success = false;
            callback && callback.call(callbackScope, response);
        });
    },

    getMyData: function (callback, scope) {
        var me              = this,
            fbPermissions   = me.getRequiredFacebookPermissions(),
            callbackScope   = scope || me,
            response        = {
                success : true,
                data    : null
            };

        //Get fb user data
        facebookConnectPlugin.api('/me', fbPermissions, function (userInfoResponse) {
            response.data = userInfoResponse;
            callback && callback.call(callbackScope, response);
        }, function (error) {
            //Error getting user data
            console.error('Error getting user data', error);
            response.success = false;
            callback && callback.call(callbackScope, response);
        });
    },

    getFriends: function (callback, scope) {
        var me              = this,
            callbackScope   = scope || me,
            response        = {
                success : true,
                data    : null
            };

        facebookConnectPlugin.api('/me/friends', ['user_friends'], function (friendsResponse) {

            console.log('User friends data', friendsResponse);

            if(friendsResponse && !friendsResponse.error) {
                response.data = friendsResponse.data;
            }
            else {
                response.success = false;
            }

            callback && callback.call(callbackScope, response);

        }, function (error) {
            //Error getting user friends
            console.error('Error getting user friends', error);

            response.success = false;
            callback && callback.call(callbackScope, response);
        });
    }
});
