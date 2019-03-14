/* eslint-disable */
$(document).ready(function () {
});

setTimeout(function () {
    initNav();
}, 360);

function initNav() {
    if ($('#sub-nav-ul').length > 0) {
        showNav();
    }
    else {
        setTimeout(function () {
            initNav();
        }, 400);
    }
}
function showNav() {
    var scene = '<li class="nav-item plr20 nav-home fl sub-nav-flag nav_scene" data-subnav="scene">'
              + '<a href="#" class="head-link">Datasets</a></li>';
    var leaderBoard = '<li class="nav-item plr20 nav-home fl sub-nav-flag">'
                    + '<a href="/leader_board.html" class="head-link">LeaderBoard</a></li>';
    var activity = '<li class="nav-item plr20 nav-home fl sub-nav-flag nav_challenge" data-subnav="activity">'
                 + '<a href="#" class="head-link">Events</a></li>';
    var navEn = [
        '<li class="nav-item plr20 nav-home fl sub-nav-flag"><a href="/index.html" class="head-link">Home</a></li>',
        scene,
        leaderBoard,
        activity
    ];
    // var navCn = [
    //     '<li class="nav-item nav-home fl sub-nav-flag"><a href="/index.html" class="head-link">首页</a></li>',
    //     '<li class="nav-item nav-home fl sub-nav-flag nav_scene" data-subnav="scene"><a href="#" class="head-link">数据集</a></li>',
    //     '<li class="nav-item plr20 nav-home fl sub-nav-flag"><a href="/leader_board.html" class="head-link">LeaderBoard</a></li>',
    //     '<li class="nav-item nav-home fl sub-nav-flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">活动</a></li>'
    // ];
    var langEn = {
        'login': 'Login',
        'lang': '中文',
        'logout': 'Logout',
        'use_pc': 'Please use PC to access this page to download data and view more',
        'perfect_info': '完善信息',
        'assessment_manage': '评估管理'
    };
    // var langCn = {
    //     'login': '登陆',
    //     'lang': 'English',
    //     'logout': '退出登陆',
    //     'use_pc': '请使用PC登录本页面下载数据集和查看更多详情。',
    //     'perfect_info': '完善信息',
    //     'assessment_manage': '评估管理'
    // };

    var subNavEn = {
        scene: [
            '<li class="fl"><a href="scene.html">Scene Parsing</a></li>',
            '<li class="fl" style="margin-right: 500;"><a href="car_instance.html">Car Instance</a></li>',
            '<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lane Segmentation</a></li>',
            '<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>',
            '<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>',
            '<li class="fl" style="margin-right: 500;"><a href="tracking.html">Tracking</a></li>'
        ],
        activity: [
            '<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2019 Perception Workshop</a></li>',
            '<li class="fl"><a href="/ECCV/index.html">ECCV2018 Vision Workshop</a></li>',
            // '<li class="fl"><a href="Http://www.2018iv.org/SS07.html">IV2018 Simulation Challenge</a></li>',
            '<li class="fl"><a href="license.html">User License</a></li>'
        ]
    };

    // var subNavCn = {
    //     scene: [
    //         '<li class="fl"><a href="scene.html">场景解析</a></li>',
    //         '<li class="fl" style="margin-right: 500;"><a href="car_instance.html">3D Car Instance</a></li>',
    //         '<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lanes Segmentation</a></li>',
    //         '<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>',
    //         '<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>'
    //     ],
    //     activity: [
    //         '<li class="fl"><a href="/ECCV/index.html">ECCV2018 视觉导航研讨会</a></li>',
    //         '<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 感知研讨会</a></li>',
    //         // '<li class="fl"><a href="Http://www.2018iv.org/SS07.html">IV 2018 仿真挑战赛</a></li>',
    //         '<li class="fl"><a href="license.html">开发者协议</a></li>'
    //     ]
    // };

    var html = '';
    if ($.cookie('use_lang') === 'en') {
        var nav = navEn;
        var lang = langEn;
        var subnav = subNavEn;
    } else {
        var nav = navEn;
        var lang = langEn;
        var subnav = subNavEn;
    }
    $.each(nav, function (index, ele) {
        html += ele;
    });
    $('.nav-list').html(html);

    // $('.lang-switch').html(lang.lang);

    $('#use_pc_text').html(lang.use_pc);

    var isLogin = getUserinfo(lang);
    // $(".sub-nav-flag").bind("mouseover", function(){
    //     if ($(this).hasClass('nav_challenge') || $(this).hasClass('nav_scene')) {
    //         var subnavname = $(this).attr('data-subnav');
    //         var html = '';
    //         $.each(subnav[subnavname], function (index, ele) {
    //             html += ele
    //         });
    //         $("#sub-nav-ul").html(html);
    //         $(".sub-nav").css("display", "inline");
    //     } else {
    //         $(".sub-nav").css("display", "none");
    //     }
    // });
    //
    // $(".sub-nav").bind("mouseover", function() {
    //     $(".sub-nav").css("display", "inline");
    //
    // });
    //
    // $(".sub-nav").bind("mouseout", function() {
    //     $(".sub-nav").css("display", "none");
    // });
    // 初次导航栏显示 @beyondsoft
    var subTab = '';
    $.each(subnav.scene, function (a, l) {
        subTab += l;
    });
    $('#sub-nav-ul').html(subTab);
    getUrl();
    // 控制导航栏显示 @beyondsoft
    $('.sub-nav-flag').bind('mouseover', function () {
        var attr = $(this).attr('data-subnav');
        if (attr) {
            var subList = '';
            $.each(subnav[attr], function (a, l) {
                subList += l;
            });
            $('#sub-nav-ul').html(subList);
            getUrl();
        }
    });
    $('#lang-switch').bind('click', function () {
        if ($.cookie('use_lang') === 'en') {
            $.cookie('use_lang', 'cn', {expires: 15});
        }
        else {
            $.cookie('use_lang', 'en', {expires: 15});
        }
        window.location.reload();
    });

    if (isLogin * 1 === 1) {
        $('#lang-login-container').bind('mouseover', function () {
            $('.lang-logout').css('display', 'block');
            $('.lang-logout').on('click', function () {
                userLogout();
            });
        });
        $('#lang-login-container').bind('mouseout', function () {
            $('.lang-logout').css('display', 'none');
        });
    }

    $('.mobile-banner-close').bind('click', function () {
        $('.nav-prompt').css('display', 'none');
    });
}

