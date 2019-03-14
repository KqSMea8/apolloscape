$(document).ready(function () {
});

setTimeout(function () {
    bind_function();
}, 420);


function bind_function() {

    $(".data_set_btn").bind("click", function() {
        var id = $(this).attr("value");
        download(id);
    });
    $(".submit_achievement").bind("click", function () {
        isLogin('/ECCV/submit.html');
    });
    $("#close_protocol").bind("click", function() {
        $(".protocol-bg").css("display", "none");
        $(".protocol_container").css("display", "none");
    });
    $(".agree_btn").bind("mouseover", function() {
        if ($(this).attr("value") != "1") {
            $(this).removeClass("agree_btn_no");
            $(this).addClass("agree_btn_on");
        }
    });
    $(".agree_btn").bind("mouseout", function() {
        if ($(this).attr("value") != "1") {
            $(this).removeClass("agree_btn_on");
            $(this).addClass("agree_btn_no");
            $(this).css("color", "#999");
        }
    });
    $(".agree_btn").bind("click", function() {
        if ($(this).attr("value") != "1") {
            $(this).attr("value", "1");
            $(this).removeClass("agree_btn_on");
            $(this).removeClass("agree_btn_no");
            $(this).removeClass("agree_btn_ok");
            $(this).addClass("agree_btn_ok");
        } else {
            $(this).attr("value", "0");
            $(this).removeClass("agree_btn_on");
            $(this).removeClass("agree_btn_no");
            $(this).removeClass("agree_btn_ok");
            $(this).addClass("agree_btn_on");
        }
    });
    $(".submit_btn").bind("click", function(){
        var id = $("#download_id").attr("value");
        var is_agree = $(".agree_btn").attr("value");
        if ($(".agree_btn").attr("value") != "1"){
            $(".agree_btn").removeClass("agree_btn_on");
            $(".agree_btn").removeClass("agree_btn_no");
            $(".agree_btn").removeClass("agree_btn_ok");
            $(".agree_btn").addClass("agree_btn_on");
            $(".agree_btn").css("color", "#0073eb");
        } else {
            $("#download_id").attr("value", id);
            download(id);
            $("#download_id").attr("value", "0");
            $(".protocol-bg").css("display", "none");
            $(".protocol_container").css("display", "none");
        }
    })
}

function download(id) {
    var is_agree = $(".agree_btn").attr("value");
    $.get(
        '/server/user/download',
            {
                downloadName: id,
                isAgree: is_agree
            },
        function (res) {
            if (res.status === 400) {
                window.location = '/login.html';
            }
            if (res.status === 401) {
                window.location = '/info.html';
            }
            if (res.status === 402) {
                $(".protocol-bg").css("display", "inline");
                $(".protocol_container").css("display", "inline");
                $("#download_id").attr("value", id);
            }
            if (res.status === 0) {
                window.location = res.data.url;
            }
        }
    );
}
function isLogin(page) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/server/user/checkinfo',
        success: function (res) {
            if (res.status === 0) {
                window.location = page;
            } else {
                window.location.href = '/login.html';

            }
        },
        error: function () {
            window.location.href = '/login.html';
        }
    });

}