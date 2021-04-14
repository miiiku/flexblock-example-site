---
title: hello manjaro
date: 2017-05-22 15:01:35
categories:
- 笔记
tags:
- Linux
- Manjaro
cover: 
pageview: 1558
---

# manjaro :)

>Manjaro 是基于 Arch Linux 并且拥有一个漂亮的用户界面的操作系统。 Manjaro 并不像 Debian 或者 Arch 这些 Linux 发行版一样历史悠久，但是它依然十分的稳定而可靠，从而在各色发行版中显得鹤立鸡群。2011 年 Manjaro 才推出了第一个版本。从那以后它一直在不断的进步

## 基于ArchLinux
就像许多人已经知道的那样，不开玩笑的说 Arch 绝对是一个优秀的发行版。但是它对于新手来说十分难以使用。许多新手根本就无法在非图形界面下完成 Arch 的安装。与之相反，Manjaro 有着一个好用的图形安装界面。所以那些想要尝试 Arch 但是又被它的高难度操作所困扰的人们可以去试试 Manjaro。Manjaro 很容易安装并且有着一个友好的用户界面。

## 桌面环境
Manjaro 在桌面环境上有着许多选择，比如 Xfce、KDE、Deepin、BspWM、Budgie、i3、LXDE、Cinnamon、Enlightenment、Netbook、Fluxbox、Gnome、JWM、LXQT、MATE、Openbox 和 PekWM。所有这些桌面环境在 Manjaro 中都十分漂亮。Manjaro 官方的桌面环境是 Xfce 和 KDE，而其他桌面环境则是社区支持的，我现在就是在 Manjaro 17.0.1 中使用 KDE Plasma 桌面环境。


### 简单换源：
```bash
sudo pacman-mirrors -gb testing -c China
```

### 常用更换源和添加源
```bash
#nano /etc/pacman.d/mirrors/China
[China]
Server = http://mirrors.ustc.edu.cn/manjaro/$branch/$repo/$arch

#nano /etc/pacman-mirrors.conf
OnlyCountry=China

pacman-mirrors -g
```

```bash
# /etc/pacman.conf
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

最后更新源列表和安装archlinuxcn-keyring 有了它可以直接安装 google-chrome 等几乎所有你可以想到的软件：
```bash
sudo pacman -Syy && sudo pacman -S archlinuxcn-keyring
```

### 常用命令

###### 滚动升级
```bash
sudo pacman -Syyu
```

###### 安装软件
```bash
pacman -S [软件名]
```

###### 查询版本库是否存在某个软件
```bash
pacman -Ss [查询关键字]
```

###### 删除软件

删除单个软件包，保留其全部已经安装的依赖关系
```bash
pacman -R [名称]
```

删除指定软件包，及其所有没有被其他已安装软件包使用的依赖关系：
```bash
pacman -Rs [名称]
```

要删除软件包和所有依赖这个软件包的程序: 警告: 此操作是递归的，请小心检查，可能会一次删除大量的软件包。
```bash
pacman -Rsc [名称]
```

要删除软件包，但是不删除依赖这个软件包的其他程序：
```bash
pacman -Rdd [名称]
```

pacman 删除某些程序时会备份重要配置文件，在其后面加上*.pacsave扩展名。-n 选项可以删除这些文件：
```bash
pacman -Rn [名称]
pacman -Rsn [名称]
```

### 安装常用软件

###### 搜过输入法：

```bash
sudo pacman -S fcitx-sogoupinyin

sudo pacman -S fcitx-im

sudo pacman -S fcitx-configtool

sudo nano ~/.xprofile
```

最后编辑.xprofile文件

```bash
sudo nano ~/.xprofile

export GTK_IM_MODULE=fcitx

export QT_IM_MODULE=fcitx

export XMODIFIERS="@im=fcitx"
```

###### Shadowsocks

```bash
// 安装ss
sudo pacman -S shadowsocks-libev

// 拷贝配置文件
sudo cp /etc/Shadowsocks/example.json /etc/Shadowsocks/config.json

// 编辑配置文件
sudo nano /etc/Shadowsocks/config.json
{
    "server":"my_server_ip",  // 服务ip地址
    "server_port":8388, // 服务端口
    "local_address": "127.0.0.1", // 本机地址
    "local_port":1080,  // 本机端口
    "password":"mypassword",  // 密码
    "timeout":300,  // 连接超时
    "method":"AES-256-CFB", // 加密方式
    "fast_open": false,
    "workers": 1
}
```

客户端与SS本地命令开始

```bash
ss-local -c /etc/Shadowsocks/config.json
```

或者，可以直接在命令上指定配置：

```bash
ss-local -s server_address -p server_port -l local_port -k password -m encryption_method
```

服务器 从命令行 服务器开始与SS服务器命令。

```bash
ss-server -c /etc/shadowsocks/config.json
```

在后台运行

```bash
ss-server -c /etc/shadowsocks/config.json -d start
ss-server -c /etc/shadowsocks/config.json -d stop
```

使用图形化工具

```bash
sudo pacman -S shadowsocks-qt5
```

###### docky 一个类似苹果的docky栏

```bash
sudo pacman -S docky
```

###### screenfetch 一个显示系统详情的工具

```bash
sudo pacman -S screenfetch

screenfetch
```

-------------------------------- 华丽的分割线


![manjaro-1.png](https://qiniu.sukoshi.xyz/manjaro-1.png)
![manjaro-2.png](https://qiniu.sukoshi.xyz/manjaro-2.png)
![manjaro-3.png](https://qiniu.sukoshi.xyz/manjaro-3.png)
![manjaro-4.png](https://qiniu.sukoshi.xyz/manjaro-4.png)
![manjaro-5.png](https://qiniu.sukoshi.xyz/manjaro-5.png)
![manjaro-6.png](https://qiniu.sukoshi.xyz/manjaro-6.png)
![manjaro-7.png](https://qiniu.sukoshi.xyz/manjaro-7.png)




