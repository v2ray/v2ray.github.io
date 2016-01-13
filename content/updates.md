# 更新日志

## 2016.01.18 v1.4 (未发布)
* 智能 DNS 解析；
* VMess 动态端口；
* 更新了[安装脚本](https://github.com/v2ray/v2ray.github.io/wiki/%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F:-%E9%A2%84%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F)，在 Debian / Ubuntu / CentOS 7 中可自动安装和更新 V2Ray；

## 2016.01.11 v1.3
* Wiki 中更新了一些英语页面（感谢 chenxiaoqino）；
* Docker 配置文件（感谢 adoot）；
* HTTP 代理（感谢 adoot）；
* 路由中内置了常见的[国内网站域名](https://github.com/v2ray/v2ray.github.io/wiki/%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE#chinasites-v2ray-13)；
* VMess 配置中新增了 [alterId 选项](https://github.com/v2ray/v2ray.github.io/wiki/%E5%8D%8F%E8%AE%AE%E5%88%97%E8%A1%A8#vmess-inbound--outbound)；
* 修复了若干小问题；

## 2015.12.14 v1.2
* 简洁且高效的国内 IP 路由；
* 错误日志可写入文件；
* 路由中支持正则表达式方式的域名匹配；
* 修复了一个 SOCKS 协议的兼容性 bug；

## 2015.12.07 v1.1
* 修复了一个 VMess 协议的 bug，也导致了 1.1 和 1.0 的应用程序不兼容，配置文件不受影响；
* 修复了一个 InboundDetourHandler 中的 bug；

## 2015.11.30 v1.0
V2Ray 1.0 正式版，包含以下功能：
* Socks 4 / 5 代理协议；
* 可以防止重放攻击的高速中继协议；
* 静态路由功能，用户可选择性屏蔽或代理指定的 IP 段或域名；
