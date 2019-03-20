---
title: proxychains-ng简单配置与使用
date: 2017-06-15 15:33:33
categories:
- 笔记
tags:
- Linux
- 翻墙
cover: 
pageview: 1172
---

通过配置ss可以实现游览器翻墙，但是有时候遇从终端去拉去国外的一些软件，就只能gg。

linux下代理一般是通过http_proxy和https_proxy这两个环境变量，但是很多软件并不使用这两个变量，导致流量无法走代理。在不使用vpn的前提下，linux并没有转发所有流量的真全局代理。但是可以用proxychains-ng为程序指定走代理，proxychains-ng是proxychains的加强版。

proxychains-ng支持多种代理模式：

1. dynamic_chain ：按照代理列表顺序自动选取可用代理
2. strict_chain ：按照代理列表顺序使用代理，所有代理必须可用
3. round_robin_chain ：轮询模式，自动跳过不可用代理
4. random_chain ：随机模式

### 修改配置文件：
修改 /etc/proxychains.conf 文件：
注释掉strict_chain和random_chain，取消dynamic_chain的注释
然后在[ProxyList]下添加ss代理
```
socks5 [Your IP] [Your Port]
```

### 测试
proxychains curl ip.cn

### 使用
proxychains 程序 参数 （如：proxychains npm install xxx）



