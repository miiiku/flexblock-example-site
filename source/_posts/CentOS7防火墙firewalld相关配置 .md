---
title: CentOS7防火墙firewalld相关配置 
date: 2018-11-20 15:52:45
categories:
- 笔记
tags:
- centos
cover: 
pageview: 120
---

### 1.firewalld的基本使用

###### 启动： 
```(BASE)
systemctl start firewalld
```

###### 关闭：
```(BASE)
systemctl stop firewalld
```

###### 重启：
```(BASE)
systemctl restart firewalld
```

###### 查看状态：
```(BASE)
systemctl status firewalld
```

###### 开机禁用：
```(BASE)
systemctl disable firewalld
```

###### 开机启用：
```(BASE)
systemctl enable firewalld
```

### 2.firewalld-cmd的一些命令

###### 查看版本：
```(BASE)
firewall-cmd --version
```

###### 查看帮助：
```(BASE)
firewall-cmd --help
```

###### 显示状态：
```(BASE)
firewall-cmd --state
```

###### 查看所有打开的端口：
```(BASE)
firewall-cmd --zone=public --list-ports
```

###### 更新防火墙规则：
```(BASE)
firewall-cmd --reload
```

###### 查看区域信息: 
```(BASE)
firewall-cmd --get-active-zones
```

###### 查看指定接口所属区域：
```(BASE)
firewall-cmd --get-zone-of-interface=eth0
```

###### 拒绝所有包：
```(BASE)
firewall-cmd --panic-on
```

###### 取消拒绝状态：
```(BASE)
firewall-cmd --panic-off
```

###### 查看是否拒绝：
```(BASE)
firewall-cmd --query-panic
```

###### 查看某个端口是否开启
```
firewall-cmd --zone= public --query-port=[端口]/[协议]
// 如
firewall-cmd --zone= public --query-port=80/tcp
```

###### 开放一个端口
```(BASE)
firewall-cmd --zone=public --add-port=[端口]/[协议] --permanent （--permanent永久生效，没有此参数重启后失效）
// 如
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

如果不想使用命令行，修改*/etc/firewalld/zones/public.xml*文件，把端口写进入，如:

```
<port protocol="tcp" port="8888">
```

###### 关闭一个端口
```
firewall-cmd --zone= public --remove-port=[端口]/[协议] --permanent （--permanent永久生效，没有此参数重启后失效）
// 如
firewall-cmd --zone= public --remove-port=80/tcp --permanent
```

如果不想用命令行，跟添加同理，修改*/etc/firewalld/zones/public.xml*文件。

在添加或关闭一个端口以后，不要忘了重新加载

###### 重新加载
```
firewall-cmd --reload
```

因为在CentOS7以后，默认使用firewalld防火墙，所以在网上收集一些常用指令做整理记录，信息来源于网络！

以上。





