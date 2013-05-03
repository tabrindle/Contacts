//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Contacts': 'app'
});
//</debug>

Ext.application({
    name: 'Contacts',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'ContactList', 'ContactForm'],

    stores: ['ContactStore'],

    models: ['ContactModel'],

    launch: function() {
        Ext.Viewport.add(Ext.create('Contacts.view.Main'))
    }
});
