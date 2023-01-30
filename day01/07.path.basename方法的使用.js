const path=require('path');


//顶文件的存放路径
const fpath='/a/b/c/index.html';

// const fullName=path.basename(fpath);
// console.log(fullName);//拿到文件的完整名称 包括扩展名


const nameWithoutExt=path.basename(fpath,'.html');
console.log(nameWithoutExt);