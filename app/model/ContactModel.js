Ext.define('Contacts.model.ContactModel', {
	extend: 'Ext.data.Model',

	config: {
		idProperty: 'id',
		fields: [
			{
				name: 'id',
				mapping: 'contact.id',
				allowNull: false,
				persist: false
			},
			{
				name: 'first',
				mapping: 'contact.first',
				allowNull: false
			},
			{
				name: 'middle',
				mapping: 'contact.middle',
				allowNull: false,
			},
			{
				name: 'last',
				mapping: 'contact.last',
				allowNull: false,
			},
			{
				name: 'prefix',
				mapping: 'contact.prefix',
				allowNull: false,
			},
			{
				name: 'suffix',
				mapping: 'contact.suffix',
				allowNull: false,
			},
			{
				name: 'email',
				mapping: 'contact.email',
				allowNull: false,
			},
			{
				name: 'address',
				mapping: 'contact.address',
				allowNull: false,
			},
			{
				name: 'phone',
				mapping: 'contact.phone',
				allowNull: false,
			},
		],
		validations: [
        	{type: 'presence', field: 'first', message: 'Please enter your first name'},
        	{type: 'presence', field: 'last', message: 'Please enter your last name'},
        	{type: 'presence', field: 'prefix', message: 'Please enter your name prefix'},
        	{type: 'presence', field: 'phone', message: 'Please enter your phone number'},
        	{type: 'presence', field: 'email', message: 'Please enter your email'}
    	]
	}	
});