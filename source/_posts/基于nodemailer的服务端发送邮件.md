---
title: 基于nodemailer的服务端发送邮件
date: 2016-12-30 11:35:43
categories:
- 笔记
tags:
- nodejs
- nodemailer
cover: 
pageview: 1263
---

最近想给博客添加一个当有人留言时发送邮件提醒查看功能。

这里使用了nodemailer

安装：

```
npm install nodemailer --save
```

引入：

```
var nodemailer = require('nodemailer')
```

创建SMTP传输对象：

```
var transporter = nodemailer.createTransport({
    // 163邮箱为163， qq邮箱为qq， 谷歌邮箱为gmail...
    service: '163',   
    auth: {
        // 使用的邮箱地址
        user: 'user@163.com',   
        // 这里一般填写授权码
        pass: 'password'             
    }
});
```

设置发送数据：

```
var mailOptions = {
    from: 'user <user@163.com>',             //  发送地址
    to: 'senderr@163.com',                     //  收件地址，可以多个
    subject: '标题',                                     //  标题
    text: 'text',                                             //  plaintext body
    html: '测试邮件！'                            //  html body
};
```

发送邮件：

```
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    // 关闭连接池
    transporter.close();
});
```

当我在window本地环境下没有问题，当我上传到centos服务器运行，出现以下错误：

```
{ Error: 139714214250272:error:0D07207B:asn1 encoding routines:ASN1_get_object:header too long:../deps/openssl/openssl/crypto/asn1/asn1_lib.c:157:
139714214250272:error:0D068066:asn1 encoding routines:ASN1_CHECK_TLEN:bad object header:../deps/openssl/openssl/crypto/asn1/tasn_dec.c:1185:
139714214250272:error:0D07803A:asn1 encoding routines:ASN1_ITEM_EX_D2I:nested asn1 error:../deps/openssl/openssl/crypto/asn1/tasn_dec.c:374:Type=X509_NAME_ENTRY
139714214250272:error:0D08303A:asn1 encoding routines:ASN1_TEMPLATE_NOEXP_D2I:nested asn1 error:../deps/openssl/openssl/crypto/asn1/tasn_dec.c:669:
139714214250272:error:0D08303A:asn1 encoding routines:ASN1_TEMPLATE_NOEXP_D2I:nested asn1 error:../deps/openssl/openssl/crypto/asn1/tasn_dec.c:669:
139714214250272:error:0D08303A:asn1 encoding routines:ASN1_TEMPLATE_NOEXP_D2I:nested asn1 error:../deps/openssl/openssl/crypto/asn1/tasn_dec.c:697:Field=issuer, Type=X509_CINF
139714214250272:error:0D08303A:asn1 encoding routines:ASN1_TEMPLATE_NOEXP_D2I:nested asn1 error:../deps/openssl/openssl/crypto/asn1/tasn_dec.c:697:Field=cert_info, Type=X509
139714214250272:error:1409000D:SSL routines:ssl3_get_server_certificate:ASN1 lib:../deps/openssl/openssl/ssl/s3_clnt.c:1231:

    at Error (native) code: 'ECONNECTION', command: 'CONN' }
```

通过google 在创建SMTP传输对象时设置secure=false，requireTLS=true即可：

```
var transporter = nodemailer.createTransport({
    service: '163',
    secure: false,
    requireTLS: true,
    auth: {
        user: 'user@163.com',
        pass: 'password'
    }
});
```

再次运行 ok！

后记：

使用163邮箱还会报上面的错误，后面发现使用其他邮箱不会报错，所以换成gmail，但是不知道为什么163会报错~

```
openssl s_client -connect smtp.163.com:465

openssl s_client -connect smtp.gmail.com:465
```

对比执行后的内容，发现gmail的要多跟多~~~~~~



