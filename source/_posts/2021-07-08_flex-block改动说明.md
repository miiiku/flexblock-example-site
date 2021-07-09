---
title: flex-block改动说明
date: 2021-07-08 09:20:10
categories: ['doc']
tags: ['doc', 'flex-block']
cover: https://cloud.miiiku.xyz/src/images/cover/cover-06.jpg-webp
toc: true
---

## 📢 概览

前段时间在完成了我开发的`HUGO`主题[Kagome](https://github.com/miiiku/hugo-theme-kagome)以后，回头来看`flex-block`主题

发现有很多可以改进的地方，代码也可以在更一步优化，所以给`flex-block`做了一定的重构。

**⚠️⚠️⚠️ 本次重构属于破坏性升级，如果你在用flex-block并更新到当前版本，请仔细阅读下方内容查看改动项，如果你是第一次使用查看相关文档即可**

## 📢 删除项

`theme/_config.yml`以下这些属性，功能被移除: 

- large_legnth (原作用来时设置文章列表页文章的宽度权重，现在取消这个字段改为通过文章名称自适应)

- hitokoto (文章底部一言， 已删除)

- waterfall (图片布局插件，因为内容页改成了双栏布局，不太适合放过多的横项瀑布流，所以删除并精简功能)

- zoom (图片点击放大插件，这个插件自己开发的，感觉还是有点问题，在一些高清大图点击查看的时候会有卡顿问题，优化以后看要不要在添加进来)

`内建写作标签`以下这些标签被移除: 

**太多的自定义内建标签就意味着以后迁移存在这大量的不兼容，所以删除了一些使用度不是很多的内建标签**

- meme (原作用是插入一张行内图片，如表情包等，先优化精简代码，已删除)

- bookmark (书签，优化精简代码，已删除)

- waterfall (瀑布流插件，优化精简代码，已删除，以后可能会考虑出一个优化版本的)

- center (原作用是内容剧中，优化精简代码，已删除)

## 📢 添加项

`theme/_config.yml`添加已下字段:

- notice (站点通知，一句话，不支持插入图片等，没有则不显示，有的话会在内容页的右侧显示)

- author (站长/作者 信息，没有则不显示，有的话会在内容页的右侧显示)

- toc (TOC相关设置)


## 📢 一些使用变化

### aplayer&dplayer使用变化:

如果你要在某一篇文章内插入`aplayer`或者`dplayer`，那么你需要在文章MD文件`Front-matter`中添加`aplayer: true`或者`dplayer: true`。

这样的目的是在不需要插入这些内容的页面减少资源加载和请求。

并且目前已只一个问题: 在使用`aplayer`时，TOC锚点相关功能无法正常使用，需要注意，具体可查看[#8](https://github.com/miiiku/flex-block/issues/8)

### _config.yml中留言部分变化:

```yml
comments:
  enable: true
  use: 'valine' # valine || disqus
  # valine 评论
  # docs: https://valine.js.org
  # You can get your appid and appkey from https://leancloud.cn
  # 这里appId和appKey一定一定要改成自己的，没有的话去https://leancloud.cn这个网站注册创建一个
  valine:
    appId:
    appKey:
    avatar: mm
    placeholder: 随便说点什么叭～
    notify: true
    visitor: true
    pageSize: 10
  # disqus 评论
  # docs: https://disqus.com/
  disqus:
    website:
    error: 如果你看不到评论，那么就真的看不到评论 w(゜Д゜)w
```

`valine`和`disqus`被放在了`comments`下面，使用`enable`来全局控制站点是否开启评论系统，使用`use`来选择使用某一个评论系统，但是需要注意的是在文章md里`Front-matter`中的`comments`优先级最高。

比如全站关闭评论，但是在某一篇文章里想打开评论，则可以在`Front-matter`中设置`comments: true`

### social_icon 修改

目前social只保留了如下的这些做了精简且写法跟以前有所不同: 

```yml
# Social Icon
social_icon:
  enable: true
  icons:
    ins     :
    zhihu   :
    weibo   : https://twitter.com/guanquanhong
    github  : https://github.com/miiiku/
    twitter : https://twitter.com/guanquanhong
```

如果要自定义新增图标，在`theme/layout/_svg/`中添加以`social-`开头的svg图标并在yml配置文件中编辑即可。


## 📢 其他

- 修复主题切换失败的BUG

- card背景图添加了图片懒加载

- 内容页改成双栏布局，右侧添加widget小部件，页面样式更改

- 代码重构&优化