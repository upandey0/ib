import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    }
  }
})
