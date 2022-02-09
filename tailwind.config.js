module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				avenir: ['Avenir', 'sans-serif'],
			},
			colors: {
				primary: '#0D2D57',
				secondary: '#F5F5F5',
			},
			rotate: {
				270: '270deg',
			},
		},
	},
	plugins: [],
};
