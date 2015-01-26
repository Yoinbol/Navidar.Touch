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
            deviceService   = me.getService('device'),
            facebookService = me.getService('facebook');

        if(deviceService.isOnline()) {

            me.mask(null, _getText('START', 'checkingSession'));

            //Get the user login status
            facebookService.getLoginStatus(function (loginStatusResponse) {

                me.unmask();

                //Validate the user login status response
                if(loginStatusResponse.success === true) {

                    if(loginStatusResponse.data.status === 'connected') {

                        //Get the user data and show the main view
                        me.getUserFacebookData();
                    }
                    else {
                        //Try to login the user on facebook
                        facebookService.login(function (loginResponse) {

                            //Validate the login response
                            if(loginResponse.success === true) {
                                //Get the user data and show the main view
                                me.getUserFacebookData();
                            }
                            else {
                                me.showMessage('Error!');
                            }
                        }, me);
                    }
                }
                else {
                    //Error getting the user login status
                    me.showMessage('Error!');
                }
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
            facebookService = me.getService('facebook');

        me.mask(null, _getText('START', 'gettingUserData'));

        //Get the user data
        facebookService.getMyData(function (userDataResponse) {

            me.unmask();

            //Validate the service response
            if(userDataResponse.success === true) {

                var appService  = me.getService('application'),
                    session     = appService.getSession() || Ext.create('Navidar.model.application.Session', { id: me.getService('configuration').getSessionModelId() }),
                    currentView = Ext.Viewport.getActiveItem();

                me.unmask();

                //Update the user data
                session && userDataResponse && session.setSessionData(userDataResponse.data);

                // Initialize the main view
                Ext.Viewport.add(Ext.create('Navidar.view.Main'));

                //Destroy the current view (if applies)
                if(currentView) {
                    currentView.destroy();
                }
            }
            else {
                alert('Error getting user data!');
            }
        }, me);
    }
});