function getUserinfo(lang) {
    var res = 1;
    var html = '';

    // var username = 'hushi';
    // if (username.length > 5) {
    //     var username = username.slice(0,5) + "..."
    // }
    // html = '<a href="#" class="lang-login sub-nav-flag">' + username + '</a>';

    // html += '<a class="lang-logout" href="perfect_info.html">' + lang.perfect_info + '</a>';
    // html += '<a class="lang-logout" href="assessment_manage.html">' + lang.assessment_manage + '</a>';
    // html += '<div class="lang-logout" id="lang_logout">' + lang.logout + '</div>';
    // $('#lang-login-container').html(html);

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/server/user/checkinfo',
        success: function (res) {
            if (res.status * 1 === 0) {
                var username = res.data.username;
                if (username.length > 5) {
                    username = username.slice(0, 5) + '...';
                }
                html = '<a href="#" class="lang-login sub-nav-flag">' + username + '</a>';
                html += '<div class="lang-logout">' + lang.logout + '</div>';
                $('#lang-login-container').html(html);
                res = 1;
            }
            else {
                html = '<a href="/login.html" class="lang-login sub-nav-flag">' + lang.login + '</a>';
                $('#lang-login-container').html(html);

            }
        },
        error: function () {
            html = '<a href="/login.html" class="lang-login sub-nav-flag">' + lang.login + '</a>';
            $('#lang-login-container').html(html);
        }
    });

    return res;
}

function userLogout() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/server/user/logout',
        success: function (res) {
            window.location = '/index.html';
        },
        error: function () {
            window.location = '/index.html';
        }
    });

}

function getUrl() {
    var path = location.pathname.replace('/', '');
    // console.log($('#sub-nav-ul a'))
    $('#sub-nav-ul a').each(function (index, ele) {
      // console.log(path)
      // console.log($(ele).attr('href'))
        if ($(ele).attr('href') === path) {
            $(ele).addClass('current');
        }
    });
    // if(path)
}
// getUrl()
