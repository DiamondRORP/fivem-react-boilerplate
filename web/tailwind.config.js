/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				0: '0 0 0 rgba(0, 0, 0, 0)',
				'sm': '1px 4px 2px var(--tw-shadow-color)',
				'lg': '0 4px 18px var(--tw-shadow-color)',
			},
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
    			matchUtilities(
    				{
    					'text-shadow': (value) => ({
    						textShadow: value,
    					}),
    				},
    				{ values: theme('textShadow') }
    			)
    }),
],
}
