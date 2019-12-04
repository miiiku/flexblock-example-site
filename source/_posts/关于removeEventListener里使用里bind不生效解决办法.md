---
title: 关于removeEventListener里使用里bind不生效解决办法
date: 2019-12-04 19:13:46
categories:
- 笔记
tags:
- js
---


现在写JS代码都流行用`class`了，自己在写一些东西都时候也会用。

但是在一个对象里如果绑定了某些事件需要在销毁时移除绑定，在使用`bind`的情况下不能正常移除。

这里单独记录一下，如下代码:

```js
class User {

  constructor (name) {
    this.name = name;
    window.addEventListener("click", this.printName.bind(this));
  }

  name = "";

  printName () {
    console.log(this.name);
  }

  destroy () {
    window.removeEventListener("click", this.printName.bind(this));
  }

}
```

`User`类中`printName`方法需要访问自己到属性，如果在绑定事件时不将上下文指向自己，那么在`printName`中作用域会丢失，将会打印`window.name`;

但是在使用`bind`以后，`destory`方法中的移除事件并不会生效，众所周知如果事件需要解绑，那么函数不能使用`匿名函数`或直接`function`，因为每次返回的都是不同的函数，使用`bind`同理，返回的也是一个新的不同函数。

解决办法则是用一个属性去接收事件处理函数，则可以在多个地方使用:

```js
class User {

  constructor (name) {
    this.name = name;
    window.addEventListener("click", this.eventClick);
  }

  name = "";

  // 这里保存事件函数
  eventClick = this.printName.bind(this);

  printName () {
    console.log(this.name);
  }

  destroy () {
    window.removeEventListener("click", this.eventClick);
  }

}
```


本文转自：[https://blog.csdn.net/qq_40936253/article/details/84972259](https://blog.csdn.net/qq_40936253/article/details/84972259)