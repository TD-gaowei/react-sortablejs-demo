import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import styleImport from "vite-plugin-style-import";

import path from "path";

const resolve = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      utils: resolve("src/utils"),
      assets: resolve("src/assets"),
      pages: resolve("src/pages"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    reactRefresh(),

    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
});
