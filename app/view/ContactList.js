Ext.define("Contacts.view.ContactList", {
    extend: 'Ext.dataview.List',
    xtype:'ContactList',
    requires: [
        'Contacts.store.ContactStore',
    ],
 
    config: {
        layout: 'fit',
        store: 'ContactStore', 
        itemTpl: '<div><b>Name:</b> {prefix} {first} {last} {suffix}</div>' +
                 '<div><b>Email:</b> {email}</div>' +
                 '<div><b>Address:</b> {address}</div>' +
                 '<div><b>Phone:</b> +1{phone}</div>' 
    }
});