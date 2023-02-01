//1.导入express
var express=require('express');
//2.创建路由对象
var router=express.Router();


//3.挂载获取用户列表的路由
router.get('/user/list',function(req,res){
    res.send('Get user list')    
})
router.post('/user/add',function(req,res){
    res.send('Add new user')
})

//5.向外部导出对象（向外暴露）
module.exports=router;