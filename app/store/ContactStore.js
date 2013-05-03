Ext.define('Contacts.store.ContactStore', {
	extend: 'Ext.data.Store',

	config: {
		autoLoad: true,
		model: 'Contacts.model.ContactModel',
		proxy: {
			type: 'ajax',
			api: {
				read: 'http://trevorbrindle.com/api/get.php',
				create: 'http://trevorbrindle.com/api/post.php',
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
       		Ext.fly('appLoadingIndicator').destroy();

        	// Initialize the main view
        	Ext.Viewport.add(Ext.create('Contacts.view.Main'));
		}
        else{
            Ext.Msg.alert("Error", "Unable to Load Store", Ext.EmptyFn)
        }
	},
});