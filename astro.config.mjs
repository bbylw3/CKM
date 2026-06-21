// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// 动态 base 路径：真正无缝适配任何 GitHub 账号/任何仓库名
function getBase() {
  const repo = process.env.GITHUB_REPOSITORY;
  
  // 如果在 GitHub Actions 线上环境
  if (repo) {
    const repoName = repo.split("/")[1];
    
    // 只有当仓库名是特殊的 '用户名.github.io' 时（这种是真正的根目录部署），才返回 '/'
    // 其他任何普通仓库（如 CKM, CKM-Guideline 等），一律动态返回 '/仓库名/'
    if (repoName && !repoName.endsWith(".github.io")) {
      return `/${repoName}/`;
    }
  }
  
  // 本地开发环境默认使用根路径 '/'
  return "/";
}

// https://astro.build/config
export default defineConfig({
  // 这里的 site 格式现在完全正确，不会再报 Invalid url 了
  site: "https://ion.ndjp.net",
  
  // 🚀 真正的动态自动适配
  base: getBase(),
  
  outDir: "dist",
  build: {
    format: "directory", // 目录路由模式：overview/ → overview/index.html
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
