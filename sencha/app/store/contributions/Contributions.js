/**
 * Created by Diego Garcia on 1/23/15.
 *
 * Contributions store
 */
Ext.define('Navidar.store.contributions.Contributions', {
    extend  : 'Navidar.store.Base',
    requires: [
        'Navidar.model.contributions.Contribution'
    ],

    config  : {
        model   : 'Navidar.model.contributions.Contribution'
    }
});
