const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use('/abc', express.static('./files'))//挂载路径前缀最好跟后面的路径文件名相同


//如果单纯这样写 如果访问时候在files前面没有abc的话，就会访问失败 则访问下一个地址
// app.use('/abc', express.static('./files'))

//将clock这个文件夹中的所有文件都对外开发 但是在路径中并不显示这个clock这个文件名
app.use(express.static('./clock'))

app.listen(8041, () => {
  console.log('express server running at http://127.0.0.1:8041')
})


