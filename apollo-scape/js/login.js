/* eslint-disable */
$(document).ready(function () {
});
setTimeout(function () {
    initHtml();
}, 360);

function initHtml() {
    if ($('.done-load').length > 0) {
        showHtml();
    }
    else {
        setTimeout(function () {
            initHtml();
        } ,400);
    }
}

function showHtml() {
    var arrCn = {
        'banner': [
            {
                'type': 'p',
                'attr': 'class="title"',
                'word': 'ApolloScape'
            },
            {
                'type': 'p',
                'attr': 'class="sub_title"',
                'word': '自动驾驶前沿开放式工具及数据集'
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': 'ApolloScape是阿波罗自动驾驶项目的一个研究型项目，旨在促进自动驾驶的各方面创新。'
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': '它开放对像素级标注的场景解析数据集和仿真工具的访问。'
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': '这是一个不断发展的项目，将定期添加新的数据集和新功能。 '
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': '将举办各种研讨会和挑战，鼓励交流想法，共同推动自主驾驶研究的先进技术。 '
            },
            {
                'type': 'div',
                'attr': 'class="hr"',
                'word': ''
            }
        ],
        'login': '请选择您的登录账户信息'
    };
    var arrEn = {
        'banner': [
            {
                'type': 'p',
                'attr': 'class="title"',
                'word': 'ApolloScape'
            },
            {
                'type': 'p',
                'attr': 'class="sub_title"',
                'word': 'Advanced Open Tools and Datasets for AD'
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': 'ApolloScape,  part of the Apollo project for autonomous driving, is a research-oriented project to foster innovations in all aspects of autonomous driving.'
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': 'It hosts open access to semantically annotated (pixel-level) street view images and simulation tools that supports user-defined polices. '
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': 'It is an evolving project that new datasets and new capability will be added regularly.  '
            },
            {
                'type': 'p',
                'attr': 'class="brief"',
                'word': 'Various workshops and challenges will be hosted to encourage exchanges of ideas and jointly advance the state of the art in autonomous driving research.   '
            },
            {
                'type': 'div',
                'attr': 'class="hr"',
                'word': ''
            }
        ],
        'login': 'Select your account'
    };

    if ($.cookie('use_lang') == 'en') {
        var arr = arrEn;
        // $("#baidu_login").css("display", "block");
        // $("#google_login").removeClass("ml");
        // $("#github_login").addClass("ml");
        $("#google_login").css('marginLeft','20')
    } else {
        var arr = arrCn;
    }

    var html = '';
    $.each(arr.banner, function (index, ele) {
        html += '<' + ele.type + ' ' + ele.attr + '>';
        if (typeof ele.word == "string") {
            html += ele.word;
        } else {
            $.each(ele.word, function (ind, el) {
                html += el;
            })
        }
        html += '</' + ele.type + '>';
    });
    $('#login-ban').html(html);

    $("#login-title").html(arr.login);

    // github login
    $('#github_login').bind("click", function() {
        window.location = 'https://github.com/login/oauth/authorize?client_id=6bff2b90aaa2bd16db57&state=1&redirect_uri=http://apolloscape.auto/login.html';
    })

    // baidu login
    $('#baidu_login').bind("click", function (){
        window.location = 'http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=1hCmuiEoiGCyzYhxr53ZyTrF&redirect_uri=http://apolloscape.auto/login.html';
    })

    // google login
    $.getScript("https://apis.google.com/js/api:client.js")
        .done(function(script, textStatus) {
            initLogin();
        })
        .fail(function(jqxhr, settings, exception) {
            $("#google_login").bind("click", function(){
                alert('google api load error');
            })
        });
}

var initLogin = function() {
    // google login
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '738174458074-ors4lmed8qcgufndpskg3vuotvkl5b7j.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile'
        });

        auth2.attachClickHandler($('#google_login')[0], {}, function() {
            var profile = auth2.currentUser.get().getBasicProfile();
            $.post('/server/user/saveinfo', {
                'username': profile.getName(),
                'user_id': profile.getId(),
                'avatar_url': profile.getImageUrl()
            }, function (res) {
                if (res.status === 401) {
                    window.location = '/info.html';
                } else if (res.status === 0) {
                    window.location = '/index.html';
                } else {
                    window.location = '/login.html';
                }
            });
        }, function(error) {
            window.location = '/login.html';
            //console.log(JSON.stringify(error, undefined, 2));
        });
    });
};

var checkLogin = function () {
    var search = getUrlParam();
    if (document.cookie.indexOf('login_token') > 0 || search.code) {
         $.get(
            '/server/user/userinfo',
            {code: search.code, state: search.state},
            function (res) {
                console.log(res);
                if (res.status === 0) {
                    window.location = '/index.html';
                } else if (res.status === 401) {
                    window.location = '/info.html';
                } else {
                    //initLogin();
                }
            }
        )
    } else {
        //initLogin();
    }
}

checkLogin();

function getUrlParam () {
    var params = window.location.search.replace(/\?/, '').split('&');
    var len = params.length;
    var re = {};
    for (var i = 0; i < len; i++) {
        var temp = params[i].split('=');
        re[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    return re;
}
