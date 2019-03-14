/**
 * @file 工具函数
 */

var sdexports = {};
var errorMapCn = {
    1: '请求失败',
    2: '您操作太频繁，请稍后重试',
    101: '无demo数据下载的权限',
    102: '无创建任务的权限',
    103: '不是当前task的owner',
    104: '您排队中和运行中的任务已经超过配额',
    105: '您今日下载模型的次数已经超过配额',
    106: '您下载模型的大小已经超过限制',
    107: '无创建标定任务的权限',
    403: '会话过期，请刷新页面，重新登录',
    504: '接口超时'
};
var errorMapEn = {
    1: 'Request failure',
    2: 'You operate too frequently, please try again later',
    101: 'No data download privileges',
    102: 'No permission to create a task',
    103: 'Not owner of the task',
    104: 'The number of queued and running tasks have exceeded quota',
    105: 'The times that you downloaded model has exceeded the quota today',
    106: 'This model size has exceeded the limit',
    107: 'No permission to create a calibration task',
    403: 'The session expired. Please refresh the page and sign in again.',
    504: 'Interface timeout, Please try again'
};

/**
 * ajax请求
 * @param {string} url 接口地址
 * @param {Object} data 表单数据
 * @param {function} callback 回调函数
 * @param {string} type get/post
 * @param {function} errorCallback 返回错误时，回调函数
 */
sdexports.ajax = function (url, data, callback, type, errorCallback, completeCb) {
    var locale = sdexports.getBrowserLanguage();
    var errorMap = locale === 'zh' ? errorMapCn : errorMapEn;
    $.ajax({
        type: type ? type : 'get',
        dataType: 'json',
        url: sdexports.ajax_prefix + url,
        data: data,
        success: function (json) {
            if (json.status !== 0) {
                var errorCallbackExist = typeof errorCallback === 'function';
                if (!errorCallbackExist) {
                    var msg = errorMap[json.status] ? errorMap[json.status] : json.message;
                    Vue.prototype.$message.warning({message: msg});
                    if (json.status === 403) {
                        sdexports.delCookie('BDUSS');
                    }
                } else {
                    errorCallback(json);
                }
                return;
            }
            callback(json);
        },
        error: function (o, info) {
            console.log(1);
            var msg = errorMap[o.status] ? errorMap[o.status] : errorMap[0];
            msg = msg + '(code: ' + o.status + ')';
            Vue.prototype.$message.warning({message: msg})
        },
        complete: function (xhr) {
            if (typeof completeCb === 'function') {
                compvareCb(xhr);
            }
        }
    });
};

/**
 * 从url中解析参数
 * @return {Object} map
 */
sdexports.parseUriParams = function () {
    var params = window.location.search.replace(/\?/, '').split('&');
    var len = params.length;
    var re = {};
    for (var i = 0; i < len; i++) {
        var temp = params[i].split('=');
        re[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    return re;
};

/**
 * 获取浏览器语言环境
 * @return {string} language  en 英文 / ch 中文
 */
sdexports.getBrowserLanguage = function () {
    // en-us zh-dn
    var lan = 'zh';
    var search = this.parseUriParams();
    if (!!search['locale']) {

        if (search['locale'].toLowerCase() === 'en-us') {
            lan = 'en';
        }
    }
    else {

        // var browserLanguage = 'zh-cn';
        var browserLanguage = getLanguage();

        // if (navigator.language || navigator.userLanguage) {
        //     browserLanguage = navigator.language || navigator.userLanguage;
        // }
        // if (navigator.languages && navigator.languages[0]) {
        //     browserLanguage = navigator.languages[0];
        // }


        if (!!browserLanguage) {
            if (browserLanguage.toLowerCase().indexOf('en') > -1) {
                lan = 'en';
            }
        }

    }

    function getLanguage() {

        if (navigator.language || navigator.userLanguage) {
            // browserLanguage = navigator.language || navigator.userLanguage;
            return navigator.language || navigator.userLanguage;
        }
        if (navigator.languages && navigator.languages[0]) {
            return navigator.languages[0];
        }
        return 'zh-cn';
    }

    return lan;
}

// 判断是否为safari
sdexports.isSafari = function () {
    var ua = navigator.userAgent;
    return (ua.indexOf('Safari') > -1 && ua.indexOf('Version') > -1);
};

// 判断是否为baidu
sdexports.isBaiduBrowser = function () {
    var ua = navigator.userAgent;
    return (ua.indexOf('BIDUBrowser') > -1);
};

// 判断是否为pc

sdexports.isPC = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;

    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
   return flag;
};

// 删除数组指定元素
sdexports.removeByValue = function(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
        }
    }
};

// 格式化文件大小
sdexports.formatSize = function(bytes) {
    if (!bytes) {
        return bytes;
    }
    var s = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    var e = Math.floor(Math.log(bytes) / Math.log(1024));
    var size = ( bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + ' ' + s[e];
    return size;
};

// 格式化文件大小
sdexports.getDoc = function(selector, index = 0) {
    var a = document.querySelectorAll(selector);
    var b = {};
    a.forEach( function (element) {
        element.childNodes.forEach(function (e, i) {
            if (e.nodeType === 3 && $.trim(e.textContent) && e.parentNode.nodeName !== 'STYLE') {
                b['text' + index] = $.trim(e.textContent);
                index++;
            }
        });
    });
    console.log(JSON.stringify(b));
};

sdexports.complied = function (str) {
    var tpl = str.replace(/{{([\s\S]+?)}}/g, (match, code) => {
        return "' + obj." + code + " + '"; 
    });
    tpl = "var tpl = '" + tpl + "'\nreturn tpl;";
    return new Function('obj', tpl);
}

sdexports.setCookie = function (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + '=' + escape(value)
    + (expiredays ? '' : ';expires=' + exdate.toGMTString())
}

sdexports.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = sdexports.getCookie(name);
    if (cval) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
}

sdexports.getCookie = function (name) {
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    var arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

sdexports.Unitformat = function (unix) {
    var timestr = '';
    var date = new Date(unix * 1000);
    timestr += date.getFullYear();
    timestr += '-' + (date.getMonth() + 1 > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)));
    timestr += '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());;
    timestr += ' ' + (date.getHours() > 9 ? date.getHours() : '0' + date.getHours());
    timestr += ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes());
    return timestr;
}

// &orp_preview=1
sdexports.ajax_prefix = 'http://cp01-face-1.epc.baidu.com:8023';

$.tool = sdexports;