/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // or 'media' if you prefer OS-level dark mode
	content: [
		'../templates/**/*.html', // Scans templates in the theme app
		'../../**/templates/**/*.html', // Scans templates in other apps if any
	],
	theme: {
		extend: {
			// You can extend your theme here
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'), // Often useful with Django forms
	],
}