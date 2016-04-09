module.exports = {
    entry : './entry.js',
    output : {
        path : __dirname,
        filename : "bundle.js"
    },
    module:{
        loaders : [
            {test:/\.css$/ , loader:"styls!css"}
        ]
    }
};
/*
 * webpack --progress --colors
 *
 * We don’t want to manually recompile after every change…
 * webpack --progress --colors --watch
 */
