// fis.config.set('project.exclude', /^\/bower_components\//i);

fis.config.set('roadmap.path', [
    // anijs
    {
        reg: '/bower_components/anijs/dist/anijs.js',
        release: '/scripts/vendors/anijs/anijs.js',
        requires: ['/bower_components/animate.css/animate.css']
    }, {
        reg: '/bower_components/anijs/dist/helpers/scrollreveal/anijs-helper-scrollreveal.js',
        release: '/scripts/vendors/anijs/anijs-helper-scrollreveal.js',
        requires: ['/bower_components/anijs/dist/anijs.js']
    },

    // animate.css
    {
        reg: '/bower_components/animate.css/animate.css',
        release: '/scripts/vendors/anijs/animate.css'
    },

    // bootstrap
    {
        reg: '/bower_components/bootstrap/dist/js/bootstrap.js',
        release: '/scripts/vendors/bootstrap/bootstrap.js',
        requires: ['/bower_components/bootstrap/dist/css/bootstrap.css']

    }, {
        reg: '/bower_components/bootstrap/dist/css/bootstrap.css',
        release: '/scripts/vendors/bootstrap/bootstrap.css'
    }, {
        reg: /\/bower_components\/bootstrap\/dist\/fonts\/(.*)/,
        release: '/scripts/vendors/bootstrap/fonts/$1'
    },

    // html5shiv
    {
        reg: '/bower_components/html5shiv/dist/html5shiv.js',
        release: '/scripts/vendors/html5shiv/html5shiv.js'
    },

    // jquery
    {
        reg: '/bower_components/jquery/dist/jquery.js',
        release: '/scripts/vendors/jquery/jquery.js'
    },

    // modernizr
    {
        reg: 'bower_components/modernizr/modernizr.js',
        release: '/scripts/vendors/modernizr/modernizr.js'
    },

    // respond.js
    {
        reg: 'bower_components/respond/dest/respond.src.js',
        release: '/scripts/vendors/respond/respond.js'
    },

    // mod
    {
        reg: 'bower_components/mod/mod.js',
        release: '/scripts/vendors/mod/mod.js'
    },

    // exclude bower_components
    {
        reg: '/bower_components/**',
        release: false
    },

    // exclude bower.json
    {
        reg: 'bower.json',
        release: false
    }
]);

// fis.config.set('pack', {
//     'pkg/lib.js': [
//         '/modules/underscore/**.js',
//         '/modules/backbone/**.js',
//         '/modules/jquery/**.js',
//         '/modules/vendor/**.js',
//         '/modules/common/**.js'
//     ]
// });

//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
//fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');

//如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
//否则png图片透明部分在ie下会显示灰色背景
//使用spmx release命令时，添加--optimize或-o参数即可生效
//fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用pure release命令时，添加--lint或-l参数即可生效
// fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

//csssprite处理时图片之间的边距，默认是3px
// fis.config.set('settings.spriter.csssprites.margin', 20);
