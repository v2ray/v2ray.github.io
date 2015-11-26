# 初次使用

本文将介绍 V2Ray 客户端搭配 SwitchyOmega 的使用方法。

## 下载并开启 V2Ray
推荐使用预编译的安装包进行安装。打开[下载页面](https://github.com/v2ray/v2ray-core/releases)，按照你所用的操作系统[下载相应的安装包](#a=install-zh-cn)。

以 64 位 Windows 来举例：
* 下载 v2ray-windows-64.zip；
* 下载完成解压 v2ray-windows-64.zip；
* 双击 v2ray.exe

此时可以看到窗口中输出“Point Server started on port 1080”，则说明 V2Ray 已正常开启。如果出现了其它信息，
请向 V2Ray 开发人员[提 Issue](https://github.com/v2ray/v2ray-core/issues)。

## 配置 SwitchyOmega
SwitchyOmega 是一个 Chrome 插件，它可以把 Chrome 的网页请求按需转发给代理服务器（也就是 V2Ray），然后
由 V2Ray 加密中转最终到达要访问的网站。

SwitchyOmega 的教程请参考[官方 Wiki](https://github.com/FelisCatus/SwitchyOmega/wiki/GFWList)，搭配
GFWList 会有更好的效果。

V2Ray 代理服务器信息：
* 代理协议： SOCKS5
* 代理服务器： 127.0.0.1
* 代理端口： 1080

配置完 SwitchyOmega 之后就可以正常上网了。

## 注意
在默认配置下，V2Ray 连接的是官方提供的测试服务器。此服务器仅供测试 V2Ray 连接，其速度并不快，请不要
抱怨。如需更快更好的网络连接，请购买第三方服务，或是自建服务器。

进阶设置请阅读[V2Ray 配置文件简介](#a=config-zh-cn)。
