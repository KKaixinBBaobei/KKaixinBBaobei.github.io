---
layout: default
title: 笔记
---

# 笔记

## 数学笔记

1. [Notes](https://cn.overleaf.com/read/mjkyxymwbqcn#f317e3) on *Representation Theory of Artin Algebras* by M. Auslander, I. Reiten, S.O. Smalø
   - 这是我2024年夏天写的读书笔记，我补充了此书中的一些跳步，并增加了若干结论的小推广。总体来说，这本书是很基础的，只需要本科同调代数的基础就能读懂。若能读完，你将有能力看懂倾斜理论以前的大部分代数表示论论文。
2. [Notes](https://cn.overleaf.com/read/rbxpbvkcvbcm#f1a07d) on string algebras (in process)
   - 弦代数是代数表示论中一类很有趣的代数。它们的有限维模范畴是熟知的，不可分解模、不可约态射、AR-箭图等在1980年代就已被研究清楚。而gentle代数作为弦代数的一个子类，是近10年非常热门的研究对象（但最近两三年似乎不太热了）。不论是弦代数还是gentle代数，相关结论都分散于各处的论文，因此用一篇文章进行收集是很有意义的。不过，该笔记已搁置很久，我暂时不打算继续写。
3. [Notes]({{ '/Notes/dg-categories/' | relative_url }}) on dg categories (in process)
   - 这是我最近做的dg范畴笔记。先从分次范畴、dg范畴的基础铺垫开始，然后分为多个重要的主题，目前已涵盖导出范畴理论、Dwyer–Kan模型结构、预三角包络、dg商。未来我还计划写Morita模型结构、加性不变量等内容。这篇笔记是用Markdown写的，并用MathJax渲染公式。对我而言，写Markdown确实比写LaTeX更为便捷，但读者的阅读体验上可能恰好相反……未来我还会探寻更好的笔记呈现方式。

{% if site.posts.size > 1 %}
## 博文

{% for post in site.posts %}
{% unless post.url == '/Notes/dg-categories/' %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url | relative_url }})
{% endunless %}
{% endfor %}
{% endif %}
