Ext.define('Contacts.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Number',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        id: 'tabPanel',
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'List',
                iconCls: 'info',
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
                iconCls: 'settings',
                layout: 'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Contact Form',
                        items: [
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Submit',
                                handler: function(){
                                    var form = Ext.ComponentQuery.query('#form')[0]
                                    var record = Ext.create("Contacts.model.ContactModel", form.getValues())
                                    var errors = record.validate()
                                    if (errors.isValid()){
                                        var store = Ext.getStore('ContactStore')
                                        store.add(record)
                                        console.log(store)
                                        form.reset()
                                        store.sync()
                                        var tabPanel = Ext.ComponentQuery.query('#tabPanel')[0]
                                        tabPanel.setActiveItem(0)
                                    } 
                                    else {
                                        var message="";
                                        errors.each(function (item, index, length) {
                                            message = message + item.getMessage() + '</br>';
                                        })
                                        Ext.Msg.alert("Error - Missing Fields", message)
                                    }
                                }
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
