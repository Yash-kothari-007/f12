import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';


// https://vitejs.dev/config/
export default defineConfig({
  server:{

    proxy:{
      '/api':'http://localhost:1300'
    }
  },
  plugins: [react()],
})
