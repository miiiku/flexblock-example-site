---
title: _config.yml配置
date: 2021-07-08 11:44:36
categories: ['doc']
tags: ['doc', 'flex-block']
cover: https://cloud.miiiku.xyz/src/images/cover/cover-04.jpg-webp
---

一份完整的_config.yml文件如下:

```yml
# Header
menu:
  首页: /

# 主页banner图
banner: 

# 站点通知信息
notice: 

# 作者信息
author:
  name: 
  avatar: 
  description: 

toc:
  max_depth: 3 # 生成 TOC 的最大深度
  min_depth: 2 # 生成 TOC 的最小深度

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

# dplayer 视频播放
# docs: http://dplayer.js.org/#/zh-Hans/
dplayer:
  enable: true
  theme: "#b7daff"
  autoplay: false
  loop: false
  mutex: true

# aplayer 音频播放
# docs: https://aplayer.js.org/#/zh-Hans/
aplayer:
  enable: true
  theme: "#b7daff"
  autoplay: false
  loop: false
  mutex: true
  lrcType: 3

# 国内备案信息
beian: 

# 谷歌分析
google_analytics: UA-165681463-1
# gauges分析
gauges_analytics: 
# 百度分析
baidu_analytics: 77cce6624f1114785af5e77d00cbf93c
# 腾讯分析
tencent_analytics: 66537616
# 站点ico
favicon: /favicon.ico

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

## aplayer 音乐播放器

aplayer相关配置项:

具体的配置项描述可以查阅aplayer官方文档 [aplayer文档地址](https://aplayer.js.org/#/)

目前支持的相关参数如下

| key      	| default   	| describe                                                     	|
|----------	|-----------	|--------------------------------------------------------------	|
| theme    	| '#b7daff' 	| 主题色                                                       	|
| autoplay 	| false     	| 音频自动播放                                                 	|
| loop     	| 'all'     	| 音频循环播放, 可选值: 'all', 'one', 'none'                   	|
| mutex    	| true      	| 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 	|


## dplayer 音乐播放器

dplayer相关配置项:

具体的配置项描述可以查阅dplayer官方文档 [dplayer文档地址](https://dplayer.js.org/#/)

目前支持的相关参数如下

| key      	| default   	| describe                                                     	|
|----------	|-----------	|--------------------------------------------------------------	|
| theme    	| '#b7daff' 	| 主题色                                                       	|
| autoplay 	| false     	| 视频自动播放                                                 	|
| loop     	| false     	| 视频循环播放                                                 	|
| mutex    	| true      	| 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 	|

## 自定义新增social_icon图标

如添加一个Google+图标，先在`theme/layout/_svg/`下添加`social-google.svg`。

然后编辑`_config.yml`配置文件，在`social_icon`下的`icons`添加`google: [你的地址]`即可。