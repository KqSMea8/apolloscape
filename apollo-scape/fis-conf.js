// @file fis3 config
fis.media('prod').match('*.{js,css,png,jpg,jpeg,gif,webm}', {
    useHash: true,
    // domain: 'http://scape.bdstatic.com'
});

fis.media('debug').match('*.{js,css,png}', {
    useHash: false,
});

fis.match('*.{js,css,png,jpg,jpeg,gif,webm}', {
    useHash: true
});

fis.match('*.min.{js,css}', {
    useOptimizer: false
    // useHash: false
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: fis.plugin('html-minifier', {
        removeComments: true,
        // minifyJS: true,
        minifyCSS: true
    })
});