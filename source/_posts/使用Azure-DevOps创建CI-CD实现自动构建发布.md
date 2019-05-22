---
title: 使用Azure DevOps创建CI/CD实现自动构建发布
date: 2019-05-22 17:57:03
subtitle: 
categories: 笔记
tags:
  - DevOps
cover: https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184111@2x0.png
---

目前博客项目代码是放在GitHub上的，每次发布了新了文章会往GitHub上推送一次，还会往托管博客的服务器推送一次，很繁琐

偶然看到可以使用微软的Azure DevOps来创建CI/CD自动构建部署到服务器，这样以来每次在本地发布新的文章，直接push到GitHub就可以摸鱼，等待几分钟后线上博客已经自动更新，美滋滋。

第一次使用Azure Devops，磕磕碰碰的测试了很久，文档目前还没有中文的，全靠谷歌翻译，有些地方自己也不是太明白，但好歹现在感觉弄好了😂

关于CI/CD的文章网上一大堆，专业术语也很多，看的费神就不做多说了😂😂😂

![https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184111@2x0.png](https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184111@2x0.png)

关于Azure DevOps相关文档可以查看[https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)

**创建CI**

![https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-182619@2x1.png](https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-182619@2x1.png)

在*Pipelines*中新建一个*Builds*管道任务

我的配置如下

``` yml
# Starter pipeline
# Start with a minimal pipeline that you can customize to build and deploy your code.
# Add steps that build, run tests, deploy, and more:
# https://aka.ms/yaml

trigger:
- master

pool:
  vmImage: 'Ubuntu-latest'

steps:

# 使用nodejs
- task: UseNode@1
  inputs:
    checkLatest: true
  displayName: 'Install Node.js'

# 安装npm包
- task: Npm@1
  inputs:
    command: 'install'
  displayName: 'npm install'

# 全局安装hexo
- task: Npm@1
  inputs:
    command: 'custom'
    customCommand: 'install hexo -g'
  displayName: 'npm install hexo -g'

# 生成博客静态文件
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: 'hexo g'
  displayName: 'hexo g'

# - task: ArchiveFiles@2
#   inputs:
#     rootFolderOrFile: '$(Build.BinariesDirectory)'
#     includeRootFolder: true
#     archiveType: 'zip'
#     archiveFile: '$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip'
#     replaceExistingArchive: true
#     verbose: true
#   displayName: 'zip file'

# 对生产的静态文件打包
- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(System.DefaultWorkingDirectory)/public'
    includeRootFolder: false
    archiveType: 'zip'
    archiveFile: '$(Build.ArtifactStagingDirectory)/file.zip'
    replaceExistingArchive: true
  displayName: 'zip file'

# 吧打包的文件上传到临时代理容器中
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)/file.zip'
    ArtifactName: 'blog'
    publishLocation: 'Container'

# 一个成功到提示，没什么用
- script: echo success
  displayName: 'end...'

```

**创建CD**

![https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184346@2x2.png](https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184346@2x2.png)

这里需要设置触发方式，每次新构建成功后自动触发CD部署代码

![https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184537@2x3.png](https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-184537@2x3.png)

在CD中，我创建了两个任务，第一个是吧CI中打包的文件上传到自己的服务器，第二个则是吧已经上传的压缩包解压出来并删除压缩包，这样就实现了线上博客的更新。

![https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-185448@2x4.png](https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-185448@2x4.png)

![https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-185620@2x5.png](https://qiniu.miiiku.xyz/attach/2019/05/WX20190522-185620@2x5.png)

整个大概流程就是这样了，写的并不清楚，一些地方没有说到，主要是嫌弃麻烦😂，嘛，反正只是一次记录，不要在意太多细节。。。。