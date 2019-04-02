---
title: Hexo下的永久链接
date: 2019-03-20 19:44:16
categories: QAQ
tags:
  - hexo
cover: https://qiniu.miiiku.xyz/attach/2019/03/73747353_p0.png
---


最近在写Hexo主题的时候和在使用中，发现hexo默认生成以后的永久链接有点反人类，是根据文章标题生成的，这里也许就会出现大量中文，日文，韩文，颜文字，emoji啥的一些比较奇怪的内容，担心会出现什么灵异事件

在网上搜索了一下，有使用翻译的把文章标题翻译为单词，还有直接转拼音的，但是这样做了以后文章链接会非常的长，也感觉比较繁琐，个人感觉不是很喜欢

所以最后就自己在主题里写了一个小脚本来创建我比较喜欢的永久链接，其内容为文章的创建时间，格式为`YYYY-MM-DD-HH-mm-ss`，因为是个人博客，所以感觉用时间是完全足够用了，也简单明了

解决思路也很简单，给Hexo添加一个渲染之前的过滤器，在里面替换文章的`slug`内容为格式化以后的时间

代码如下:

``` js
hexo.extend.filter.register('before_post_render', function(data) {
  if (!hexo.theme.config.permalink) return data
  if (data.layout === "post") {
    data.slug = data.date.format("YYYY-MM-DD-HH-mm-ss");
    return data
  }
});
```

**使用:**

修改主题目录下的`_config.yml`设置`permalink`为`true`

``` yml
permalink: true
```

修改Hexo根目录下的`_config.yml`设置`permalink`，添加`:slug`

``` yml
permalink: :year/:month/:day/:slug/
# 生成以后为: 2019/03/20/2019-03-20-19-44-16
```

**问题:**

使用以后发现使用`:title`以会一样生成为时间，目前还不知道为什么，嘛～我也不需要标题，所以问题不大。。。
