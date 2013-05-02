Ext.define('Contacts.model.ContactModel', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
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
			{
				name: 'gender',
				mapping: 'contact.gender',
				allowNull: false,
			}
		]
	}
});