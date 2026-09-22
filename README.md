# AnswerBit 官网

面向大模型平台 GEO 优化服务的品牌官网。当前版本包含首页、GEO 服务页、AnswerGraph™ 方法论页与 GEO 指南。

## 技术选型

| 层级 | 方案 | 选择原因 |
| --- | --- | --- |
| 框架 | Next.js 16 App Router | 服务端渲染与静态生成兼顾；Metadata、Sitemap、Robots 和 OG 图片均有原生支持 |
| 语言 | TypeScript | 强类型、易维护，适合后续接 CMS、线索系统与监测产品 |
| 样式 | 原生 CSS + Design Tokens | 无运行时样式依赖，首屏稳定，便于精准控制品牌视觉与响应式表现 |
| 字体 | 本地 npm 字体资源 | 不依赖第三方字体请求，减少阻塞和隐私风险 |
| 图标 | Lucide React | SVG 输出、可访问、支持 Tree Shaking |
| 部署 | GitHub Actions + 1Panel/OpenResty | 推送 `main` 后自动构建静态站并原子发布 |

## SEO / GEO 基础

- 全站 SSR / SSG，正文直接存在于 HTML 中
- 独立 title、description、canonical 与 Open Graph 元信息
- `/sitemap.xml`、`/robots.txt`、`/llms.txt`、Web App Manifest
- Organization、FAQPage、TechArticle JSON-LD
- 语义化标题层级、文章署名、发布日期、更新时间与明确的定义段落
- 为 GPTBot、OAI-SearchBot、ClaudeBot、PerplexityBot 等公开抓取器设置允许规则
- 专门的服务、方法论和指南 URL，形成主题内容集群
- 响应式布局、减少动态效果模式、键盘跳转与表单标签
- 本地字体、极少客户端 JavaScript、按图标自动优化导入

> 上线前请在环境变量中配置真实站点地址：`NEXT_PUBLIC_SITE_URL=https://your-domain.com`，并在 Google Search Console、Bing Webmaster Tools 及对应国内站长平台提交 Sitemap。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 检查与构建

```bash
npm run lint
npm run build
npx serve out
```

## GitHub CI/CD 自动部署

仓库已包含 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)。每次推送到 `main` 时会：

1. 使用 Node.js 24 执行 `npm ci`、类型检查和静态构建。
2. 将 `out/` 打包并通过 SSH 上传到 `122.51.52.232`。
3. 原子替换 `/opt/1panel/www/sites/txanswerbit.com/index`。
4. 请求线上首页验证 `AnswerBit`；验证失败时恢复上一个版本。

部署地址、端口、目录和站点地址不写在工作流中，统一通过 GitHub 仓库的 **Settings → Secrets and variables → Actions** 管理。

在 **Secrets** 中添加：

| Secret | 内容 |
| --- | --- |
| `DEPLOY_USER` | SSH 用户名；该用户需要能写入部署目录，1Panel 默认通常使用 `root` |
| `DEPLOY_SSH_KEY` | CI 专用 SSH 私钥的完整内容 |
| `DEPLOY_KNOWN_HOSTS` | 服务器 SSH 主机公钥，防止 CI 连接到被冒充的服务器 |

建议在服务器生成单独的部署密钥，而不是复用个人私钥：

```bash
ssh-keygen -t ed25519 -C "github-actions-answerbit" -f ~/.ssh/answerbit_deploy
cat ~/.ssh/answerbit_deploy.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/answerbit_deploy
ssh-keyscan -p 22 122.51.52.232
```

把私钥保存为 `DEPLOY_SSH_KEY`，把 `ssh-keyscan` 的输出保存为 `DEPLOY_KNOWN_HOSTS`。服务器重装或主机密钥轮换后，需要重新生成该值。

在 **Variables** 中添加：

| Variable | 配置值 | 用途 |
| --- | --- | --- |
| `DEPLOY_HOST` | `122.51.52.232` | SSH 服务器地址 |
| `DEPLOY_PORT` | `22` | SSH 端口 |
| `DEPLOY_PATH` | `/opt/1panel/www/sites/txanswerbit.com/index` | 1Panel 网站运行目录 |
| `SITE_URL` | `http://122.51.52.232` | 构建 canonical/sitemap，并作为健康检查地址 |
| `SITE_HOST` | `txanswerbit.com` | 健康检查发送给 OpenResty 的 `Host` 请求头 |

1Panel 中的网站运行目录应保持为 `/opt/1panel/www/sites/txanswerbit.com/index`。安全响应头应在 OpenResty 网站配置中添加：

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
```

首次推送：

```bash
git init -b main
git add .
git commit -m "Configure GitHub CI/CD deployment"
git remote add origin git@github.com:YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

## 上线前需要替换

1. `.env` 中的正式域名。
2. `hello@answerbit.cn` 联系邮箱（若与实际邮箱不同）。
3. 备案号、公司主体、隐私政策链接。
4. 接入真实表单 API 或 CRM；当前表单使用邮件唤起，保证无后端时仍可用。
5. 接入分析工具后设置转化事件，并保持 Cookie 与隐私合规。
