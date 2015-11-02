# 协议列表
## Blackhole (Outbound)
* 协议名称：blackhole
* 协议配置：暂无

## Dokodemo-door (Inbound)
* 协议名称：dokodemo-door
* 协议配置：
```javascript
{
  "address": "8.8.8.8",
  "port": 53,
  "network": "tcp",
  "timeout": 0
}
```

## Freedom (Outbound)
* 协议名称：freedom
* 协议配置：暂无

## HTTP (Inbound)
暂未实现

## Socks (Inbound)
* 协议名称：socks
* 协议配置：
```javascript
{
  "auth": "noauth",
  "udp": false,
  "ip": "127.0.0.1"
}
```

## VMess (Inbound)
* 协议名称：vmess
* 协议配置：
```javascript
{
  "vnext": [
    {
      "address": "127.0.0.1",
      "port": 37192,
      "users": [
        {"id": "27848739-7e62-4138-9fd3-098a63964b6b"}
      ],
      "network": "tcp"
    }
  ]
}
```

## VMess (Outbound)
* 协议名称：vmess
* 协议配置：
```javascript
{
  "vnext": [
    {
      "address": "127.0.0.1",
      "port": 37192,
      "users": [
        {"id": "27848739-7e62-4138-9fd3-098a63964b6b"}
      ],
      "network": "tcp"
    }
  ]
}
```
