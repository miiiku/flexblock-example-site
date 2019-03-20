---
title: 使用vue重写了博客的后台页面
date: 2017-10-14 21:03:03
categories:
- 杂谈
tags:
- vue
- 个人博客
cover: 
pageview: 483
---

最近公司项目没什么事情做，然后就去复习了一下vue（以前学习过，由于多久没看和使用，忘的差不多了，orz...），于是就想着做一个什么小东西练练手，正好觉得自己博客的后台页面不是很美丽，就理所当然的准备重写后台页面啦。

由于博客使用的是node + express + jade模板引擎，页面是后台解析返回的，而博客后台页面打算使用vue来做，所以就吧博客的前台页面和后台页面分离出两个项目。。。 = =！

后台项目使用*vue-cli*生成 后台数据那些还是使用的*node + express + mongodb* 接口的请求那些使用的是*axios* 然后使用了饿了么团队基于vue开发的*Element UI*组件库，还挺好用的（很想吐槽一下饿了么不好好做外卖跑来写代码，而且我才开发完成没多久，就告诉我TM Element UI 2.0发布......） 整体效果感觉上是比以前好多了o(\*￣▽￣\*)o ！

效果如下：(ps: 不在在意logo，图标那些...懒得换)
![TIM%E6%88%AA%E5%9B%BE20171024205428.png](///qiniu.miiiku.xyz/TIM%E6%88%AA%E5%9B%BE20171024205428.png)

![TIM%E6%88%AA%E5%9B%BE20171024205340.png](///qiniu.miiiku.xyz/TIM%E6%88%AA%E5%9B%BE20171024205340.png)

![TIM%E6%88%AA%E5%9B%BE20171024205324.png](///qiniu.miiiku.xyz/TIM%E6%88%AA%E5%9B%BE20171024205324.png)

![TIM%E6%88%AA%E5%9B%BE20171024205911.png](///qiniu.miiiku.xyz/TIM%E6%88%AA%E5%9B%BE20171024205911.png)



