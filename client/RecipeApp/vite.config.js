import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/account/saved":"http://localhost:5000/",
      "/account/get":"http://localhost:5000/",
      "/auth/signup":"http://localhost:5000/",
      "/auth/signin":"http://localhost:5000/",
      "/auth/getDetails":"http://localhost:5000/",
      "/account/delete":"http://localhost:5000/",
    },
  },
})
