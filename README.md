# 1874.cool

1874 的个人主页，使用 Next.js App Router 构建并部署在 Vercel。首页内容来自 `config/site.json`，博客文章由 GitHub Actions 每日从 RSS 自动同步。

## 环境

- Node.js 24.x
- pnpm 10.32.1

项目通过 `package.json#packageManager` 固定 pnpm 版本。

## 本地开发

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

开发服务器默认运行在 <http://localhost:3005>。

## 常用命令

| 命令                | 用途                                         |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | 启动开发服务器                               |
| `pnpm build`        | 创建生产构建                                 |
| `pnpm start`        | 启动生产服务器                               |
| `pnpm lint`         | 运行 ESLint                                  |
| `pnpm typecheck`    | 运行 TypeScript 类型检查                     |
| `pnpm format:check` | 检查 Prettier 格式                           |
| `pnpm format:write` | 写入 Prettier 格式                           |
| `pnpm verify`       | 运行格式、lint、类型、构建与生产依赖安全检查 |

## 内容同步

```bash
pnpm sync:blog-posts
pnpm generate:post-icons
```

`.github/workflows/sync-blog-posts.yml` 每日获取博客 RSS，更新 `config/site.json`，为文章生成稳定的 Notion 图标，并只在内容变化时提交该文件。

## 部署

站点由 Vercel 部署。Pull request 和 `master` push 会通过 GitHub Actions 执行 `pnpm verify`；依赖安装必须使用 frozen lockfile。
