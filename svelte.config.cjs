const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs');
const sveltePreprocess = require('svelte-preprocess');
const adapter = require(process.env.ADAPTER || '@sveltejs/adapter-node');
const options = JSON.stringify(process.env.OPTIONS || '{}');
// const adapterStatic = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		sveltePreprocess(),
		mdsvex(mdsvexConfig)
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: adapterNetlify(),
		adapter: adapter(options),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
