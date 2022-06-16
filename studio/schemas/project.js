export default {
	name: 'project',
	type: 'document',
	title: 'Project',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Project Title'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		},
		{
			name: 'favoriteColor',
			title: 'Favorite color',
			type: 'color'
		},
		{
			name: 'date',
			type: 'date',
			options: {
				dateFormat: 'MM/DD/YYYY',
				calendarTodayLabel: 'Today'
			}
		},
		{
			title: 'Agency',
			name: 'agency',
			type: 'reference',
			to: [{ type: 'agency' }]
		},
		{
			title: 'Text',
			name: 'text',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
};
