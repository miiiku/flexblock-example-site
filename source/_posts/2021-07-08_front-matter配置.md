---
title: front-matter配置
date: 2021-07-08 11:00:41
categories: ['doc']
tags: ['doc', 'flex-block']
cover: https://cloud.miiiku.xyz/src/images/cover/cover-08.jpg-webp
---

`Front-matter`相关的配置内容可以查看官方文档:[front-matter](https://hexo.io/zh-cn/docs/front-matter)

里面有相关属性的说明，在`flex-block`中，主要添加如下属性:

| Key      	| Type    	| Description                                   	|
|----------	|---------	|-----------------------------------------------	|
| cover    	| string  	| 封面                                          	|
| layout   	| stirng  	| 页面类型(`只有在page页面下生效`)              	|
| subtitle 	| string  	| 小标题/描述(`只有在page页面生效`)               	|
| toc      	| boolean 	| 是否开启TOC功能(`只有在post页面下生效`)       	|
| aplayer  	| boolean 	| 是否启用aplayer播放器(`只有在post,page页面下生效`) 	|
| dplayer  	| boolean 	| 是否启用dplayer播放器(`只有在post,page页面下生效`) 	|

其中`layout`细说一下，目前layout支持的字段有`messages`和`links`，分别是留言板跟友联页面，如创建一个留言页面:

```
hexo new page message
```

会在`source`目录下生成`message/index.md`，编辑index.md，在front-matter中添加`layout: messages`，这样就添加了一个留言页面。