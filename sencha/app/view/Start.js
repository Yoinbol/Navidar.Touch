/**
 * Created by Diego Garcia on 1/20/15.
 *
 * Start view. Intended to let the user login.
 */
Ext.define('Navidar.view.Start', {
    extend  : 'Ext.Container',
    xtype   : 'start-view',

    config  : {

        scrollable  : true,
        baseCls     : 'start-view',
        data        : {},

        tpl    : new Ext.XTemplate(''.concat(
                '<div class="start-view-container">',
                '   <div class="img-container">',
                '       <img src="resources/images/navidar-logo.jpeg" />',
                '   </div>',
                '   <div class="login-container">',
                '       <i class="ion-social-facebook"></i>',
                '       <span>{[_getText(\'START\', \'loginWithFb\')]}</span>',
                '   </div>',
                '</div>'
            )
        )
    }
});
