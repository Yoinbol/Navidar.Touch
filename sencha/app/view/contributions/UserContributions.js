/**
 * Created by Diego Garcia on 1/23/15.
 *
 * User contributions list
 */
Ext.define('Navidar.view.contributions.UserContributions', {
    extend  : 'Ext.List',
    xtype   : 'user-contributions',

    config  : {
        title       : _getText('CONTRIBUTIONS', 'viewTitle'),
        emptyText   : _getText('CONTRIBUTIONS', 'noContributions'),
        store       : 'Contributions'
    }
});