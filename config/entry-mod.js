/**
 * @file 配置webpack entry的路径
 */

var entryMods = {
    basic: {
        'mian': './src/main.js',
        vendor: ['vue', 'jquery', 'elementUi', 'vueCss']
    }
};

module.exports = entryMods;
