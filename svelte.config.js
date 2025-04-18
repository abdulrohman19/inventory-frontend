import path from 'path';
import expressAdapter from '@mankins/svelte-adapter-express';

const __dirname = path.resolve();

export default {
  kit: {
    adapter: expressAdapter({
      serverFile: path.join(__dirname, './adapter/express/server.js')
    }),
    alias: {
		$lib: '/src/lib'
    }
  },
};
