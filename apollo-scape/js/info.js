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
        'form': [
            {
                'type': 'div',
                'attr': 'class="container"',
                'word': [
                    '<div class="title fl">完善信息</div>',
                    '<div class="title-bg fl"></div>',
                    '<div class="cb"></div>'
                ]
            },
            {
                'type': 'div',
                'attr': 'class="brief"',
                'word': '欢迎登陆，<span id="user_id"></span>，完善信息即可获得数据集下载权限'
            },
            {
                'type': 'div',
                'attr': 'class="container"',
                'word': [
                    '<div class="info-input" id="email_input">邮箱：<input type="input" id="email" name="email" placeholder="请输入您的邮箱"></div>',
                    '<div class="input-error" id="email_error">请输入正确邮箱格式</div>',
                    '<div class="info-input">电话：<input type="tel" id="phone" name="phone" placeholder="请输入您的电话">',
                    '<input type="hidden" name="phoneType" id="phoneType"></div>',
                    '<div class="info-input">机构：<input type="input" id="organization" name="organization" placeholder="请填写您所在的机构"></div>',
                    '<div class="submit-btn" id="submit_btn"><a>确认提交</a></div>'
                ]
            },
        ]
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
        'form': [
            {
                'type': 'div',
                'attr': 'class="container"',
                'word': [
                    '<div class="title fl">Improve information</div>',
                    '<div class="title-bg fl"></div>',
                    '<div class="cb"></div>'
                ]
            },
            {
                'type': 'div',
                'attr': 'class="brief"',
                'word': 'Welcome，<span id="user_id"></span>，Improve information to get data download'
            },
            {
                'type': 'div',
                'attr': 'class="container"',
                'word': [
                    '<div class="info-input" id="email_input">email：<input type="input" id="email" name="email" placeholder="Please enter your email"></div>',
                    '<div class="input-error" id="email_error">Please enter the correct email format</div>',
                    '<div class="info-input">phone：<input type="tel" id="phone" name="phone" placeholder="Please enter your number">',
                    '<input type="hidden" name="phoneType" id="phoneType"></div>',
                    '<div class="info-input">organization：<input type="input" style="width:280px;" id="organization" name="organization" placeholder="Please fill in your institution"></div>',
                    '<div class="submit-btn" id="submit_btn"><a>confirm</a></div>'
                ]
            },
        ]
    };


    if ($.cookie('use_lang') == 'en') {
        var arr = arrEn;
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
    $('#info-ban').html(html);

    html = '';
    $.each(arr.form, function (index, ele) {
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

    $("#form-container").html(html);

    get_userinfo();

    $("#submit_btn").bind("click", function(){
        save();
    })

    $("#phone").intlTelInput();
}

function save() {
    var tmp = $('.selected-flag').attr('title');
    var tmp_arr = tmp.split(':');
    var phone_type = '+86';
    if (tmp_arr.length > 1) {
        phone_type = tmp_arr[1];
    }
    var email = $("#email").val();
    var regex = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if (regex.test(email)) {
        $("#email_error").css("display", "none");
        $("#email_input").removeClass("info-input-error");
        $("#email_input").addClass("info-input");
    } else {
        $("#email_error").css("display", "block");
        $("#email_input").removeClass("info-input");
        $("#email_input").addClass("info-input-error");
        return;
    }
    $("#phoneType").attr("value", phone_type);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/server/user/upinfo',
        data: $('#upInfo').serialize(),
        success: function (result) {
            if (result.status === 400) {
                window.location = '/login.html';
            }
            if (result.status === 0) {
                window.location = '/index.html';
            }
            if (result.status === 500) {
                window.location = '/404.html';
            }
        },
        error: function () {
            window.location = '/404.html';
        }
    });
}

function get_userinfo(lang) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/server/user/checkinfo',
        success: function (res) {
            if (res.status == 0) {
                $('#user_id').html(res.data.username);
            } else {
                window.location = '/login.html';
            }
        },
        error: function () {
            window.location = '/404.html';
        }
    });
}
