---
title: git删除全部提交历史，成为一个新的仓库
date: 2018-12-28 09:59:43
categories:
- 笔记
tags:
- git
- github
cover: 
pageview: 89
---

有时候在提交代码时，不小心提交了敏感数据，如账号密码什么的，这样在历史记录中就可以查看到，这样很不安全，所以就需要吧历史提交记录删了，变成一个新的仓库。

记录一下方法:

### 创建一个新的分支
```
git checkout --orphan latest_branch
```

### 添加所有文件
```
git add -A
```

### 提交更改
```
git commit -am "commit"
```

### 删除需要替换的分支
```
git branch -D master
```

### 重命名创建的分支为删除的分支
```
git branch -m master
```

### 强制提交到远程仓库
```
git push -f origin master
```

这样以后在去看master分支，就是一个全新的仓库惹，所以提交记录都没有惹

以上！



