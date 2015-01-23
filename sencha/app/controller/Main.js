/**
 * Created by Diego Garcia on 1/18/15.
 */
Ext.define('Navidar.controller.Main', {
    extend: 'Navidar.controller.Base',
    
    config: {
        refs: {
            main: 'main'
        },
        control: {
            main: {
                initialize: 'onMainInitialize'
            }
        }
    },

    onMainInitialize: function (mainView) {
        var me = this,
            friendsButton = mainView.down('button[itemId = friends]');

        friendsButton.on({
            tap: me.loadUserFriends,
            scope: me
        });
    },

    loadUserFriends: function () {


        console.log('Aqui estoy 2!!');

        //Get fb user data
        facebookConnectPlugin.api('/me/friends', ['user_friends'], function (friendsResponse) {

            console.log('User friends data', friendsResponse);
        }, function (error) {
            console.error(error);
        });

    },

    onButtonTap: function (mainView) {

        var textarea = mainView.down('textareafield[itemId = fbdata]');

        facebookConnectPlugin.getLoginStatus(function (session) {

            switch (session.status) {
                case 'connected':

                    var fbFields = ['public_profile', 'email'];

                    //Get fb user data
                    facebookConnectPlugin.api('/me', fbFields, function (userInfoResponse) {

                        textarea.setValue(JSON.stringify(userInfoResponse));
                    });

                    break;

                case 'not_authorized':
                    alert('The person is logged into Facebook, but not your app.');
                    break;

                default:
                    //alert('The person is not logged into Facebook, so we\'re not sure if they are logged into this app or not.');

                    facebookConnectPlugin.login(["public_profile", "email"], function (loginResponse) {

                        alert(loginResponse);
                        textarea.setValue(JSON.stringify(loginResponse));
                        
                    }, function (error) {

                        alert('Error!');
                    });
                    break;
            }
        }, true);

    }
});