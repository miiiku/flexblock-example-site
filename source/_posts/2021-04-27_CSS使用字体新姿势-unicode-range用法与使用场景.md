---
title: CSS使用字体新姿势 unicode-range用法与使用场景
date: 2021-04-27 13:43:37
categories: 笔记
tags:
- css
- font
cover:
---

现在想要在CSS中使用自定义字体或者第三方字体，是一件非常简单的事情，只需要简单的使用`@font-face`规则即可导入各种字体文件。

不过一般在使用英文字体的时候，都没有什么问题，但是在使用包含有汉字的字体的时候，字体文件一般都比较大，5～6MB的一般都算小的，大的10几MB，这对网站的加载速度是一个很大的影响。我试着加载了一个8M左右的字体文件，测试下来需要50多秒差不多1分钟才能加载完成。

想象一下，当自己打开网页以后，游览器标签页哪里一直在转圈圈提示你网页内容还没有加载完成，看着就有种莫名的焦虑，可能还没等到1分钟的时间就已经吧网页关掉了，并给人留下一种“这个网站真慢，加载半天”的感觉，这是非常不友好的。

在网上查了相关问题的解决办法，最多的是推荐使用`字蛛（font-spider）`，它的解决方案就是根据你网页需要显示的文字来压缩字体文件，只包含你网站需要用到的文字，这样就使得字体文件大小得到了极大的提升，一个8M大小的字体文件压缩下来可能就只有几KB，但是如果你的网站内容经常发生变化的话，如从后台或者其他地方获取数据，那这种方法就有点难顶，因为你无法确定新的内容里的文字是否已经在你压缩后的字体文件里，可能就需要重新去生成一次。

虽然对于我这种个人博客内容不会经常容易发生变化且使用的都是常用字符，使用font-spider好像也行，但是就我个人喜好而言，我还是不太喜欢这种方式，除非是网页上有特定的一句话或者几个字符需要特殊的文字来显示才会使用这种，否则我自己宁愿还是选择页面加载个几十秒。。。

