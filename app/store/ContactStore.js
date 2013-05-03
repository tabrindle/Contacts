Ext.define('Contacts.store.ContactStore', {
	extend: 'Ext.data.Store',

	config: {
		autoLoad: true,
		model: 'Contacts.model.ContactModel',
		sorters: 'last',
		grouper: {
			groupFn: function(record) {
				var letter = record.get('last')[0].toUpperCase()
				return letter;
			}
	    },
		proxy: {
			type: 'ajax',
			api: {
				read: 'http://trevorbrindle.com/api/get.php',
				create: 'http://trevorbrindle.com/api/post.php',
				destroy: 'http://trevorbrindle.com/api/delete.php'
			},
			reader: {
				type: 'json',
				rootProperty: 'contacts',
			},
			writer: {
				//encode: true,
			}
		},
		listeners: {
			load: "onLoad",
		}
	},

	onLoad: function(store, records, success, operation) {
		if (success){
			//console.log("Success")
			//console.log(records)

			// Destroy the #appLoadingIndicator element
       		if(Ext.fly('appLoadingIndicator')){
       			Ext.fly('appLoadingIndicator').destroy();
       		}
		}
        else{
            Ext.Msg.alert("Error", "Unable to Load Contacts", Ext.EmptyFn)
        }
	},
});