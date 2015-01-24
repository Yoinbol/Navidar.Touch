/**
 * Created by Diego Garcia on 1/23/15.
 *
 * Contributions navigator controller
 */
Ext.define('Navidar.controller.contributions.ContributionsNavigator', {
    extend  : 'Navidar.controller.Base',

    config  : {
        refs    : {
            contributionsNavigator  : 'contributions-navigator'
        },
        control : {
            contributionsNavigator  : {
                activate    : 'onContributionsNavigatorActivate'
            }
        }
    },

    onContributionsNavigatorActivate: function (contributionsNavigator) {
        var me                  = this,
            contributionsStore  = Ext.getStore('Contributions');

        //TODO: call the API and fill this store with real data
        contributionsStore.setData([]);
    }
});