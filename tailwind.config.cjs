const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require("tailwindcss/colors");

module.exports = {
	purge: {
		content: [
			"./src/**/*.html",
			"./src/**/*.svelte"
		],
		options: {
			defaultExtractor: (content) => [
				// This is an internal Tailwind function that we're not supposed to be allowed to use
				// So if this stops working, please open an issue at
				// https://github.com/svelte-add/tailwindcss/issues
				// rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		extend: {
			colors: {
				red: {
					lightest: "#ff2f40",
					light: "#ff2f40",
					DEFAULT: "#ee2c3c",
					dark: "#c82532",
					darkest: "#a21e29",
				}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
