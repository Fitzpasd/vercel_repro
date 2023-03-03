import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import { partytownVite } from '@builder.io/partytown/utils';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(process.cwd(), 'static', '~partytown')
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
