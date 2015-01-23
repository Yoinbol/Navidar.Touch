/**
 * Created by Diego Garcia on 1/22/15.
 *
 * Application controller
 */
Ext.define('Navidar.controller.Application', {
    extend  : 'Navidar.controller.Base',

    requires    : [
        'Navidar.service.Device',
        'Navidar.service.Utility'
    ],

    config  : {

        views: [
            'Start',
            'Main'
        ]
    },

    /**
     * Application init function. This runs before the launch function.
     */
    init: function (app) {
        var me = this;
        me.initServices();
    },

    initServices: function () {
        var me  = this,
            app = me.getApplication();

        app.services = {
            device  : Ext.create('Navidar.service.Device', { application  : app }),
            utility : Ext.create('Navidar.service.Utility', { application  : app })
        };
    },

    launch: function () {
        var me = this;
        me.checkFacebookLoginStatus(me.checkFacebookLoginStatusCallback, me);
    },

    checkFacebookLoginStatus: function (callback, scope) {
        var me              = this,
            deviceService   = me.getService('device'),
            callbackScope   = scope || me,
            response        = {
                success         : true,
                userData        : {}
            };

        if(deviceService.isOnline()) {

            //Check the fb user session status
            facebookConnectPlugin.getLoginStatus(function (session) {

                if(session.status === 'connected') {

                    var fbPermissions   = me.getRequiredFacebookPermissions();

                    //Get fb user data
                    facebookConnectPlugin.api('/me', fbPermissions, function (userInfoResponse) {
                        response.userData = userInfoResponse;
                        callback && callback.call(callbackScope, response);
                    });

                }
                else {
                    // User is not connected to fb or the app
                    response.success = false;
                    callback && callback.call(callbackScope, response);
                }

            }, function (error) {
                //Error getting the facebook login status
                response.success = false;
                callback && callback.call(callbackScope, response);
            });
        }
        else {
            //Device is offline
            response.success = false;
            callback && callback.call(callbackScope, response);
        }
    },

    checkFacebookLoginStatusCallback: function (loginResponse) {

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        if(loginResponse.success === true) {

            // Initialize the main view
            Ext.Viewport.add(Ext.create('Navidar.view.Main'));

        }
        else {
            //There was a problem checking the facebook login status
            //Redirect the user to the start view
            Ext.Viewport.add(Ext.create('Navidar.view.Start'));
        }
    }
});
