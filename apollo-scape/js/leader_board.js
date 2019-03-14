/**
@file leaderboardjs
@author dongyebin
 */
/* eslint-disable */
$(function () {
    var typeArr = [
        {
            name: 'lane',
            func: getLane
        },
        {
            name: 'car',
            func: getCar
        },
        {
            name: 'self',
            func: getSelf
        }
    ];
    $('.head-text-small').on('click', function () {
        $('.head-text-small').removeClass('current');
        $(this).addClass('current');
        $('.schedule-wrapper').addClass('hide');
        $('#' + $(this).attr('data-type')).removeClass('hide');
        for (var i = 0; i < typeArr.length; i++) {
            var type = typeArr[i];
            if (type.name === $(this).attr('data-type')) {
                type.func();
            }
        }
    });
    $('.head-text-small')[0].click();
    function getLane() {
        $.getJSON('/server/eccv/leaderboard/?taskId=lane-segmentation', function (result) {
            var laneSegmentation = result.data['lane-segmentation'];
            $.each(laneSegmentation, function (l, lanAchievement) {
                if (lanAchievement.result) {
                    var iou = $.parseJSON(lanAchievement.result);
                    var score = iou.score;
                }
                var lanTrH = '<div class="rank-tr" id="lan-' + l + '">';
                var lanTr = null;
                if (lanAchievement.status === '3') {
                    lanTr = '<div class="rank-td rank-td-lane">' + lanAchievement.rank + '</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane">' + score + '</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.created_at + '</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.team_name + '</div>';
                }
                if (lanAchievement.status === '0' || lanAchievement.status === '2') {
                    lanTr = '<div class="rank-td rank-td-lane">-</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane">-</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.created_at + '</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.team_name + '</div>';
                }
                if (lanAchievement.status === '1') {
                    lanTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.created_at + '</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.team_name + '</div>';
                }
                var lanTrT = '</div>';

                var lanHtml = lanTrH + lanTr + lanTrT;
                $('.lane-body').html('')
                $('.lane-body').append(lanHtml);
            });
        });
    }
    function getCar() {
        $.getJSON('/server/eccv/leaderboard/?taskId=car-instance', function (result) {
            var carInstance = result.data['car-instance'];
            $.each(carInstance, function (c, carAchievement) {
                if (carAchievement.result) {
                    var iou = $.parseJSON(carAchievement.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var createdAt = carAchievement.created_at.split(' ', 1);
                var carTrH = '<div class="rank-tr" id="car-' + c + '">';
                var carTr = null;
                if (carAchievement.status === '3') {
                    carTr = '<div class="rank-td rank-td-lane-small">' + carAchievement.rank + '</div>'
                         + '<div class="rank-td rank-td-lane-large">' + carAchievement.method_name + '</div>'
                         + '<div class="rank-td rank-td-lane">' + score + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AP_c0 + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AP_c3 + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_s + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AP_m + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AP_l + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_1 + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_10 + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_100 + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_s + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_m + '</div>'
                         + '<div class="rank-td rank-td-lane">' + detail.AR_l + '</div>'
                         + '<div class="rank-td rank-td-lane-middle">' + createdAt + '</div>';
                }
                if (carAchievement.status === '2' || carAchievement.status === '0') {
                    carTr = '<div class="rank-td rank-td-lane-small">-</div>'
                        + '<div class="rank-td rank-td-lane">' + carAchievement.method_name + '</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane-large">' + createdAt + '</div>';
                }
                if (carAchievement.status === '1') {
                    carTr = '<div class="rank-td rank-td-lane-small fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane">' + carAchievement.method_name + '</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane-large">' + createdAt + '</div>';
                }
                var carTrT = '</div>';

                var carHtml = carTrH + carTr + carTrT;
                $('.car-body').html('');
                $('.car-body').append(carHtml);
            });

        });
    }
    function getSelf() {
        $.getJSON('/server/eccv/leaderboard/?taskId=self-localization', function (result) {
            var selfLocalization = result.data['self-localization'];


            $.each(selfLocalization, function (c, selfAchievement) {
                if (selfAchievement.result) {
                    var iou = $.parseJSON(selfAchievement.result);
                    var score = iou.score;
                }

                var selfTrH = '<div class="rank-tr" id="car -' + c + '">';
                var selfTr = null;
                if (selfAchievement.status === '3') {
                    selfTr = '<div class="rank-td rank-td-lane">' + selfAchievement.rank + '</div>'
                      + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>'
                      + '<div class="rank-td rank-td-lane">' + score + '</div>'
                      + '<div class="rank-td rank-td-lane">' + selfAchievement.created_at + '</div>'
                      + '<div class="rank-td rank-td-lane">' + selfAchievement.team_name + '</div>';
                }
                if (selfAchievement.status === '0 ' || selfAchievement.status === '2') {
                    selfTr = '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">' + selfAchievement.created_at + '</div>'
                           + '<div class="rank-td rank-td-lane">' + selfAchievement.team_name + '</div>';
                }
                if (selfAchievement.status === '1') {
                    selfTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + selfAchievement.created_at + '</div>'
                          + '<div class="rank-td rank-td-lane">' + selfAchievement.team_name + '</div>';
                }
                var selfTrT = '</div>';

                var selfHtml = selfTrH + selfTr + selfTrT;
                $('.self-body').html('');
                $('.self-body').append(selfHtml);
            });


        });
    }

});
