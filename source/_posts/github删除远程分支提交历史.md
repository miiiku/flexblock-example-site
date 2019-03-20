---
title: github删除远程分支提交历史
date: 2017-08-30 23:00:09
categories:
- 笔记
tags:
- git
- github
cover: 
pageview: 1168
---

> github 代码提交多了以后 会有很多历史记录，这些历史记录大多没有重要信息切这些历史纪录中可能会包含项目里密码等敏感信息，在网上找了很久，找到一下方法，亲测有效，使你的git仓库成为一个全新的仓库，并保持代码不变。

### 1.Checkout
```
git checkout --orphan latest_branch
```

### 2.add all the files
```
 git add .
```

### 3.Commit the changes
```
git commit -am 'commit'
```

### 4.Delete the branch
```
git branch -D master
```

### 5.Rename the current branch to master
```
git branch -m master
```

### 6.Finally, force update your repository
```
git push -f origin master
```

参考地址：[stackoverflow](https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github)



