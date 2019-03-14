1. samba连接修改
使用 smb 连接我的开发机啊，获取
smb://10.94.190.95
adt@123
进入项目：www/baidu/adu/eap-scape/car/web/eccv-src

2. 登录开发机修改
work@10.94.190.95
密码私hi zhengpengjie

---编译----

cd /home/work/www/baidu/adu/eap-scape/car/web/eccv-src
fis3 release -cd ../ECCV

---查看----

http://10.94.190.95:8081/ECCV/index.html

-------------------------------
安装 node (推荐v6.11.3)

npm config set registry http://registry.npm.baidu.com  (国内设置)

npm i fis3 -g
npm i -g fis-optimizer-html-minifier
fis3 server start
------------------------------






