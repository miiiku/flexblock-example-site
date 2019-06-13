---
title: 博客启用HTTPS连接
date: 2017-09-19 16:47:12
categories:
- 笔记
tags:
- https
- nginx
cover: 
pageview: 473
---

突然想给博客加上HTTPS，正好发现阿里云可以购买一年免费的证书 申请地址：[点击跳转](https://common-buy.aliyun.com/?spm=5176.2020520163.cas.134.4272e7a9cWkru2&commodityCode=cas#/buy)

![TIM%E6%88%AA%E5%9B%BE20170919154649.png](//qiniu.miiiku.xyz/attach/2017/-9/19/TIM%E6%88%AA%E5%9B%BE20170919154649.png)

购买完成后，根据提示完成相关设置(具体流程就不说了，按着说明来就好了)，点击下载

![TIM%E6%88%AA%E5%9B%BE20170919154954.png](//qiniu.miiiku.xyz/attach/2017/-9/19/TIM%E6%88%AA%E5%9B%BE20170919154954.png)

这里因为我用的是nginx 服务器所以下载nginx类型的，下载完成后，解压文件拷贝到服务端主机目录下(我这里放在Nginx安装目录下的cert文件夹下)

![TIM%E6%88%AA%E5%9B%BE20170919164433.png](//qiniu.miiiku.xyz/attach/2017/-9/19/TIM%E6%88%AA%E5%9B%BE20170919164433.png)
打开 Nginx 安装目录下 conf 目录中的 nginx.conf 文件 添加以下内容：（其他内容根据自身情况调整）

```
    server {
        listen 443;
        server_name ServerName;
        ssl on;
        ssl_certificate cert/下载的证书.pem;
        ssl_certificate_key  cert/下载的证书.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
        }
    }
```

这里还可以添加对80端口的监听重定向到443
```
    server {
        listen 80;
        server_name ServerName;
        rewrite ^(.*) https://$server_name$1 permanent;
    }
```

最后重启nginx服务！

由于我的博客后端用的是NodeJS和Express框架 所以代码部分有小改动
打开app.js 修改如下内容：
```
var http = require('http') 
// ===> 更改为
var https = require('https') 


app.listen(port, function() {
    console.log('Web Server Start PORT:' + port);
})
// ===> 更改为
var options = {
    key: fs.readFileSync('/etc/nginx/cert/下载的证书.key'),
    cert: fs.readFileSync('/etc/nginx/cert/下载的证书.pem')
}

https.createServer(options, app).listen(port, function() {
    console.log('Web Server Start PORT:' + port)
});

```

最后重启Node服务，ok！

但是访问博客发现。。。

![TIM%E6%88%AA%E5%9B%BE20170919163426.png](//qiniu.miiiku.xyz/attach/2017/-9/19/TIM%E6%88%AA%E5%9B%BE20170919163426.png)

这就很尴尬了，看了一下发现是网易云音乐用的是HTTP连接，所以小绿锁消失。。。 先这样吧，不管了= =

后台页面正常显示~

![TIM%E6%88%AA%E5%9B%BE20170919163859.png](//qiniu.miiiku.xyz/attach/2017/-9/19/TIM%E6%88%AA%E5%9B%BE20170919163859.png)



