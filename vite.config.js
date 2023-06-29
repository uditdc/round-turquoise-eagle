import {glob} from 'glob'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "**/*.html"), { ignore: ['dist/**', 'node_modules/**'] }),
    },
  },
})