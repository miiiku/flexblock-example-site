---
title: flex-block风格，样式
date: 2019-12-20 20:43:48
categories: QAQ
tags:
  - hexo
  - 主题
  - 个人博客
cover: https://qiniu.miiiku.xyz/src/images/cover-5.jpg
---


**`flex-block`** 风格

[https://miiiku.xyz](我在这里)

**Strong**

```js
console.log("hello");
```

# H1

## h2

### h3

#### h4

##### h5

###### h6

# 引用

> are you ok ? do you link me?

# 插入音频

{% aplayer name="アイロニ" artist="鹿乃" url="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.mp3" lrc="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.lrc" cover="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.jpg" %}

# 插入视频

{% dplayer url="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4" cover="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4?vframe/jpg/offset/10" %} 

# 插入图片

默认大小

{% image url="https://qiniu.miiiku.xyz/attach/2019/03/15529735091219953_175322076_H800.jpg" title="hello world" %}

大图

{% image url="https://qiniu.miiiku.xyz/public/image/wide.png" title="max 大小图片" size="max" %}


# 插入书签

{% bookmark title="我在这里" link="https://miiiku.xyz" cover="https://qiniu.miiiku.xyz/attach/2019/03/15529735091219953_175322076_H800.jpg" %}

{% bookmark title="一点点小站" link="http://sukoshi.xyz" %}

# 插入画廊

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