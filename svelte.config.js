import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production'
        ? '/sveltekit-github-pages-demo'
        : ''
    }
  }
};

export default config;