---
layout: default
title: 笔记
---

# 笔记

## 数学笔记

1. [Notes](https://cn.overleaf.com/read/mjkyxymwbqcn#f317e3) on *Representation Theory of Artin Algebras* by M. Auslander, I. Reiten, S.O. Smalø
2. [Notes](https://cn.overleaf.com/read/rbxpbvkcvbcm#f1a07d) on string algebras (in process)
3. [Notes]({{ '/Notes/dg-categories/' | relative_url }}) on dg categories (in process)

{% if site.posts.size > 1 %}
## 博文

{% for post in site.posts %}
{% unless post.url == '/Notes/dg-categories/' %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url | relative_url }})
{% endunless %}
{% endfor %}
{% endif %}
