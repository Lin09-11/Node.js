const express=require('express');
//创建web服务器 命名为app
const app=express();

//挂载路由
app.get('./',function(req,res){
    res.send('Hello,world')
})

app.post('./',function(req,res){
    res.send('Post Request')
})

//启动web服务器
app.listen(80,function(){
    console.log('sever running at http://127.0.0.1:80');
})