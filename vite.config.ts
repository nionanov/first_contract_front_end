import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    nodePolyfills({
      include: ["buffer", "process"], // important
      globals: {
        Buffer: true, // makes Buffer global
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      buffer: "buffer", // ensure vite knows to polyfill it
    },
  },
  define: {
    "process.env": {}, // avoids "process is not defined"
  },
  base: "/"
})
