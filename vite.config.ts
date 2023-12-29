import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: loadEnv(mode, process.cwd(), ''),
      __APP_VERSION__: JSON.stringify('v1.0.0')
    }
  }
})
