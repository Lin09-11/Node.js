
-- 这是注释
-- 从from指定的表中，查询出所有的数据  *表示所有【列】
-- select *
-- from users

-- 从表中把username和password对应的数据查询出来
-- select username,password
-- from users

-- 向users表中 插入新的数据
--  insert into users(username,password,status)
--  values ('tony stsrk','098123','0')


-- 将id为3的密码改为：888888
-- update users
-- set password='888888'
-- where id=3


-- 将users表中id为2的用户密码和用户状态改为admin23  和   1
-- update users
-- set password='admin23',status=1
-- where id=2


-- 删除users表中 id为3的用户
DELETE FROM users
WHERE id=3


 SELECT *
 FROM users
 
 
 