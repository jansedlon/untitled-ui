const { withTV } = require("tailwind-variants/dist/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				xxs: [
					"0.625rem",
					{
						lineHeight: "14px",
					},
				],
			},
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
	plugins: [],
});
