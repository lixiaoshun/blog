### Http 请求浏览器

### 强缓存

- 强缓存，没有过期，不需要在发起请求，直接在缓存中获取数据
- chart-contore: max-age,nochart,设置多少秒后失效
- exparts：绝对的时间
- pargam: no-chart 优先级最高，不缓存

### 协商缓存

- 还是会发起请求，后端返回 304，表示没有更新，获取缓存数据
- last-modafile/if-modafile-sence：最后一次修改文件时间
- etag/if-no-much : 更具文件内容生成的标示，更准确
