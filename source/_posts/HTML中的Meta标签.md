---
title: HTML中的Meta标签
date: 2017-01-24 17:25:09
categories:
- 笔记
tags:
- meta
- html
cover: 
pageview: 740
---

Meta标签是HTML语言head区的一个辅助性标签，它位于HTML文档头部的head标记和title标记之间，它提供用户不可见的信息。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他web服务。

我现将前端页面开发经常用到的meta标签内容整理成文，加入了移动端web开发meta信息，供需要时查阅。

### 1、申明文档使用的字符编码

```(html)
<meta charset="utf-8"> 或 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
```

该 meta 标签定义了 HTML 页面所使用的字符集为 utf-8 ，就是万国码。它可以在同一页面显示中文简体、繁体及其它语言（如日文，韩文）等。当然，你也可以使用gb2312（简体中文），big5（繁体中文）等等其他字符集。

而目前我们一般推荐使用第一种写法，也是HTML5使用的写法。



### 2、声明使用的浏览器及版本

```(html)
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
```

当指定的content值为IE=edge,chrome=1时，优先使用 IE 最新版本和 Chrome。假定客户端安装了Google Chrome Frame，则在IE中使用chrome的渲染引擎来渲染页面，否则，将会使用客户端IE最高的标准模式对页面进行渲染。


### 3、SEO优化相关

```(html)
<meta name="description" content="不超过150个字符">
```

页面描述，每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。


### 4、页面重定向和刷新：content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页。

```(html)
<meta http-equiv="Refresh" contect="5;url=http://www.baidu.com">
```

上述代码表示停留5秒钟后自动刷新跳转到URL网址http://www.baidu.com。


### 5、Expires网页过期时间

```(html)
<meta http-equiv="Expires" contect="Mon,12 May 2016 00:20:00 GMT">
```

设定网页的到期时间，一旦过期则必须到服务器上重新调用，需要注意的是必须使用GMT时间格式，或直接设为0(不缓存)。


### 6、Pragma禁止本地缓存

```(html)
<meta http-equiv="Pragma" contect="no-cache">
```

设定网页不保存在缓存中，每次访问都刷新页面。这样设定，访问者将无法脱机浏览。


### 7、viewport移动设备屏幕可视区域

```(html)
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

由于移动设备屏幕宽度不同于传统 web，因此我们需要改变 viewport 值。

大部分4.7-5寸设备的viewport宽设为360px；5.5寸设备设为400px；iphone6设为375px；ipone6 plus设为414px。

width – viewport 的宽度 （范围从 200 到 10,000，默认为 980 像素）

height – viewport 的高度 （范围从 223 到 10,000 ）

initial-scale – 初始的缩放比例 （范围从 &gt; 0 到 10）

minimum-scale – 允许用户缩放到的最小比例

maximum-scale – 允许用户缩放到的最大比例

user-scalable – 用户是否可以手动缩放 (no，yes)


### 8、WebApp全屏模式：伪装app，离线应用。

```(html)
<meta name="apple-mobile-web-app-capable" content="yes"> 
```


### 9、隐藏状态栏/设置状态栏颜色：只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent 。

```(html)
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> 
```


### 10、添加到主屏后的标题

```(html)
<meta name="apple-mobile-web-app-title" content="标题">
```


### 11、忽略数字自动识别为电话号码

```(html)
<meta content="telephone=no" name="format-detection">
```


### 12、忽略识别邮箱

```(html)
<meta content="email=no" name="format-detection">
```



