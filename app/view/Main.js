Ext.define('Contacts.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Number'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'List',
                iconCls: 'home',
                layout: 'fit',
                styleHtmlContent: true,

                items:  [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Contacts'
                    },
                    {
                        xtype: 'ContactList',
                    }
                ]                
            },
            {
                title: 'Form',
                iconCls: 'action',
                 layout: 'fit',

                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Contact Form',
                        items: [
                            {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Submit',
                                action: 'btnSubmitForm'
                            }
                        ]
                    },
                    {
                        xtype: 'ContactForm'
                    }
                ]
            }
        ]
    }
});
