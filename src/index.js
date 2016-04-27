/**
 * Created by vimniky on 4/26/16.
 */

var userAgent = navigator.userAgent.toLowerCase();
if (/msie/.test(userAgent) &&
    parseFloat((userAgent.match(/.*(?:rv|ie)[\/: ](.+?)([ \);]|$)/) || [])[1]) < 9) {
    document.write('您的IE浏览器版本 (小于9) 太低 !');
}else {
    require('./components/addEventListener-polyfill');
    require('es5-shim');
    require('es5-shim/es5-sham');
    require('console-polyfill');
    require('./App');
}
