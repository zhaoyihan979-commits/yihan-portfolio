# YIHAN · 翌涵 — 个人简历网站

React + Vite + GSAP ScrollTrigger 的个人作品册网站，可部署到 Cloudflare Pages。

## 本地启动

```bash
npm install
npm run dev
```

浏览器打开终端里显示的地址（默认 http://localhost:5173）。

## 生产构建与预览

```bash
npm run build       # 产物输出到 dist/
npm run preview     # 本地预览构建产物
```

## 部署（Cloudflare Pages）

- 构建命令：`npm run build`
- 输出目录：`dist`
- 已在 `public/_redirects` 配好 SPA 回退（`/* -> /index.html 200`），详情页直链可正常刷新。

## 在哪改内容

| 要改的东西 | 文件 |
| --- | --- |
| 所有文案 / 三个作品 / 联系方式 / 导航 | `src/content/site.js` |
| 配色与字号等设计变量 | `src/styles/global.css`（`:root` 里的 CSS 变量） |
| 星形票根角色 / 票券封面图标 | `src/components/StarStub.jsx`、`src/components/CoverIcon.jsx`（都是原生 SVG） |

联系方式集中在 `site.contact`：留空字符串的项会自动隐藏，补上即可显示。

## 占位 / 待补内容（当前未虚构任何数据）

- 三个作品详情页的「做出了什么」均为 **待补资料**（`result` 留空，`resultPending: true`）。
- 邮箱、简历文件、GitHub / LinkedIn / 微信均为空，补齐后自动出现入口。
- 全站插画、图标、角色为原创矢量（SVG），**未使用任何外部图片素材**；字体 Archivo Black 来自 Google Fonts（有系统字体回退）。

## 技术说明

- 抓娃娃机转场：`src/components/CraneMachine.jsx`，用 GSAP ScrollTrigger `pin + scrub` 实现，向上滚可倒放。
- 开启系统「减少动态效果」（`prefers-reduced-motion: reduce`）时，转场与首屏字标动画自动切换为静态呈现；GSAP 加载失败时内容仍可正常滚动、点击。
- 三张票券：桌面端 CSS 透视 + 弧形错落（`:nth-child`），移动端横向滑动（`scroll-snap`）。
