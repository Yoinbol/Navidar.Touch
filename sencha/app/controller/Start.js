/**
 * Created by Diego Garcia on 1/20/15.
 *
 * Start controller
 */
Ext.define('Navidar.controller.Start', {
    extend  : 'Navidar.controller.Base',

    config  : {
        refs    : {
            startView   : 'start-view'
        },
        control : {
            startView   : {
                initialize  : 'onStartViewInitialize'
            }
        },

        views: [
            'Main'
        ]
    },

    onStartViewInitialize: function (startView) {
        var me = this;

        //Attach the tap listener to the login button
        startView.element.on({
            tap: me.loginWithFacebook,
            scope: me,
            delegate: '.login-container'
        });
    },

    loginWithFacebook: function () {
        var me              = this,
            deviceService   = me.getService('device');

        if(deviceService.isOnline()) {

            me.mask(null, _getText('START', 'checkingSession'));

            //Check the fb user session status
            facebookConnectPlugin.getLoginStatus(function (session) {

                me.unmask();

                if(session.status === 'connected') {

                    //Get the user data and show the main view
                    me.getUserFacebookData();
                }
                else {
                    //The user is not disconnected from fb or from the app
                    var fbPermissions = me.getRequiredFacebookPermissions();

                    //Try to login the user on facebook
                    facebookConnectPlugin.login(fbPermissions, function (loginResponse) {

                        //Get the user data and show the main view
                        me.getUserFacebookData();

                    }, function (error) {
                        alert('Error 1!');
                    });
                }

            }, function (error) {
                //Error getting the login status
                alert('Error 2!');
            });
        }
        else {
            //Device is offline
            var offlineMessage = _getText('GLOBAL', 'networkRequired');
            me.showMessage(offlineMessage);
        }
    },

    getUserFacebookData: function () {
        var me              = this,
            fbPermissions   = me.getRequiredFacebookPermissions();

        me.mask(null, _getText('START', 'gettingUserData'));

        //Get fb user data
        facebookConnectPlugin.api('/me', fbPermissions, function (userInfoResponse) {

            me.unmask();

            var currentView = Ext.Viewport.getActiveItem();

            // Initialize the main view
            Ext.Viewport.add(Ext.create('Navidar.view.Main'));

            //Destroy the current view (if applies)
            if(currentView) {
                currentView.destroy();
            }

        }, function (error) {
            //Error getting the user data
            alert('Error 3!');
        });
    }
});
