# V2Ray 配置文件简介

## JSON 格式
如果你已经熟悉 JSON 格式，可以跳过这一段。

JSON，全称 [JavaScript Object Notation](https://en.wikipedia.org/wiki/JSON)，简而言之是 Javascript 
中的对象（Object）。一个 JSON 文件包含一个完整的对象，以大括号“{”开头，大括号“}”结束。

一个 JSON 对象包含一系列的键值对（Key-Value Pair），一个键是一个字符串（String），而值有多种类型，常
见的有字符串（String）、数字（Number）、布尔（Bool）、数组（Array）和对象（Object）。下面是一个 JSON
对象示例：

```javascript
{
  "stringValue": "This is a string.",
  "numberValue": 42,
  "boolValue": true,
  "arrayValue": ["this", "is", "a", "string", "array"],
  "objectValue": {
    "another": "object"
  }
}
```

需要注意的是：
1. 通常一个键值对的后面需要有一个逗号“,”，但如果这个键值对后面紧跟一个大括号“｝”的话，则一定不能有逗号。
2. Javascript 中的注释符“//”和“/\* \*/”不能在 JSON 文件中使用。

## V2Ray 配置文件格式
V2Ray 的配置文件形式如下，客户端和服务器通用一种形式，只是实际的配置不一样。

```javascript
{
  "port": 1080,
  "log": {},
  "routing": {},
  "inbound": {},
  "outbound": {},
  "inboundDetour": {},
  "outboundDetour": {}
}
```

其中：
* port: V2Ray 进程的主端口，它的取值是一个正整数，可以根据实际情况选取；
* log: 日志配置，见下文；
* routing: 暂未启用；
* inbound: 传入连接配置，见下文；
* outbound: 传出连接配置，见下文；
* inboundDetour: 额外的传入连接配置，见下文；
* outboundDetour: 暂未启用。
 
### 日志配置（log）
```javascript
{
  "access": "文件地址"
}
```

其中：
* access: 访问日志的文件地址，比如 /tmp/v2ray\_access.log （Linux）或者 C:\Temp\v2ray\_access.log（Windows）。

### 传入和传出连接配置（inbound / outbound）
传入和传出的连接配置形式一样，只是所用到的具体协议及详细配置不同，可用的协议请见[协议列表](#a=protocols-zh-cn)。

```javascript
{
  "protocol": "连接协议",
  "settings": {}
}
```

其中：
* protocol: 连接协议名称，可选的值见[协议列表](#a=protocols-zh-cn)。
* settings: 具体的配置内容，视协议不同而不同。

### 额外的传入连接配置（inbound detour）
此项是一个数组，可包含多个连接配置，每一个配置形如：
```javascript
{
  "protocol": "协议名称",
  "port": "端口",
  "settings": {}
}
```

其中：
* protocol: 连接协议名称，可选的值见[协议列表](#a=protocols-zh-cn)。
* port: 端口号，可以是一个数值，或者字符串形式的数值范围，比如 "5-10" 表示端口 5 到端口 10 这 6 个端口。
* settings: 具体的配置内容，视协议不同而不同。

