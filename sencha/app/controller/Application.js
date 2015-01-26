/**
 * Created by Diego Garcia on 1/22/15.
 *
 * Application controller
 */
Ext.define('Navidar.controller.Application', {
    extend  : 'Navidar.controller.Base',

    requires    : [
        'Navidar.service.Configuration',
        'Navidar.service.Application',
        'Navidar.service.Device',
        'Navidar.service.Utility',
        'Navidar.service.Facebook'
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

        var appService = app.getService('application');
        appService.loadSessionModel();
    },

    initServices: function () {
        var me  = this,
            app = me.getApplication();

        app.services = {
            configuration   : Ext.create('Navidar.service.Configuration', { application  : app }),
            application     : Ext.create('Navidar.service.Application', { application  : app }),
            device          : Ext.create('Navidar.service.Device', { application  : app }),
            utility         : Ext.create('Navidar.service.Utility', { application  : app }),
            facebook        : Ext.create('Navidar.service.Facebook', { application  : app })
        };
    },

    launch: function () {
        var me = this;
        me.checkFacebookLoginStatus(me.checkFacebookLoginStatusCallback, me);
    },

    checkFacebookLoginStatus: function (callback, scope) {
        var me              = this,
            deviceService   = me.getService('device'),
            appService      = me.getService('application'),
            facebookService = me.getService('facebook'),
            callbackScope   = scope || me,
            response        = {
                success         : true,
                session         : appService.getSession(),
                userData        : {}
            };

        if(deviceService.isOnline()) {

            facebookService.getLoginStatus(function (loginStatusResponse) {

                if(loginStatusResponse.success === true && loginStatusResponse.data) {

                    //Check the fb user session status
                    if(loginStatusResponse.data.status === 'connected') {

                        //Get the user data
                        facebookService.getMyData(function (userDataResponse) {

                            //Validate the service response
                            if(userDataResponse.success === true) {
                                response.userData = userDataResponse.data;
                                callback && callback.call(callbackScope, response);
                            }
                        }, me);
                    }
                    else {
                        // User is not connected to fb or the app
                        response.success = false;
                        callback && callback.call(callbackScope, response);
                    }
                }
                else {
                    //Error getting the facebook login status
                    response.success = false;
                    callback && callback.call(callbackScope, response);
                }

            }, me);
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

        if(loginResponse.success === true || loginResponse.session) {

            var session     = loginResponse.session,
                userData    = loginResponse.userData;

            //Update the user data (if there is a session and there is user data)
            session && userData && session.setSessionData(userData);

            setTimeout(function () {
                console.log('Session record', session);
            }, 10000);

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
