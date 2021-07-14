title: 小伙伴
subtitle: 嘿，靓仔
date: 2019-03-05 14:12:17
layout: links
cover: https://cloud.miiiku.xyz/src/images/banner-3.jpg-compress
---

添加友链页面前先执行`hexo new links`

然后编辑`/source/links/index.md`在`front-matter`中添加`layout: links`

在`/source/_data`下新建`links.yml`

添加数据：

```yml
- { "name" : "", "link" : "", "description" : "", "avatar" : "" }
```

**name** 站点名称(必填)

**link** 站点地址(必填)

**description** 站点描述

**avatar** 站点头像