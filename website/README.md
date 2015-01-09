# zyeeda.com

zyeeda.com 采用 [fis](http://fis.baidu.com) 作为打包构建工具，所有 css 、js 都采用 mod.js 模块化，[详见文档](http://fis.baidu.com/docs/beginning/getting-started.html)

## 安装fis
npm install -g fis@1.8.10

> 因为新版本 1.8.12，取消了 `release: false` 的功能，以下配置会失效， 所以得装 1.8.10版本。
如果想用新版本的fis，就必须手动删除 bower_components 没用到的资源，报哪个错删哪个资源，那些都是无效的资源，
bower里多余发布的，比如一些test或 examples中的的 html, css等， fis releae 的时候会去关联，会报错。
	
	{
        reg: '/bower_components/**',
        release: false
    }


## 安装 fis 插件
npm install -g fis-parse-sass

npm install -g fis-postpackager-autoload

npm install -g fis-postpackager-simple

## 安装 bower
npm install -g bower

## 编译运行
cd zyeeda.com/website

bower install

fis release

fis start
