# 如何使用

1. 下载并安装 [Vagrant](http://www.vagrantup.com/)
2. 安装插件
   ```shell
   vagrant plugin install vagrant-cachier
   vagrant plugin install vagrant-vbguest
   ```
3. 修改 hosts 添加如下内容
   ```
   192.168.33.10 zyeeda.com www.zyeeda.com
   ```
4. 进入本项目目录
5. 运行
   ```shell
   vagrant up
   ```
6. 等待完成后，使用浏览器访问 http://zyeeda.com
