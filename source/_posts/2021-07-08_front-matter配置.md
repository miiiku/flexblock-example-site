---
title: front-matter配置
date: 2021-07-08 11:00:41
categories: ['doc']
tags: ['doc', 'flex-block']
cover: https://cloud.miiiku.xyz/src/images/cover/cover-08.jpg-webp
---

> hello world

## hello world

{% pullquote class-name %}
content
{% endpullquote %}


<details>
  <summary>そもそも技術的負債はいつ生まれるのか?</summary>
  <div class="details-content">
    <p>前提として、技術的負債というものはどんな状況であっても生まれ「プロジェクト・プロダクトにおける現在の技術的負債は何か」という視点の切り口の変化によってソフトウェアの開発における技術選定や設計、実装が技術的負債になる状況もあればならない状況もあります。</p>
    <p>ソフトウェア設計における技術選定や設計の決定は、常に何かしらのトレードオフを伴います。そのため、完全に負債がない状況を作り出すことは難しいと言えます。</p>
    <p>そのため Tailwind CSS のようなパッケージ化された技術によって CSS 設計の課題を解決しようとするときは、「どのような状況は避けたくて」「技術によって何の価値を得たいか」を明確にすることが重要でしょう。</p>
  </div>
</details>


```javascript
const a = "abc";
```

`Front-matter`相关的配置内容可以查看官方文档:[front-matter](https://hexo.io/zh-cn/docs/front-matter)


```java _.compact http://underscorejs.org/#compact Underscore.js
case class logLine(date:String, time:String, c_ip:String, cs_username:String, s_ip:String, s_port:String, cs_method:String,
                            cs_uri_stem:String, cs_uri_query:String, sc_status:String, cs:String)

//...

log.filter(! _(0).toString.startsWith("#"))
    .map(r=>{
      val col = r(0).toString.split(" ")
      logLine(col(0), col(1), col(2),
        col(3), col(4), col(5), col(6), col(7), col(8), col(9), col(10))

    }).toDF()
```



---

{% codeblock lang:js test.js first_line:9800 mark:1,4-7,10 %}
alert('Hello World!');
const a = "abc";
const b = "cba";

const a = "abc";
const b = "cba";

const a = "abc";
const b = "cba";

const a = "abc";
const b = "cba";
{% endcodeblock %}

里面有相关属性的说明，在`flex-block`中，主要添加如下属性:

| Key      	| Type    	| Description                                   	|
|----------	|---------	|-----------------------------------------------	|
| cover    	| string  	| 封面                                          	|
| layout   	| stirng  	| 页面类型(`只有在page页面下生效`)              	|
| subtitle 	| string  	| 小标题/描述(`只有在page页面生效`)               	|
| toc      	| boolean 	| 是否开启TOC功能(`只有在post页面下生效`)       	|
| aplayer  	| boolean 	| 是否启用aplayer播放器(`只有在post,page页面下生效`) 	|
| dplayer  	| boolean 	| 是否启用dplayer播放器(`只有在post,page页面下生效`) 	|

## end

其中`layout`细说一下，目前layout支持的字段有`messages`和`links`，分别是留言板跟友联页面，如创建一个留言页面:

```
hexo new page message
```

会在`source`目录下生成`message/index.md`，编辑index.md，在front-matter中添加`layout: messages`，这样就添加了一个留言页面。