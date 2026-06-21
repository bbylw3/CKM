// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ion.ndjp.net",
  
  // 关键修复：指定子路径为 /CKM，确保打包后的 JS/CSS 资源能够正确寻址
  base: "/CKM",

  // 构建输出目录
  outDir: "dist",
  
  // 输出 .html 文件（如 overview.html），保持与原项目 URL 结构一致
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
