---
title: 使用marked解析markdown为html
date: 2017-02-27 17:25:15
categories:
- 笔记
tags:
- marked
- markdown
- html
cover: 
pageview: 1371
---

前段时间玩了会儿hexo，发现用markdown写博客真的很爽，语法也十分的简介。

于是打算将博客的富文本编辑器换成markdown。

我这里是使用的marked

>Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。看到这里请不要被「标记」、「语言」所迷惑，Markdown 的语法十分简单。常用的标记符号也不超过十个，这种相对于更为复杂的 HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。

---

>marked 是一个 JavaScript 编写的全功能 Markdown 解析和编译器。  
marked 的目的是快速的编译超大块的Markdown文本而不必担心结果会出乎意料或者花费很长时间。  
marked 最初是为 Node.JS编写，现在已完全兼容客户端浏览器。  
新版本号称速度比C语言写的Markdown转换工具Discount 还要快。

### 1.安装marked
``` bash
npm install marked --save
```

### 2.引用
``` js
var marked = require('marked')
```

### 3.转换为html
``` js
var html = marked('### hello markdown') // <h3>hello markdown</h3>
```

### 一些参数说明
``` js
var marked = require('marked');

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

console.log(marked('I am using __markdown__.'));
```

- -o, –output [output]: 指定输出文件，默认为当前控制台
- -i, –input [input]: 指定输入文件或最后一个参数，默认为当前控制台输入
- -t, –tokens: 输出token流代替HTML
- –pedantic: 只解析符合markdown.pl定义的，不修正markdown的错误
- –gfm: 启动Github样式的Markdown
- –breaks: 支持Github换行符，必须打开gfm选项
- –tables: 支持Github表格，必须打开gfm选项
- –sanitize: 原始输出，忽略HTML标签
- –smart-lists: 优化列表输出
- –lang-prefix [prefix]: 设置前置样式
- –no-etc: 选择的反正标识
- –silent: 不输出错误信息
- -h, –help: 帮助信息

### 4.marked防注入

如下MD被编译为HTML时，会执行script里的代码，弹出xss攻击
``` js
var html = marked('<script>alert("xss攻击")</script>')
```

设置*sanitize*为ture，即可过滤到script标签
``` js
marked.setOptions({ sanitize: true })
```

### 5.自定义渲染

自定义渲染选项允许你以自定义的方式渲染内容，并把之前的规则设置覆盖掉。

块级标签支持以下渲染：

- code(string code, string language)
- blockquote(string quote)
- html(string html)
- heading(string text, number level)
- hr()
- list(string body, boolean ordered)
- listitem(string text)
- paragraph(string text)
- table(string header, string body)
- tablerow(string content)
- tablecell(string content, object flags)

行级标签支持以下渲染：

- strong(string text)
- em(string text)
- codespan(string code)
- br()
- del(string text)
- link(string href, string title, string text)
- image(string href, string title, string text)

#### 举一个栗子🌰：

默认的渲染a标签为当前窗口打开，如果我想让它新窗口打开，可以如下：

```
var md = '[http://baidu.com](baidu.com "百度")'

// 默认的渲染结果
var a = marked(a)
// 得到的a为<a href="http://baidu.com" title="百度">baidu.com</a>

// 添加自定义渲染
var rendererMD = new marked.Renderer()

rendererMD.link = function (href, title, text) {
    return `<a href="${href}" title="${title || text}" target="_blank">${text}</a>`
}

marked.setOptions({ renderer: rendererMD })

var _blankA = marked(a)
// 得到的_blankA为<a href="http://baidu.com" title="百度" target="_blank">baidu.com</a>
```

不声明renderer时，默认为*new Renderer()*

### 6.语法高亮

需要安装*highlight.js*

```
npm install highlight.js --save
```

设置语法高亮(为了正常显示，页面需要引入highlight.js的css)
```
const highlight = require('highlight.js')

marked.setOptions({
    highlight: function(code) {
        return highlight.highlightAuto(code).value
    }
})
```

以上！！！





