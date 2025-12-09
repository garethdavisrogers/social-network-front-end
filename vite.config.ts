import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __API_URL__ : JSON.stringify("http://localhost:8080"),
    __LOGIN_URL__: JSON.stringify("auth/login"),
    __REGISTER_URL__: JSON.stringify("auth/register")
  }
})
