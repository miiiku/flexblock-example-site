---
title: flex-block风格，样式
date: 2019-12-20 20:43:48
categories: QAQ
tags:
- hexo
- 主题
- 个人博客
cover: https://cloud.miiiku.xyz/src/images/cover/cover-05.jpg
---

{% center %}

# h1

## h2

### h3

#### h4

##### h5

###### h6

{% endcenter %}

**霜奶仙**，日本任天堂公司发行的掌机游戏系列 **`《宝可梦》`** 中登场精灵的一种，首次出现在游戏[《宝可梦剑盾》](https://www.baidu.com/s?wd=%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%89%91%E7%9B%BE)。

> 霜奶仙的造型确认有126种，头上的装饰和整体颜色都有所不同。霜奶仙超级巨化形态，没有样式差异。加上闪光形态一共126种。

> 霜奶仙能够产生出发泡鲜奶油。当它感到越幸福，鲜奶油的味道便越香浓。用这些鲜奶油装饰的甜点十分美味，所以让霜奶仙成为同伴是每一位甜点师傅的憧憬。霜奶仙可以从手里产生出发泡鲜奶油。这些鲜奶油的颜色、口味，以及身上的“树果”装饰似乎有著许多不同的种类。

* 它会把自己用鲜奶油装饰过的树果送给自己信任的训练家。（奶香香草）
* 体内细胞在进化的瞬间产生了不稳定的变化，形成了酸甜的风味。（奶香红钻）
* 体内细胞在进化的瞬间产生了不稳定的变化，形成了芳香的风味。（奶香抹茶）
* 体内细胞在进化的瞬间产生了不稳定的变化，形成了清爽的风味。（奶香薄荷）

```js
let str = "hello world"

console.log(str)
```

### 插入音频

{% aplayer name="アイロニ" artist="鹿乃" url="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.mp3" lrc="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.lrc" cover="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.jpg" %}

### 插入视频

{% dplayer url="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4" cover="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4?vframe/jpg/offset/10" %} 

### 插入图片

默认大小

{% image url="https://qiniu.miiiku.xyz/attach/2019/03/15529735091219953_175322076_H800.jpg" title="hello world" %}

大图

{% image url="https://qiniu.miiiku.xyz/public/image/wide.png" title="max 大小图片" size="max" %}


### 插入书签

{% bookmark title="我在这里" link="https://miiiku.xyz" cover="https://qiniu.miiiku.xyz/attach/2019/03/15529735091219953_175322076_H800.jpg" %}

{% bookmark title="一点点小站" link="http://sukoshi.xyz" %}

### 插入画廊

默认宽度

{% waterfall direction="h" %}
![https://qiniu.miiiku.xyz/public/image/20161114_110128607_iOS.jpg](https://qiniu.miiiku.xyz/public/image/20161114_110128607_iOS.jpg)

![https://qiniu.miiiku.xyz/public/image/25fb81065c0625a4f9bf0a9601a2dcad.jpeg](https://qiniu.miiiku.xyz/public/image/25fb81065c0625a4f9bf0a9601a2dcad.jpeg)

![https://qiniu.miiiku.xyz/public/image/57793944_p0.png](https://qiniu.miiiku.xyz/public/image/57793944_p0.png)
{% endwaterfall %}

超大宽度

{% waterfall size="max" direction="h" %}
![https://qiniu.miiiku.xyz/public/image/20161114_110128607_iOS.jpg](https://qiniu.miiiku.xyz/public/image/20161114_110128607_iOS.jpg)

![https://qiniu.miiiku.xyz/public/image/25fb81065c0625a4f9bf0a9601a2dcad.jpeg](https://qiniu.miiiku.xyz/public/image/25fb81065c0625a4f9bf0a9601a2dcad.jpeg)

![https://qiniu.miiiku.xyz/public/image/57793944_p0.png](https://qiniu.miiiku.xyz/public/image/57793944_p0.png)
{% endwaterfall %}