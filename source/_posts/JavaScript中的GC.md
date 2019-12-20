---
title: JavaScript中的GC
date: 2019-12-19 10:52:06
categories:
- 笔记
tags:
- js
---


```js
const f = function () {
  let v = "string";

  let c = function () {
    v = document.createElement("div");
  }

  let p = function () {
    console.log(v);
  }

  return { c, p }
}

f().c();

f().p(); // string
```

在调用`f().c()`以后，f没有被其他资源，被立即释放，即`f().c()`以后被GC;

如何才能不被自动GC:

```js
let o = f();

o.p(); // string

o.c();

o.p(); // <div></div>
```

如何手动释放:

```js
o = null;

o = f();

o.p(); // string
```