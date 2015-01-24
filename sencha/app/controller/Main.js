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

    }
});