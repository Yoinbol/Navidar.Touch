Ext.define('Navidar.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Navidar'
                },

                html: [
                    "Content here..."
                ].join("")
            }
        ]
    }
});
