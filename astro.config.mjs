// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ion.ndjp.net",
  
  // 1. 确保这里的子路径和你的 GitHub 仓库名/部署子目录完全一致
  base: "/CKM", 

  outDir: "dist",
  
  build: {
    // 2. 关键修改：改回 directory。
    // 这会让打包产物变成 /overview/index.html，解决静态托管平台刷新 404 的问题
    format: "directory", 
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
