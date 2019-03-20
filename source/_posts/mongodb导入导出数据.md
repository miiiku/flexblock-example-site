---
title: mongodb导入导出数据
date: 2018-04-13 17:42:41
categories:
- 笔记
tags:
- mongodb
cover: 
pageview: 334
---

### mongodb数据备份与恢复

#### 备份

```
mongodump -h <dbhost> -d <dbname> -o <dbdirectory>
// 示例
mongodump -h localhost -d test -o /home/data
```

- -h 服务器地址 如: 127.0.0.1 也可以指定端口号: 127.0.0.1:27017
- -d 需要备份的数据库名 如: test
- -o 存放的目录 如: /home/data mongodb会自动在/home/data下创建一个test目录，里面存放备份数据

#### 恢复
```
mongorestore -h <dbhost> -d <dbname> <path>
// 示例
mongorestore -h localhost -d test /home/data/user.json
```

- -h 服务器地址 如: 127.0.0.1 也可以指定端口号: 127.0.0.1:27017
- -d 需要恢复的数据库名 如: test
- < path \> 指定恢复数据的数据源目录位置 如: /home/data/test

#### 导出单张数据表
```
mongoexport -h <dbhost> -d <dbname> -c <collectionname> -o <file> -f <field>
// 示例
mongoexport -h localhost -d test -c user -o /home/data/user.json
```

- -h 服务器地址 如: 127.0.0.1 也可以指定端口号: 127.0.0.1:27017
- -d 需要导出的数据库名 如: test
- -c 需要导出的数据表名 如: user
- -o 导出的数据文件名 如: /home/data/user.json(文件支持多种格式，如txt,wps,xls等)
- -f 导出数据输出的字段 如: "_id, username, password"

#### 导入单张数据表
```
mongoimport -h <dbhost> -d <dbname> -c <collectionname> <file>
// 示例
mongoimport -h localhost -d test -c user /home/data/user.json
```

- -h 服务器地址 如: 127.0.0.1 也可以指定端口号: 127.0.0.1:27017
- -d 需要导入的数据库名 如: test
- -c 需要导入的数据表名 如: user
- < file \> 需要导入的数据文件地址





