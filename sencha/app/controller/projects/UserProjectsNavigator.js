/**
 * Created by Diego Garcia on 1/23/15.
 *
 * User projects navigator controller
 */
Ext.define('Navidar.controller.projects.UserProjectsNavigator', {
    extend  : 'Navidar.controller.Base',

    config  : {
        refs    : {
            userProjectsNavigator   : 'user-projects-navigator'
        },
        control : {
            userProjectsNavigator   : {
                activate    : 'onUserProjectsNavigatorActivate'
            }
        }
    },

    onUserProjectsNavigatorActivate: function (userProjectsNavigator) {
        var me                  = this,
            userProjectsStore   = Ext.getStore('UserProjects');

        //TODO: call the API and fill this store with real data
        userProjectsStore.setData([]);
    }
});