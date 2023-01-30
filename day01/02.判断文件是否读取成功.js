// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  
  // 如果读取成功，则 err 的值为 null[null为false]
  if(err){
   return console.log('读取失败'+err.message);
  }
  console.log('读取成功'+dataStr);

})
