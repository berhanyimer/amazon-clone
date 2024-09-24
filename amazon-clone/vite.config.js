import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "firebase/app": "firebase/compat/app",
      "firebase/auth": "firebase/compat/auth",
    },
  },
  plugins: [react()],
});
