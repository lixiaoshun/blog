## http 发展过程

### http1.0

### http1.1

- 引入了持久链接，即 TCP 连接默认不关闭，可以被多个请求复用，不用申明 connection:keep-alive
- 目前，对于同一域名，大多数浏览器允许同时建立 6 个持久连接
- 问题
  - 队头堵塞
  - 请求头没有压缩：首部信息越多，延迟越大；发送冗长的首部，造成浪费
  - 没有请求优先级
  - 请求只能从客户端开始，服务器只能被动响应

### http2

- 压缩头部：如果一次发送多个请求，头部相同或者相似，协议会帮消除重复部分
- 帧形式发送数据：不再是纯文本的报文，全面采用二进制格式。
- 指定数据流优先级：不按顺序，同一个连接里面连续的数据包，可能属于不同回应
- 多路复用：并发多个请求，不再和 1 一样串行请求，不再排队，解决队头杜塞的问题
- 服务器推送（websock）：可以主动向客户端发送请求

### http3

- 基于 UDP
