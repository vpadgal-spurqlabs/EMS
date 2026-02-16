import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build'
  
  return {
    base: isProduction ? '/EMS/' : '/',
    plugins: [react()],
  }
})
