# 如何运行

zyeeda.com 网站采用 [Baidu F.I.S](http://fis.baidu.com) 作为打包构建工具，所有 CSS 、JavaScript 等都采用 mod.js 模块化，[详见文档](http://fis.baidu.com/docs/beginning/getting-started.html)。

## 安装 FIS

npm install -g fis@1.8.10

> 因为 1.8.12 版本取消了 `release: false` 的功能，以下配置会失效，所以必须强制安装 1.8.10 版本。如果想使用最新版本的 FIS，就必须手动删除 bower_components 目录下没用到的资源，报哪个错删哪个资源，那些都是无效的资源。bower 里多余发布的，比如一些测试或样例中的 HTML 和 CSS 等在 `fis releae` 的时候会去关联，会报错。

```
{
    reg: '/bower_components/**',
    release: false
}
```

## 安装 FIS 插件

npm install -g fis-parser-sass

npm install -g fis-postpackager-autoload

npm install -g fis-postpackager-simple

npm install -g fis-command-start

## 安装 bower

npm install -g bower

## 编译运行

cd website

bower install

fis release -opm

fis server start
