---
layout: default
title: 笔记
---

# 笔记

## 数学笔记

1. [Notes](https://cn.overleaf.com/read/mjkyxymwbqcn#f317e3) on *Representation Theory of Artin Algebras* by M. Auslander, I. Reiten, S.O. Smalø
   - 这是我于2024年夏季写的读书笔记，我补充了书中的一些跳步，并增加了若干结论的小推广。总体来说，这本书是很基础的，只需学过本科同调代数就能读懂。读完后，你将有能力看懂倾斜理论以前的大部分代数表示论论文。
2. [Notes](https://cn.overleaf.com/read/rbxpbvkcvbcm#f1a07d) on string algebras (in process)
   - 弦代数是代数表示论中一类很有趣的代数。它们的不可分解模、不可约态射、AR-箭图等在1980年代就已被研究清楚。gentle代数是弦代数的子类，其导出范畴是近10年非常热门的研究对象（但最近两三年似乎不太热了）。弦代数、gentle代数的相关知识散落于各处的论文，因此用一篇文章进行收集是很有意义的。不过，该笔记已搁置很久，我暂时不打算继续写。
3. [Notes]({{ '/Notes/dg-categories/' | relative_url }}) on dg categories (in process)
   - 这是我最近做的dg范畴笔记。先从分次范畴、dg范畴的基础铺垫开始，然后分为多个重要的主题，目前已涵盖导出范畴理论、Dwyer–Kan模型结构、预三角包络、dg商范畴。未来我还计划写Morita模型结构、加性不变量等内容。这篇笔记是用Markdown写的，并用MathJax渲染公式。对我而言，写Markdown确实比写LaTeX更为便捷，但读者的阅读体验可能恰好相反……未来我将探寻更好的笔记呈现方式。

{% if site.posts.size > 1 %}
## 博文

{% for post in site.posts %}
{% unless post.url == '/Notes/dg-categories/' %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url | relative_url }})
{% endunless %}
{% endfor %}
{% endif %}
