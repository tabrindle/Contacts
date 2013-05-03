Ext.define("Contacts.view.ContactList", {
    extend: 'Ext.dataview.List',
    xtype:'ContactList',
    requires: [
        'Contacts.store.ContactStore',
    ],
 
    config: {
        layout: 'fit',
        store: 'ContactStore', 
        grouped: true,
        plugins: [{
            xclass: 'Ext.plugin.PullRefresh',
            pullRefreshText: 'Pull down to refresh Contacts',
            refreshFn: function () {
                var store = Ext.getStore('ContactStore');
                store.load()
            }
        }], 
        itemTpl: '<div><b>Name:</b> {prefix} {first} {last} {suffix}</div>' +
                 '<div><b>Email:</b> {email}</div>' +
                 '<div><b>Address:</b> {address}</div>' +
                 '<div><b>Phone:</b> +1{phone}</div>',
        listeners: {
            itemswipe: function( list, index, target, record, e, eOpts ){
                Ext.Msg.confirm("Confirm Delete", "Are you sure you want to delete this record?", function(){
                    var store = Ext.getStore('ContactStore')
                    store.remove(record)
                })
            }
        },
        allowDeselect: true, 
    }
});