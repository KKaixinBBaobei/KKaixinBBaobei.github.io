# 倪志扬的个人主页

这是一个使用 Jekyll 构建的 GitHub Pages 网站。主页内容在 `index.md`，论文在 `Papers/index.md`，笔记在 `Notes/index.md`。页面外观在 `_layouts/default.html` 和 `assets/css/style.css`。

## 写一篇博文

在 `_posts` 中新建 Markdown 文件，文件名使用 `年-月-日-英文标题.md`，例如 `_posts/2026-11-13-first-post.md`。文件开头写：

```markdown
---
layout: post
title: 我的第一篇博文
---

这里开始写正文，使用普通 Markdown 即可。
```

提交并推送后，博文会自动出现在 `/Notes/` 页面。修改现有内容时，直接编辑对应页面的 Markdown 文件。

数学公式较多的博文可以在开头的配置区加入 `math: true`。这会加载 MathJax 3 和 XyJax，以渲染 `$...$`、`$$...$$` 公式及 `xy` 环境。现有的 DG 范畴笔记位于 `_posts/2026-11-13-DG范畴.md`，它在网站上的地址是 `/Notes/dg-categories/`。

在行内公式中表示竖线时请写 `\vert{}`，例如 `$\vert{}f\vert{}$`。直接写 `|` 可能让 Kramdown 把公式当作表格。`xy` 图表语法里的 `|` 有不同用途，不要替换；行内图表可用 `<span markdown="0">$...$</span>` 包住，防止 Markdown 修改图表内容。

## 本地预览

安装 Ruby 与 Bundler 后，在仓库根目录运行：

```sh
bundle install
bundle exec jekyll serve
```

浏览器打开 `http://127.0.0.1:4000/`。若 GitHub Pages 尚未设置发布来源，在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`。

注意：目前 `github-pages` 依赖的旧版 Jekyll 和 Liquid 无法在 Ruby 4.0 下直接运行以上命令；本地预览需要使用与这些依赖兼容的 Ruby 版本。
