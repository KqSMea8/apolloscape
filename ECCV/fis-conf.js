// @file fis3 config
fis.media('prod').match('*.{js,css,png,jpg,jpeg,gif}', {
    useHash: true,
    domain: 'http://wad.bdstatic.com'
});

fis.match('*.{js,css,png,jpg,jpeg,gif}', {
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
    optimizer: [
        function (content, file) {
            // console.log(file.realpath)
            content = content.replace(/(href="\/)(\w+\.html)/g, "$1ECCV/$2");
            content = content.replace(/("\/)(css|js|public|common)/g, "$1ECCV/$2");
            content = content.replace(/(url\(\/)(css|js|public|common)/g, "$1ECCV/$2");
            return content;
        },
        fis.plugin('clean-css')
    ]
});

fis.match('*.png', {
    optimizer: [fis.plugin('png-compressor')]
});

fis.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: [
        function (content, file) {
            // console.log(file.realpath)
            content = content.replace(/(href="\/)(\w+\.html)/g, "$1ECCV/$2");
            content = content.replace(/("\/)(css|js|public|common)/g, "$1ECCV/$2");
            content = content.replace(/(url\(\/)(css|js|public|common)/g, "$1ECCV/$2");
            return content;
        },
        fis.plugin('html-minifier', {
            removeComments: true,
            minifyJS: true,
            minifyCSS: true
        })
    ]
});