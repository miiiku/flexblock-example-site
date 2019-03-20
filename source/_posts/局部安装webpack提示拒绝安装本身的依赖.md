---
title: 局部安装webpack提示拒绝安装本身的依赖
date: 2017-02-28 10:34:34
categories:
- 笔记
tags:
- webpack
- npm
cover: 
pageview: 702
---

学习webpack的时候，局部安装webpack出现以下错误：

```
npm ERR！ Windows_NT 6.1.7601 
npm ERR ! args "F:\Nodejs\node.exe" "F:\Nodejs\node_modules\npm\bin\npm-cli.js" "install" "webpack" "--save-dev" 
npm ERR! node v5.10.1 
npm ERR! npm v3.8.3 
npm ERR! code ENOSELF 
npm ERR! Refusing to install webpack as a dependency of itself 
```
提示拒绝安装WebPack的本身的依赖

后来网上搜索发现，由于我的项目名就叫webpack，所以在生成package.json时，***name***也为webpack，导致无法安装，通过修改package.json里的***name***解决该问题。



