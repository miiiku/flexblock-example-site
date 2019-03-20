---
title: 关于input输入中文时，不断触发input事件的问题
date: 2018-08-28 11:55:06
categories:
- 笔记
tags:
- html
- js
cover: 
pageview: 276
---

监听一个文本框的*input*事件的时候，当输入中文但未实际填充到文本框还在候选时，也会一直触发*input*事件，如图：(搬运原文图片)

![https://qiniu.miiiku.xyz/attach/2018-08/1069543-20171009211759324-6471773.gif](https://qiniu.miiiku.xyz/attach/2018-08/1069543-20171009211759324-6471773.gif)

*compositionstart*  事件触发于一段文字的输入之前（类似于 keydown 事件，但是该事件仅在若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）

*compositionend* 当文本段落的组织已经完成或取消时，会触发该事件。

触发*compositionstart*时，文本框会填入 “虚拟文本”（待确认文本），同时触发*input*事件；在触发*compositionend*时，就是填入实际内容后（已确认文本）。

##### 解决思路：

声明一个标记flag，在compositionstart、compositionend两个事件过程之间的时候flag值为false，在input事件中通过flag的值来判断当前输入的状态。

``` js
    var flag = true;

    $('#txt').on('compositionstart',function(){
        flag = false;
    })

    $('#txt').on('compositionend',function(){
        flag = true;
    })

    $('#txt').on('input',function(){
        var _this = this;
        setTimeout(function(){
            if(flag){
                console.log($(_this).val());
            }
        },0)
    })
```

![https://qiniu.miiiku.xyz/attach/2018-08/1069543-20171009211830262-1175113284.gif](https://qiniu.miiiku.xyz/attach/2018-08/1069543-20171009211830262-1175113284.gif)

##### tips:

为什么使用延时器？

因为选词结束的时候input会比compositionend先一步触发，此时flag还未调整为true，所以不能触发到console，故用setTimeout将其优先级滞后。

本文转载于: [https://www.cnblogs.com/lonhon/p/7643095.html](https://www.cnblogs.com/lonhon/p/7643095.html)



