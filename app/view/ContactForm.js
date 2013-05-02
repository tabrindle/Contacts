Ext.define("Contacts.view.ContactForm", {
    extend: 'Ext.form.Panel',
    xtype:'ContactForm',

    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name Prefix'
                    },
                    {
                        xtype: 'textfield',
                        label: 'First Name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Middle Initial'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Last Name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Name Suffix'
                    },
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'emailfield',
                        label: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Address'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Phone Number'
                    },
                    {
                        xtype: 'textfield',
                        label: 'YMLP/YWLP'
                    },
                ]
            }
        ]
    }
})