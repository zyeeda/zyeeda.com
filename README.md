# 如何使用

## 1. 安装 Vagrant

任意系统都用都可以从[官方网站](http://www.vagrantup.com/)下载并安装 Vagrant。

OSX 用户可以按照以下步骤安装：

安装 [Homebrew](http://brew.sh/)（如果已经安装则跳过）：

```bash
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
```

安装 [homebrew-cast](https://github.com/caskroom/homebrew-cask)（如果已经安装则跳过）：

```bash
brew tap caskroom/homebrew-cask  
brew install brew-cask
```

安装 [VirtualBox](https://www.virtualbox.org/)（如果已经安装则跳过） 和 Vagrant：

```bash
brew cask install virtualbox  
brew cask install vagrant  
```

## 2. 安装 Vagrant 插件

```bash
vagrant plugin install vagrant-cachier
vagrant plugin install vagrant-vbguest
```

## 3. 修改 hosts 文件，添加如下内容

```
192.168.33.10 zyeeda.com www.zyeeda.com
```

## 4. 进入本项目目录

## 5. 运行

使用以下命令运行系统：

```bash
vagrant up
```

**注：首次使用会需要较长时间下载文件，请耐心等待。**

## 6. 验证

等待完成后，使用浏览器访问 http://zyeeda.com

## 7. 停止

使用以下命令停止正在运行的系统：

```bash
vagrant halt
```