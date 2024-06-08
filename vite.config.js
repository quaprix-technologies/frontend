import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import environment from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), environment(['REACT_APP_EMAIL_RECEIVER'])],
})
