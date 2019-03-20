---
title: Mac下iTerm2配合zsh食用 体验Up！
date: 2018-08-10 12:06:54
categories:
- 笔记
tags:
- Mac
- zsh
- 终端
cover: https://qiniu.miiiku.xyz/attach/2018-08/0A7F3652-1493-43E1-849A-F2F082B66E76.png
pageview: 316
---

Mac下默认的bash终端使用久了，感觉很多地方都不方便，所以就准备安装*zsh*，听说跟*oh my zsh*更配哟！

### 安装zsh && oh my zsh

***需要注意的是，当你安装了zsh并默认使用zsh，那么你配置的~/.bash_profile文件将失效，应改为使用~/.zshrc文件***

##### 查看本地已经看装的shell
``` bash
cat /etc/shells
```
我这里显示如下:
![https://qiniu.miiiku.xyz/attach/2018-08/85454CBE-87E0-4078-B1B4-0E8743A8302C.png](https://qiniu.miiiku.xyz/attach/2018-08/85454CBE-87E0-4078-B1B4-0E8743A8302C.png)

Mac下默认是安装了zsh的

##### 安装zsh
如果本地没有zsh可以使用*brew*安装
``` bash
brew install zsh
```

##### 切换默认shell为zsh
``` bash
chsh -s /bin/zsh
```
查看是否切换成功:
``` bash
echo $SHELL
```

##### 安装oh my zsh
先确保本地已安装*git*
``` bash
// 使用curl安装
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

// 使用wget安装
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

##### 修改oh my zsh主题
oh my zsh 主题都存放在*～/.oh-my-zsh/themes/*目录下
如吧主题修改为*ys*
``` bash
vim ~/.zshrc
```
将*ZSH_THEME*改成*ys*
``` bash
ZSH_THEME="ys"
```
更新配置
``` bash
source ~/.zshrc
```

**zsh的自动补全真的很好用，当你scp文件到服务器的时候，如果服务器设置了免密码ssh登入，按tab好像可以自动补全服务端的目录OwO**

### 安装iTerm2

使用*brew*安装
``` bash
brew cask install iterm2
```

iterm2的分屏功能和多tab页合并是我最喜欢的，有时候开发需要在后台启几个server，用iterm2，一个窗口就搞定，体验很棒！

按*command+d*垂直分割，*command+shift+d*水平分割，如果你的屏幕够大，可以一直分割。

右键*New Tab*即可创建一个新的tab页，按下*command+数字*切换对应的tab页。

![https://qiniu.miiiku.xyz/attach/2018-08/0A7F3652-1493-43E1-849A-F2F082B66E76.png](https://qiniu.miiiku.xyz/attach/2018-08/0A7F3652-1493-43E1-849A-F2F082B66E76.png)

设置快捷打开方式：

在iterm2为焦点的情况下，按*command+,*，选中*Keys*，找到*Hotkey*打勾即可，默认快捷键为*optin+space*

![https://qiniu.miiiku.xyz/attach/2018-08/DE2819F8-2778-4114-986A-F4A2D0268E40.png](https://qiniu.miiiku.xyz/attach/2018-08/DE2819F8-2778-4114-986A-F4A2D0268E40.png)

以上！！！



