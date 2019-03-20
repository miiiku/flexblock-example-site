---
title: mongodb开启用户权限
date: 2017-09-04 20:08:13
categories:
- 笔记
tags:
- mongodb
cover: 
pageview: 611
---

### 1. 开始mongodb安全认证
编辑 `/usr/local/src/mongodb/mongodb.conf` 取消 `#auth = true`前面的’#‘ 

### 2. 添加管理员账号
```
use admin

db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [{
        role: 'userAdminAnyDatabase',
        db: 'admin'
    }]
})
```

### 3. 选中admin数据库认证
```
use admin

db.auth('admin', 'admin')
```

### 4. 添加指定数据库的账号(这里为test)
```
use test

db.createUser({
    user: 'test',
    pwd: 'test',
    roles: [{
        role: 'readWrite',
        db: 'test'
    }]
})
```

### 5. 选中指定数据库认证
```
use test

db.auth('test', 'test')

show collections
```



