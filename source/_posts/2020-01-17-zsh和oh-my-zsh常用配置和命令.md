---
title: zsh和oh-my-zsh常用配置和命令
date: 2020-01-17 19:05:07
categories:
- 笔记
tags:
- shell
- zsh
cover: https://qiniu.miiiku.xyz/src/images/cover-6.jpg
---


#### 查看当前环境下的shell
```bash
echo $SHELL
```

#### 查看系统自带的shell
```bash
cat /etc/shells
```

#### 将*zsh*设置为默认shell
```bash
chsh -s /bin/zsh
```

在安装了`oh-my-zsh`以后，会在 **`~`** 目录下创建一个 **`.zshrc`** 文件。

#### 查看`oh-my-zsh`可用主题:
```base
ls ~/.oh-my-zsh/themes
```

#### 修改`oh-my-zsh`主题:

编辑`~/.zshrc`文件，将`ZSH_THEME`的值改为需要选择的主题


#### 查看`oh-my-zsh`可用扩展:
```base
cat ~/.oh-my-zsh/plugins/
```

#### 开启某个扩展:

编辑`~/.zshrc`文件，将`plugins`的值改为需要开启的扩展，默认开启了git扩展

#### 查看某个扩展的信息内容(如查看git):
```base
cat ~/.oh-my-zsh/plugins/git/git.plugin.zsh
```

打印如下

```log
alias g='git'

alias ga='git add'
alias gaa='git add --all'
alias gapa='git add --patch'
alias gau='git add --update'
alias gav='git add --verbose'
alias gap='git apply'

alias gb='git branch'
alias gba='git branch -a'
alias gbd='git branch -d'
```

#### autojump

# 常用快捷键

#### 命令历史记录

一旦在shell敲入命令并执行后，shell就会存储你所键入命令的历史计入，存放在`～/.zsh_history`文件中。

* 可以通过按方向键⬆️或⬇️来查看之前执行的命令

* 可以用 **`r`** 来执行上一条命令

* 可以用 **`ctrl + r`** 来搜索键入的命令历史记录

#### 命令别名

可以简化命令输入，如创建一个别名 **`ip`** 来查看当前ip

编辑`~/.zshrc`文件，在尾部添加如下内容:

```bash
alias ip="curl cip.cc"
```

打印如下信息:

```log
IP	: *.*.*.*
地址	: 中国  四川  成都
运营商	: 移动

数据二	: 四川省成都市 | 移动

数据三	: 中国四川成都 | 移动

URL	: http://www.cip.cc/*.*.*.*
```

**在shell中键入`alias`可查看所有的别名命令**

#### 路径快速补全

在知道路径的情况下，如`/usr/local/bin`，可以在shell中键入 `cd /u/l/b`之后按`tab`进行快速补全调转到指定目录

#### 列表快速补全

在shell中键入字符以后连按两次`tab`会列出所有的补全列表并直接开始选择，补全项可以用 **`ctrl + n/p/f/b`** 来进行上下左右切换

#### 历史过滤

在shell中按上下方向键可以查找键入过的历史命令，zsh中是支持**限制查找**，如先输入`ls`然后在按方向键，则只会查找用过的`ls`相关的命令





































