// fis.config.set('project.exclude', /^\/bower_components\//i);

//项目排除掉_xxx.scss，这些属于框架文件，不用关心
fis.config.set('project.exclude', '**/_*.scss');
//scss后缀的文件，用fis-parser-sass插件编译
fis.config.set('modules.parser.scss', 'sass');
//scss文件产出为css文件
fis.config.set('roadmap.ext.scss', 'css');

fis.config.set('roadmap.path', [
    //exclude htm 模板
    {
        reg: "**.htm",
        release: false
    },
    // modules
    {
        id: 'main',
        reg: 'modules/main.js',
        release: 'modules/main.js'
        // isMod: true
    },
    {
        reg: /\/modules\/(.*)\/main.js/,
        release: '/modules/$1/main.js',
        requires: ['$1-xs.scss', '$1-sm.scss', '$1-md.scss', '$1-lg.scss'],
        id: '$1'
        // isMod : true

    }, 
    {
        reg: /\/modules\/(.*)\/css\/(.*)/,
        release: '/modules/$1/css/$2',
        id: '$1-$2'
    },

    // bootstrap
    {
        id: 'bootstrap',
        reg: '/bower_components/bootstrap/dist/js/bootstrap.js',
        release: '/scripts/vendors/bootstrap/bootstrap.js',
        requires: ['bootstrap.min.css', 'font.css', 'jquery']
    }, {
        id: 'bootstrap.min.css',
        reg: '/bower_components/bootstrap/dist/css/bootstrap.min.css',
        release: '/scripts/vendors/bootstrap/bootstrap.min.css'
    }
    ,
    {
        reg: /\/bower_components\/bootstrap\/dist\/fonts\/(.*)/,
        release: '/font/$1'
    },

    // html5shiv
    {
        id: 'html5shiv',
        reg: '/bower_components/html5shiv/dist/html5shiv.js',
        release: '/scripts/vendors/html5shiv/html5shiv.js'
    },

    // jquery
    {
        id: 'jquery',
        reg: '/bower_components/jquery/dist/jquery.js',
        release: '/scripts/vendors/jquery/jquery.js'
        // isMod: true
    },
    {
        id: 'jquery.easing',
        reg: '/bower_components/jquery.easing/js/jquery.easing.js',
        release: '/scripts/vendors/jquery.easing/jquery.easing.js',
        requires: ['jquery'],
        // isMod: true
    },
    // skrollr
    {
        id: 'skrollr',
        reg: '/bower_components/skrollr/dist/skrollr.min.js',
        release: '/scripts/vendors/skrollr/skrollr.js'
    },

    // modernizr
    {
        id: 'modernizr',
        reg: 'bower_components/modernizr/modernizr.js',
        release: '/scripts/vendors/modernizr/modernizr.js'
    },

    // respond.js
    {
        id: 'respond',
        reg: 'bower_components/respond/dest/respond.src.js',
        release: '/scripts/vendors/respond/respond.js'
    },

    // mod
    {
        id: 'mod',
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
    },

    // font
    {
        id: 'font.css',
        reg: 'font/font.css',
        release: 'font/font.css'
    },
    {
        reg: /\/font\/(.*)/,
        release: '/font/$1'
    }
    
]);
// 插件与配置
fis.config.merge({
    modules : {
        postprocessor : {
            js : 'jswrapper'
        },
        postpackager : ['autoload', 'simple']
    },
    settings : {
        postprocessor : {
            jswrapper : {
                type : 'amd'
            }
        }
    }
});



fis.config.set('pack', {
    'pkg/lib.js': [
        '/scripts/vendors/jquery/**.js',
        '/scripts/vendors/jquery.easing/**.js',
        '/scripts/vendors/bootstrap/**.js',
        '/scripts/vendors/html5shiv/**.js',
        '/scripts/vendors/modernizr/**.js',
        '/scripts/vendors/respond/**.js',
        '/scripts/vendors/skrollr/**.js'
    ]
});


//目录规范

// fis.config.merge({
//     roadmap : {
//         path : [
//             {
//                 //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
//                 //直接引用为var $ = require('jquery');
//                 reg : /^\/modules\/([^\/]+)\/\1\.(js)$/i,
//                 //是组件化的，会被jswrapper包装
//                 isMod : true,
//                 //id为文件夹名
//                 id : '$1'
//             },
//             {
//                 //modules目录下的其他文件
//                 reg : /^\/modules\/(.*)\.(js)$/i,
//                 //是组件化的，会被jswrapper包装
//                 isMod : true,
//                 //id是去掉modules和.js后缀中间的部分
//                 id : '$1'
//             },
//             {
//                 //其他css文件
//                 reg : "**.css",
//                 //css文件会做csssprite处理
//                 useSprite : true
//             },
//             {
//                 //readme文件，不要发布
//                 reg : /\/readme.md$/i,
//                 release : false
//             }
//         ]
//     }
// });

//css 合并
fis.config.set('settings.postpackager.simple.autoCombine', true);

//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');

//如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
//否则png图片透明部分在ie下会显示灰色背景
//使用spmx release命令时，添加--optimize或-o参数即可生效
// fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用pure release命令时，添加--lint或-l参数即可生效
// fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

//csssprite处理时图片之间的边距，默认是3px
// fis.config.set('settings.spriter.csssprites.margin', 20);
