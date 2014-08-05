// js pack
fis.config.set('modules.postpackager', 'simple');

// css autoCombine
fis.config.set('settings.postpackager.simple.autoCombine', true);

// fis.config.set('modules.spriter', 'csssprites');
// fis.config.set('pack', {
//     //对合并的aio.css进行处理
//     'aio.css': [
//        '**.css'
//     ]
// });
// //为所有样式资源开启csssprites
// fis.config.set('roadmap.path', [{
//     reg: '**.css',
//     useSprite: true
// }]);

// //设置csssprites的合并间距
// fis.config.set('settings.spriter.csssprites.margin', 20);

fis.config.set('pack', {
    'pkg/lib.js': [
        '/js/jquery-1.11.1.js',
        '/js/bootstrap.min.js',
        '/js/jquery.easing.min.js',
        '/js/freelancer.js',
        '/js/anijs/anijs.js',
        '/js/anijs/helpers/scrollreveal/anijs-helper-scrollreveal.js'
    ]
});