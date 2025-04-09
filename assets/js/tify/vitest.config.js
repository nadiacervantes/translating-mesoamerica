import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			include: ['tests/unit/**/*.spec.js'],
			root: fileURLToPath(new URL('./', import.meta.url)),

			// Prevent canvas-related error in unit tests
			// https://github.com/wobsoriano/vitest-canvas-mock
			setupFiles: ['./vitest.setup.js'],
			deps: {
				optimizer: {
					web: {
						include: ['vitest-canvas-mock'],
					},
				},
			},
			poolOptions: {
				threads: {
					singleThread: true,
				},
			},
			environmentOptions: {
				jsdom: {
					resources: 'usable',
				},
			},
		},
	}),
);
