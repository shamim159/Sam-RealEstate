import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {//everytime a request is made with /api it will add localhost:3000 at the beginning
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
