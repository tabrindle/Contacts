Ext.define("Contacts.view.ContactForm", {
    extend: 'Ext.form.Panel',
    xtype:'ContactForm',

    config: {
        id: 'form',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'prefix',
                        required: true,
                        label: 'Name Prefix'
                    },
                    {
                        xtype: 'textfield',
                        name: 'first',
                        required: true,
                        label: 'First Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'middle',
                        label: 'Middle Initial'
                    },
                    {
                        xtype: 'textfield',
                        name: 'last',
                        required: true,
                        label: 'Last Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'suffix',
                        label: 'Name Suffix'
                    },
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        required: true,
                        label: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name: 'address',
                        label: 'Address'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'phone',
                        required: true,
                        label: 'Phone Number'
                    },
                    /*{
                        xtype: 'textfield',
                        label: 'YMLP/YWLP'
                    },*/
                ]
            }
        ]
    }
})