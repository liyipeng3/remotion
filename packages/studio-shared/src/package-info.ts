export const packages = [
	'ai-improvements',
	'animation-utils',
	'animated-emoji',
	'astro-example',
	'babel-loader',
	'bugs',
	'bundler',
	'cli-autocomplete',
	'cli',
	'cloudrun',
	'compositor-darwin-arm64',
	'compositor-darwin-x64',
	'compositor-linux-arm64-gnu',
	'compositor-linux-arm64-musl',
	'compositor-linux-x64-gnu',
	'compositor-linux-x64-musl',
	'compositor-win32-x64-msvc',
	'core',
	'create-video',
	'discord-poster',
	'docusaurus-plugin',
	'docs',
	'enable-scss',
	'eslint-config',
	'eslint-config-internal',
	'eslint-plugin',
	'example-without-zod',
	'example',
	'fonts',
	'gif',
	'google-fonts',
	'install-whisper-cpp',
	'it-tests',
	'lambda-go-example',
	'lambda-go',
	'lambda-php',
	'lambda-python',
	'lambda',
	'layout-utils',
	'lottie',
	'media-utils',
	'motion-blur',
	'noise',
	'paths',
	'player-example',
	'player',
	'preload',
	'renderer',
	'rive',
	'shapes',
	'skia',
	'streaming',
	'serverless',
	'studio-server',
	'studio-shared',
	'studio',
	'tailwind',
	'test-utils',
	'three',
	'transitions',
	'media-parser',
	'zod-types',
	'webcodecs',
	'convert',
	'captions',
	'openai-whisper',
	'compositor',
] as const;

export type Pkgs = (typeof packages)[number];

export const descriptions: {[key in Pkgs]: string | null} = {
	compositor: 'Rust binary for Remotion',
	player: 'React component for embedding a Remotion preview into your app',
	cloudrun: 'Render Remotion videos on Google Cloud Run',
	renderer: 'Render Remotion videos using Node.js or Bun',
	cli: 'Control Remotion features using the `npx remotion` command',
	core: 'Make videos programmatically',
	lambda: 'Render Remotion videos on AWS Lambda',
	bundler: 'Bundle Remotion compositions using Webpack',
	'studio-server': 'Run a Remotion Studio with a server backend',
	'install-whisper-cpp': 'Helpers for installing and using Whisper.cpp',
	'google-fonts': 'Use Google Fonts in Remotion',
	'media-utils': 'Utilities for working with media files',
	lottie: 'Include Lottie animations in Remotion',
	'layout-utils': 'Utilities for working with layouts',
	noise: 'Noise generation functions',
	'motion-blur': 'Motion blur effect for Remotion',
	preload: 'Preloads assets for use in Remotion',
	shapes: 'Generate SVG shapes',
	'zod-types': 'Zod types for Remotion',
	gif: 'Embed GIFs in a Remotion video',
	'eslint-plugin': 'Rules for writing Remotion code',
	'eslint-config': 'Default configuration for Remotion templates',
	'compositor-linux-x64-gnu': 'Linux x64 binary for the Remotion Rust code',
	'compositor-linux-x64-musl': 'Linux x64 binary for the Remotion Rust code',
	'compositor-darwin-x64': 'MacOS x64 binary for the Remotion Rust code',
	'compositor-darwin-arm64':
		'MacOS Apple Silicon binary for the Remotion Rust code',
	'compositor-linux-arm64-gnu': 'Linux ARM64 binary for the Remotion Rust code',
	'compositor-linux-arm64-musl':
		'Linux ARM64 binary for the Remotion Rust code',
	'babel-loader': 'Babel loader for Remotion',
	fonts: 'Helpers for loading local fonts into Remotion',
	transitions: 'Library for creating transitions in Remotion',
	'enable-scss': 'Enable SCSS support in Remotion',
	'create-video': 'Create a new Remotion project',
	'studio-shared':
		'Internal package for shared objects between the Studio backend and frontend',
	tailwind: 'Enable TailwindCSS support in Remotion',
	streaming: 'Utilities for streaming data between programs',
	'media-parser': 'A pure JavaScript library for parsing video files',
	rive: 'Embed Rive animations in a Remotion video',
	paths: 'Utilities for working with SVG paths',
	studio: 'APIs for interacting with the Remotion Studio',
	skia: 'Include React Native Skia components in a Remotion video',
	three: 'Include React Three Fiber components in a Remotion video',
	'astro-example': null,
	'lambda-go-example': null,
	'compositor-win32-x64-msvc': null,
	'animation-utils': 'Helpers for animating CSS properties',
	'test-utils': null,
	'example-without-zod': null,
	'lambda-go': null,
	example: null,
	'lambda-php': null,
	bugs: null,
	docs: null,
	'it-tests': null,
	'lambda-python': null,
	'player-example': null,
	'ai-improvements': null,
	'discord-poster': null,
	'cli-autocomplete': null,
	'docusaurus-plugin': null,
	'animated-emoji': 'Google Fonts Animated Emojis as Remotion components',
	serverless: 'A runtime for distributed rendering',
	webcodecs: 'Media conversion in the browser',
	convert: 'Video conversion tool - convert.remotion.dev',
	captions: 'Primitives for dealing with captions',
	'openai-whisper': 'Work with the output of the OpenAI Whisper API',
	'eslint-config-internal': "ESLint condig for Remotion's internal packages",
};

