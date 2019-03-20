---
title: JS获取图片原始宽高
date: 2018-09-30 10:26:26
categories:
- 笔记
tags:
- js
cover: 
pageview: 161
---

最近在给博客的相册模块做优化，需要知道图片的原始大小，我以前的做法是把图片的真实宽高分别放在data-width和data-height中，效果是达到了，但是总觉得扩展性很低，当不知道图片的大小时，还要一张一张图片的去查看图片信息手动输入图片大小，很繁琐

### 获取图片大小：

##### 1.使用*innerWidth*,*innerHeight*
使用HTMLImageElement.innerWidth 是可以拿到图片的宽度 但是需要注意的是这里拿到的宽度是**图像在CSS像素中渲染的宽度**

也就是说如果图片原始大小1200，使用css或者width属性设置为600，那么这里拿到的宽度为600，显然用innerWidth获取图片原始尺寸是不靠谱的

##### 2.使用*document.createElement("img")*
```
var img = document.createElement("img")
img.src = "1.jpg"
var width = img.width
```
动态创建一个imgElement，通过给src赋值，最终来获取img的宽和高

需要注意的是在给img的src赋值时，这是一个异步过程，会存在获取img的宽度时值为0(图片还未加载完成)，可以在给img赋值之前加上*onload*事件
```
var img = document.createElement("img")
img.onload = function () {
    var width = img.width
}
img.src = "1.jpg"
```

##### 3.使用*naturalWidth*(推荐)
使用HTMLImageElement.naturalWidth拿到**图像在CSS像素中固有的宽度,如果可用的话; 否则, 返回0**

这样就可以拿到图片的原始大小

各游览器兼容情况：
![游览器兼容情况](https://qiniu.miiiku.xyz/attach/20180930/QQ%E6%88%AA%E5%9B%BE20180930102414.jpg)

ps:各位国庆节快乐！

以上



