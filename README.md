# more-money

零依赖的金额转换工具库

安装

```
pnpm i more-money
```

代码示例

```js
import {validateMoney, parseMoney, formatMoney } from "more-money"

// 分 -> 元
formatMoney(1210) // 12.1

// 元 -> 分
parseMoney('12.01') // 1201

// 校验元是否正确
validateMoney("12.001") // false
validateMoney("12.01") // true
```

打包参考

- [创建现代npm包的最佳实践](https://mp.weixin.qq.com/s/3YQl0o0GrnqL5tv1SHu3og)