export const apiDocs: {[key in Pkgs]: string | null} = {
	player: 'https://www.remotion.dev/docs/player',
	cloudrun: 'https://www.remotion.dev/docs/cloudrun',
	renderer: 'https://www.remotion.dev/docs/renderer',
	cli: 'https://www.remotion.dev/docs/cli',
	core: 'https://www.remotion.dev/docs/remotion',
	lambda: 'https://www.remotion.dev/docs/lambda',
	bundler: 'https://www.remotion.dev/docs/bundler',
	'studio-server': null,
	'install-whisper-cpp': 'https://www.remotion.dev/docs/install-whisper-cpp',
	'google-fonts': 'https://www.remotion.dev/docs/google-fonts',
	'media-utils': 'https://www.remotion.dev/docs/media-utils',
	lottie: 'https://www.remotion.dev/docs/lottie',
	'layout-utils': 'https://www.remotion.dev/docs/layout-utils',
	noise: 'https://www.remotion.dev/docs/noise',
	'motion-blur': 'https://www.remotion.dev/docs/motion-blur',
	preload: 'https://www.remotion.dev/docs/preload',
	shapes: 'https://www.remotion.dev/docs/shapes',
	'zod-types': 'https://www.remotion.dev/docs/zod-types',
	gif: 'https://www.remotion.dev/docs/gif',
	'eslint-plugin':
		'https://www.remotion.dev/docs/brownfield#install-the-eslint-plugin',
	'eslint-config':
		'https://www.remotion.dev/docs/brownfield#install-the-eslint-plugin',
	'compositor-linux-x64-gnu': null,
	'compositor-linux-x64-musl': null,
	'compositor-darwin-x64': null,
	'ai-improvements': null,
	'discord-poster': null,
	'cli-autocomplete': null,
	'docusaurus-plugin': null,
	'animation-utils': 'https://www.remotion.dev/docs/animation-utils/',
	'example-without-zod': null,
	'lambda-go': null,
	example: null,
	'lambda-php': null,
	bugs: null,
	docs: null,
	'it-tests': null,
	'lambda-python': null,
	'player-example': null,
	'astro-example': null,
	'lambda-go-example': null,
	'test-utils': null,
	'babel-loader': 'https://www.remotion.dev/docs/legacy-babel',
	'compositor-darwin-arm64': null,
	'compositor-linux-arm64-gnu': null,
	'compositor-linux-arm64-musl': null,
	'compositor-win32-x64-msvc': null,
	'enable-scss': 'https://www.remotion.dev/docs/enable-scss/overview',
	'create-video': 'https://remotion.dev/templates',
	'studio-shared': null,
	'media-parser': 'https://www.remotion.dev/docs/media-parser',
	fonts: 'https://www.remotion.dev/docs/fonts-api',
	paths: 'https://www.remotion.dev/paths',
	rive: 'https://www.remotion.dev/docs/rive',
	tailwind: 'https://www.remotion.dev/docs/tailwind/tailwind',
	skia: 'https://www.remotion.dev/docs/skia',
	three: 'https://www.remotion.dev/docs/three',
	streaming: null,
	serverless: null,
	studio: 'https://www.remotion.dev/docs/studio/api',
	transitions: 'https://www.remotion.dev/transitions',
	'animated-emoji': 'https://www.remotion.dev/docs/animated-emoji',
	webcodecs: null,
	convert: 'https://convert.remotion.dev',
	captions: 'https://remotion.dev/docs/captions',
	'openai-whisper': 'https://www.remotion.dev/docs/openai-whisper',
	'eslint-config-internal': null,
	compositor: null,
};
