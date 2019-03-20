---
title: React.js Vue.js 项目部署页面刷新404
date: 2018-04-11 11:53:44
categories:
- 笔记
tags:
- nginx
- vue
- react
cover: 
pageview: 260
---

使用react，vue等开发的项目因为是前后端分离，所有打包发布到服务器以后，需要放在一个静态服务器中运行

###### 配置Nginx服务器:
```
cd /etc/nginx/conf.d
vim demo.confg
```

添加如下信息:

```
server {
    listen 	80;
    server_name your.domain.com;

    location / {
        try_files $uri $uri/ /index.html;
        root   your project path;
        index  index.html index.htm;
    }
}
```

###### 重启Nginx:
```
service nginx restart
```

重启以后访问你的域名或者IP就可以正常访问项目

###### 注意事项:

当你使用了*react-router的browserHistory模式*或者使用了*vue-router的history模式*刷新页面会出现404的情况 

解决方法:

修改Nginx配置信息如下:
```
location / {
        try_files $uri $uri/ /index.html;
}
```
原理:

因为我们的项目只有一个根入口，当输入类似/home的url时，找不到这个页面，这时nginx会尝试加载index.html，加载index.html之后，react-router或vue-router就能起作用并匹配我们输入的/home路由，从而显示正确的home页面

参考地址:[https://segmentfault.com/q/1010000005155831](https://segmentfault.com/q/1010000005155831)



