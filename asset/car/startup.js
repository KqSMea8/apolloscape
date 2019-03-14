/**
 * @file startup.js
 */

define('car/startup', ['require', 'common/startup', 'common/config'], function (require, App, AppConfig) {
    var exports = {};

    var config = AppConfig.getConfig();
    config.index = '/car/home';

    var controller = require('er/controller');
    controller.registerAction([
        {type: CarHome, path: '/car/home'}
    ]);

    var Action = require('er/Action');
    var inherits = require('er/util').inherits;

    function CarHome() {
        Action.apply(this, arguments);
        this.view = {
            render: function () {
            },
            dispose: function () {
            }
        };
    }
    inherits(CarHome, Action);

    exports.start = function () {
        return App.start(config);
    };

    return exports;
});










