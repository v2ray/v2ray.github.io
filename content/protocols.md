# 协议列表
## Blackhole (Outbound)
Blackhole（黑洞）是一个传出数据协议，它会阻碍所有数据的传出，配合路由（Routing）一起使用，可以达到禁止访问某些网站的效果。

**协议名称**：blackhole

**协议配置**：空

## Dokodemo-door (Inbound)
Dokodemo door（任意门）是一个传入数据协议，它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。

**协议名称**：dokodemo-door

**协议配置**：
```javascript
{
  "address": "8.8.8.8",
  "port": 53,
  "network": "tcp",
  "timeout": 0
}
```
其中：
* address：指定服务器的地址，可以是一个 IPv4、IPv6 或者域名，字符串类型。
* port：指定服务器的端口，数值类型。
* network：指定服务器的网络协议类型，目前仅支持 TCP。
* timeout：传入数据的时间限制（秒），0 表示无限制。

## Freedom (Outbound)
Freedom 是一个传出数据协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。

**协议名称**：freedom

**协议配置**：空

## HTTP (Inbound)
暂未实现

## Socks (Inbound)
Socks 是一个传入数据协议，兼容 [Socks 4](http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol) 和 [Socks 5](http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol)，暂不支持 Socks 4a。

**协议名称**：socks

**协议配置**：
```javascript
{
  "auth": "noauth",
  "udp": false,
  "ip": "127.0.0.1",
  "timeout": 0
}
```
其中：
* auth：Socks 协议的认证方式，目前只支持“noauth”即匿名方式。
* udp：是否开启 UDP 协议的支持，true / false。
* ip：当开启 UDP 时，V2Ray 需要知道本机的 IP 地址。
* timeout：从 Socks 客户端读取数据的超时设置（秒），0 表示不限时。

## VMess (Inbound / Outbound)
VMess 是一个加密传输协议，它分为传入和传出两部分，通常作为 V2Ray 客户端和服务器之间的桥梁。

**协议名称**：vmess

**VMess 传出协议配置**：
```javascript
{
  "vnext": [
    {
      "address": "127.0.0.1",
      "port": 37192,
      "users": [
        {"id": "27848739-7e62-4138-9fd3-098a63964b6b"}
      ]
    }
  ]
}
```

其中：
* vnext：一个数组，包含一系列的服务器配置，其中每一个服务器：
  * address：服务器地址，仅支持 IP 地址。
  * port：服务器端口号。
  * users：一组服务器认可的用户，其中每一个用户：
    * id：VMess 的用户 ID。
    * level：用户等级，此处可填但不会起作用。


**VMess 传入协议配置**：
```javascript
{
  "clients": [
    {
      "id": "27848739-7e62-4138-9fd3-098a63964b6b",
      "level": 0
    },
    {
      "id": "3b129dec-72a3-4d28-aeee-028a0fe86e22",
      "level": 1
    }
  ],
}
```

其中：
* clients：一组服务器认可的用户，其中每一个用户：
  * id：VMess 的用户 ID。
  * level：用户等级
    * 当 level 为 0 时，此用户不被信任，V2Ray 将对此用户进行严格的安全限制；
    * 当 level 大于 0 时，此用户被信任，V2Ray 将放宽对些用户的限制；
