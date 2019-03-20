---
title: npm ERR! extraneous
date: 2016-12-23 13:54:16
categories:
- 笔记
tags:
- npm
cover: 
pageview: 1119
---

使用npm 安装包时出现错误 安装失败后

npm list 出现以下信息

```(base)
npm ERR! extraneous: asciify-pixel-matrix@1.0.6 D:\Project\wzzl\node_modules\asciify-pixel-matrix
npm ERR! extraneous: compute-size@1.0.5 D:\Project\wzzl\node_modules\compute-size
npm ERR! extraneous: got@6.6.3 D:\Project\wzzl\node_modules\got
npm ERR! extraneous: image-parser@1.2.1 D:\Project\wzzl\node_modules\image-parser
npm ERR! extraneous: lwip-pixels@1.1.4 D:\Project\wzzl\node_modules\lwip-pixels
npm ERR! extraneous: one-by-one@3.2.3 D:\Project\wzzl\node_modules\one-by-one
npm ERR! extraneous: terminal-char-width@1.0.4 D:\Project\wzzl\node_modules\terminal-char-width
npm ERR! extraneous: underscore@1.8.3 D:\Project\wzzl\node_modules\underscore
npm ERR! extraneous: url-remote@1.1.3 D:\Project\wzzl\node_modules\url-remote
npm ERR! extraneous: walkdo@0.9.6 D:\Project\wzzl\node_modules\walkdo
```

应该说的是有一些闲置的、不必要的软件包安装。在大多数情况下 这应该是一个警告，因此可以忽略。

如果需要删除这些信息 可以这样：

```(base)
npm prune
```

它会删除package.json文件外的所有包 再次npm list 发现错误消失！