最后在[Google Fonts](https://fonts.google.com/)里找到了新的解决方案。本意是我自己使用的那个字体太大了，看能不能到一个稍微小一点的包含汉字的字体，当时找了一个合适的字体以后，Google Fonts提供在线使用，在使用了提供的link代码以后，放在网页中发现网页加载很快，字体相关文件只用了几百毫秒，感觉还是比较震撼，这个字体下载下来以后发现有3M左右的大小，正常加载应该也需要6-10秒左右，这种毫秒级的加载感觉还是很震撼的，看了下提供的link里的css代码如下格式:

{% image url="https://qiniu.sukoshi.xyz/attach/2021/04/24/QQ20210427-144629%402x.png@webp" title="Google Fonts Style" %}


可以看到使用的WOFF2的字体文件，WOFF字体自带压缩功能，所以会比通常的TTF字体文件更小，WOFF2则在WOFF的基础上更进一步压缩，所以实际的体积应该会更小。

还有就是在这个样式文件中，多次使用`@font-face`规则定义同一个字体`ZCOOL KuaiLe`，但是每一个使用的src资源都不一样，我想到的就是分片，把一个字体文件拆分成多个细小的文件，然后利用游览器并行下载来提升加载速度，看到后面的`unicode-range`属性，去了解了一下发现只正确了一半，实际上它使用了一种更加高级，优雅和更加复杂的一种方式。

有关于`unicode-range`属性的介绍和实际应用可以看张鑫旭老师的下面这个相关文章: 

{% bookmark title="CSS unicode-range特定字符使用font-face自定义字体" link="https://www.zhangxinxu.com/wordpress/2016/11/css-unicode-range-character-font-face/" %}

简单来说就是:

>统一码，也叫万国码、单一码（Unicode）是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求

>来源：**百度百科**

unicode 统一码，万国码或者单一码，每一个字符都有对应的unicode码，而range就是区间，范围的意思，所以可以简单理解为设定一个字符区间，如U+61-63，它的意思就是代表区间英文字符a-c这个区间，其中的`U+`是固定写法，在JavaScript中用`\u`表示，**在Javascript中，如果位数小于4位数，需要在前面加前导0补位** 所以在游览器控制台中输入`"\u0061"`就会打印出`a`。而后面的61这个值可以通过js的`"a".charCodeAt().toString(16)`来获取。

这里使用一下张鑫旭老师整理的一些显示方式: 

1. HTML中字符输出使用`&#x`配上charCode值。

2. 在JavaScript文件中为防止乱码转义，则是`\u`配上charCode值。

3. 而在CSS文件中，如CSS伪元素的content属性，直接使用`\`配上charCode值。

4. unicode-range是`U+`配上charCode值。

---

在知道`unicode-range`的作用以后，回到刚刚加载字体的问题上，如果你给字体设置了一个区间，只有当页面有字符匹配到了这个区间，就会去加载这个字体文件，这样就会极大到减少资源请求。

我在[iconfont](https://www.iconfont.cn/)上选了两个样式差距有点大的字体。

{% image url="https://qiniu.sukoshi.xyz/attach/2021/04/24/QQ20210427-165417%402x.png@webp" title="两个字体的样式" %}

其中`站酷高端黑`只添加`a,b,c,鹿`这四个字符并设置`unicode-range`为`U+61-64, U+9e7f(a-b, 鹿)`。

`杨任东竹石体-Bold`只添加`鹿,角`这两个字符并设置`unicode-range`为`U+9e7f, U+89d2(鹿，角)`。

用iconfont的在线样式复制到我本地的测试网页中，创建了两个`@font-face`规则，字体名都是`TEST`，CSS代码如下:

```html
@font-face {
  font-family: 'TEST';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_zs8eec7orz.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_zs8eec7orz.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_zs8eec7orz.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_zs8eec7orz.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_zs8eec7orz.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_zs8eec7orz.svg#站酷高端黑') format('svg'); /* iOS 4.1- */
  unicode-range: U+61-64, U+9e7f;
}

@font-face {
  font-family: 'TEST';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_36avzt164so.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_36avzt164so.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_36avzt164so.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_36avzt164so.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_36avzt164so.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_36avzt164so.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
  unicode-range: U+9e7f, U+89d2;
}

p {
  font-family: 'TEST', sans-serif;
  font-size: 24px;
}
```

现在在网页body中加入如下HTML:

```html
<p>ddd</p>
```

{% image url="https://qiniu.sukoshi.xyz/attach/2021/04/24/QQ20210427-173206%402x.png@webp" title="只加载了匹配区间的字体" %}

可以看到字符d匹配到了我们定义的第一个`@font-face`，所以加载了`站酷高端黑`字体，但是因为这个字体本身并不包含`d`字符，所以最终的显示字体为`sans-serif`。

现在把html内容改成下面这种:

```html
<p>a b c 鹿 角 你 好</p>
```

{% image url="https://qiniu.sukoshi.xyz/attach/2021/04/24/QQ20210427-173555%402x.png@webp" title="都匹配到了对应的字体" %}

现在两个规则中的区间都匹配到了，所以两个字体文件都加载了，并且其中`a b c 鹿 角`都正确都显示出了它对应的字体，两个字体文件中都没有`你 好`，所以这两个字符显示的还是`sans-serif`字体。

**两个字体文件中都有`鹿`这个字符，但是这里的`鹿`字显示的是第二个规则中的字体，所以如果多个`@font-face`规则中有重复的字符，以最后的为准**

---

最后我的个人猜测：

谷歌字体访问这么快的原因是把字体按照字符类型拆分开来，比如英文拆分为一个字体文件块，标点符号啥的拆分为一个块，然后只有当网页有命中条件以后才会加载相应的字体块，一些特殊的字符啥的拆分为一个块，这时比如一些特殊字符一般网页很少用的，既可保证特殊字符的正常加载，如果网页没有用到则不会加载来提升速度。