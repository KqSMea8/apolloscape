$(document).ready(function () {
});

setTimeout(function () {
    initHtml();
}, 100);

function initHtml() {
    if ($('.done_load').length > 0) {
        showHtml();
    }
    else {
        setTimeout(function () {
            initHtml();
        } ,100);
    }
}

function showHtml() {
    var arr = get_arr();
    insert_html(arr);
    bind_function();
}

function get_arr() {
    var arrCn = {
        'banner': [
            {
                'title': '场景解析',
                'brief': [
                    '整个数据集将包含逐像素标注的高分辨率图像序列，以及场景语义分割级别的稠密3D Point的RGB视频',
                ],
                'operation': {
                    'submit_assessment': '提交评估',
                    'benchmark': 'benchmark'
                }
            }
        ],
        'menu': [
            {
                'word': 'Evaluation Tasks',
                'id': 'to_intro',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': 'Submission Policy',
                'id': 'to_category',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': 'Create Submission',
                'id': 'to_define',
                'classes': 'menu-1 to_btn'
            }
        ],
        'protocol': [
            {
                'type': 'div',
                'attr': 'class="title"',
                'word': '<span>ApolloScape Submission Policy</span><a id="close_protocol" class="fr"></a>'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="protocol_text"',
                'word': [
                    '<p>Only one account is allowed for members from the same group or institution. For each task, only one submission is allowed within two days and up to six submissions within a month. You will choose to set the privacy of your submission (public or private). By default, your submission will be categorized as private.</p>',
                ],
            }
        ]
    };

    var arrEn = {
        'banner': [
            {
                'title': 'Scene Parsing',
                'brief': [
                    'The whole dataset will include RGB videos',
                    'with high resolution image sequences and per pixel annotation, survey-grade dense 3D points with semantic segmentation.',
                                ],
                'operation': {
                    'submit_assessment': '提交评估',
                    'benchmark': 'benchmark'
                }
            }
        ],
        'menu': [
            {
                'word': 'Evaluation Tasks',
                'id': 'to_intro',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': 'Submission Policy',
                'id': 'to_category',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': 'Create Submission',
                'id': 'to_define',
                'classes': 'menu-1 to_btn'
            }
        ],
        'protocol': [
            {
                'type': 'div',
                'attr': 'class="title"',
                'word': '<span>Developer Agreementxieyi</span><a id="close_protocol" class="fr"></a>'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="protocol_text"',
                'word': [
                    '<p>Only one account is allowed for members from the same group or institution. For each task, only one submission is allowed within two days and up to six submissions within a month. You will choose to set the privacy of your submission (public or private). By default, your submission will be categorized as private.</p>',
                ],
            }
        ]
    };

    if ($.cookie('use_lang') == 'en') {
        var arr = arrEn;
    } else {
        var arr = arrCn;
    }
    return arr;
}

function insert_html(arr) {
    var html = '';
    $.each(arr.banner, function (index, ele) {
        html += '<div class="main banner-inner tl">';
        html += '<p class="ban-title-one">' + ele.title+ '</p>';
        html += '<div class="ban-brief">';
        $.each(ele.brief, function (i, b) {
            html += '<p>' + b + '</p>';
        });
        html += '</div>';
        html += '<div class="ban-operation"><a class="button" href="submit_assessment.html">'
        + ele.operation.submit_assessment + '</a> &nbsp;&nbsp; <a class="button" href="benchmark.html">'
        + ele.operation.benchmark + '</a></div>';
        html += '<p class="ban-brief-hr"  id="to_intro_href"></p>';
        html += '</div>';
    });
    $('#banner-container').html(html);

    Vue.use(VueI18n);
    var messages = {
        cn: {
            upload: {
                button: '上传文件',
                upload_speed: '上传速度',
                upload_left_time: '剩余时间',
                upload_failed: '上传失败',
                upload_error: '文件格式错误',
                upload_size_error: '文件大小错误',
            },
            "text0": "Evaluation Tasks",
            "text1": "Submission Policy",
            "text2": "Create Submission",
            "text3": "Evaluation Tasks",
            "text4": "Given 3D annotations, 2D pixel and instance-level annotations, background depth maps, camera pose information, a number of tasks could be defined. In current release, we mainly focus on the 2D image parsing task. We would like to add more tasks in near future.",
            "text5": "Currently, we would like to focus on two tasks:",
            "text6": "1) pixel-level semantic segmentation for street views (lane markings are not included)",
            "text7": "2) pixel-level semantic segmentation for lane markings.",
            "text8": "Submission Policy",
            "text9": "Only one account is allowed for members from the same group or institution. For each task, only one submission is allowed within two days and up to six submissions within a month. You will choose to set the privacy of your submission (public or private). By default, your submission will be categorized as private.",
            "text10": "Create Submission",
            "text11": "Please fill out this form to upload your submission. The * fields are required.All other fields are optional and can be left empty. You can edit all fields later on. Note that your submission is kept private until you choose to publish its details and performances.",
            "text12": "Task",
            "text13": "*",
            "text14": "pixel-level semantic segmentation for street views",
            "text15": "pixel-level semantic segmentation for lane markings",
            "text16": "Method",
            "text17": "*",
            "text18": "Reference operation",
            "text19": "Provide comparable reference information, including the configuration of the environment in which Method is run, and the running time in this environment configuration",
            "text20": "Publication page",
            "text21": "Complete your information Publication of your research.",
            "text22": "Project page",
            "text23": "Link to your code/project page, For example, github",
            "text24": "Mechanism",
            "text25": "Completed certification will default to the certification body, and show LOGO, can not fill in this item.",
            "text26": "Upload",
            "text27": "Requirements",
            "text28": "1. Single zip file",
            "text29": "2. Class IDs should be used, not train IDs.",
            "text30": "3. A file list for predicted label maps must be provided where each row contains the location for one predicted label map. The name of the label map should be the same as the image name except the label map format is “png”. For example, a file list could be in the following format,",
            "text31": "road03_ins/Label/Record025/Camera 5/171206_033006037_Camera_5.png",
            "text32": "road03_ins/Label/Record025/Camera 6/171206_033006037_Camera_6.png",
            "text33": "road03_ins/Label/Record025/Camera 5/171206_033006181_Camera_5.png",
            "text34": "…",
            "text35": "The sub folders for label maps could be in arbitrary.",
            "text36": "4. Only one predicted label map is allowed for each test RGB image. The label map and test RGB image should have the same resolution.",
            "text37": "上传文件",
            "text38": "文件格式错误",
            "text39": "Submit",
            "text40": "Click sumit, you agree",
            "text41": ", and agree that your Method evaluated by our servers.",
            "text42": "ApolloScape Submission Policy",
            "text43": "Publish its details and performances.",
            "text44": "Submit",
            "text45": "The Task and Method is required.",
            "text46": "method name (mandatory)",
            "text47": "method description, details",
            "text48": "system setup (CPU type, GPU type, ...)",
            "text49": "subsampling factor at test time(in seconds)",
            "text50": "inference time per image (in seconds)",
            "text51": "publication title",
            "text52": "publication authors (Differentiate people by ';')",
            "text53": "publication venue",
            "text54": "publication link",
            "text55": "code/project page",
            "text56": "Mechanism"
        },
        en: {
            upload: {
                button: 'Uplaod File',
                upload_speed: 'Upload Speed ',
                upload_left_time: 'Left Time',
                upload_failed: 'Upload Failed',
                upload_error: 'File Format Error',
                upload_size_error: 'File Size Error'
            },
            "text0": "Evaluation Tasks",
            "text1": "Submission Policy",
            "text2": "Create Submission",
            "text3": "Evaluation Tasks",
            "text4": "Given 3D annotations, 2D pixel and instance-level annotations, background depth maps, camera pose information, a number of tasks could be defined. In current release, we mainly focus on the 2D image parsing task. We would like to add more tasks in near future.",
            "text5": "Currently, we would like to focus on two tasks:",
            "text6": "1) pixel-level semantic segmentation for street views (lane markings are not included)",
            "text7": "2) pixel-level semantic segmentation for lane markings.",
            "text8": "Submission Policy",
            "text9": "Only one account is allowed for members from the same group or institution. For each task, only one submission is allowed within two days and up to six submissions within a month. You will choose to set the privacy of your submission (public or private). By default, your submission will be categorized as private.",
            "text10": "Create Submission",
            "text11": "Please fill out this form to upload your submission. The * fields are required.All other fields are optional and can be left empty. You can edit all fields later on. Note that your submission is kept private until you choose to publish its details and performances.",
            "text12": "Task",
            "text13": "*",
            "text14": "pixel-level semantic segmentation for street views",
            "text15": "pixel-level semantic segmentation for lane markings",
            "text16": "Method",
            "text17": "*",
            "text18": "Reference operation",
            "text19": "Provide comparable reference information, including the configuration of the environment in which Method is run, and the running time in this environment configuration",
            "text20": "Publication page",
            "text21": "Complete your information Publication of your research.",
            "text22": "Project page",
            "text23": "Link to your code/project page, For example, github",
            "text24": "Mechanism",
            "text25": "Completed certification will default to the certification body, and show LOGO, can not fill in this item.",
            "text26": "Upload",
            "text27": "Requirements",
            "text28": "1. Single zip file",
            "text29": "2. Class IDs should be used, not train IDs.",
            "text30": "3. A file list for predicted label maps must be provided where each row contains the location for one predicted label map. The name of the label map should be the same as the image name except the label map format is “png”. For example, a file list could be in the following format,",
            "text31": "road03_ins/Label/Record025/Camera 5/171206_033006037_Camera_5.png",
            "text32": "road03_ins/Label/Record025/Camera 6/171206_033006037_Camera_6.png",
            "text33": "road03_ins/Label/Record025/Camera 5/171206_033006181_Camera_5.png",
            "text34": "…",
            "text35": "The sub folders for label maps could be in arbitrary.",
            "text36": "4. Only one predicted label map is allowed for each test RGB image. The label map and test RGB image should have the same resolution.",
            "text37": "上传文件",
            "text38": "文件格式错误",
            "text39": "Submit",
            "text40": "Click sumit, you agree",
            "text41": ", and agree that your Method evaluated by our servers.",
            "text42": "ApolloScape Submission Policy",
            "text43": "Publish its details and performances.",
            "text44": "Submit",
            "text45": "The Task and Method is required.",
            "text46": "method name (mandatory)",
            "text47": "method description, details",
            "text48": "system setup (CPU type, GPU type, ...)",
            "text49": "subsampling factor at test time(in seconds)",
            "text50": "inference time per image (in seconds)",
            "text51": "publication title",
            "text52": "publication authors (Differentiate people by ';')",
            "text53": "publication venue",
            "text54": "publication link",
            "text55": "code/project page",
            "text56": "Mechanism"
        }
    }
    var i18n = new VueI18n({
        locale: $.cookie('use_lang'),
        messages: messages
    })

    var app = new Vue({
        el: '#app_container',
        i18n: i18n,
        data: $.extend({
            form: {
                task_id: '',
                method_name: '',
                method_desc: '',
                sys_setup: '',
                sub_factor: '',
                infer_time: '',
                pub_title: '',
                pub_authors: '',
                pub_venue: '',
                pub_link: '',
                project_page: '',
                file_size: '',
                file_path: '',
                is_upload: '',
                is_publish: '',
                submit_allow: '',
                is_acceding: ''
            },
            isPassed: true,
            checked: false,
            rules: {
                task_id: [{
                    required: true,
                    message: '必填',
                    trigger: 'change'
                }],
                method_name: [{
                    required: true,
                    message: '必填',
                    trigger: 'change'
                }],
                method_desc: [{
                    required: true,
                    message: '必填',
                    trigger: 'change'
                }],
                checked: [{
                    validator: function (rule, value, callback) {
                        if (value) {
                            callback();
                        } else {
                            callback(new Error());
                        }
                    },
                    message: '必填',
                    trigger: 'change'
                }]
            },
            uploadConf: {
                uploadeProgress: 0,
                isShow: false,
                format: false,
                fileList: '',
                error: '',
                speed: '',
                leftTime: '',
                uploader: '',
                sizeError: false,
                fileList: '',
            },
            config: {
                bosBucket: 'roadhackers-upload',
                bosEndpoint: 'https://bj.bcebos.com',
                accept: 'zip'
            },
            dialogVisible: false
        }, arr),
        mounted: function () {
            this.getData();
            this.initUpload();
        },
        methods: {
            getData: function () {
                var self = this;
                var param = $.tool.parseUriParams();
                if (param.method_id) {
                    $.tool.ajax('/server/assess/submit/show', {method_id: param.method_id}, function (res) {
                        self.form = res.data;
                        self.form.is_acceding = self.form.is_acceding == '1';
                        if (self.form.file_path) {
                            self.uploadConf.fileList = '<li>' + decodeURIComponent(self.form.file_path) + '</li>';
                        }
                    });
                }
            },
            save: function () {
                if (!this.validate()) {
                    return;
                }
                var formData = $.extend({}, this.form);
                formData.is_acceding = formData.is_acceding ? 1 : 0;
                $.tool.ajax('/server/assess/submit/commit', formData, function (res) {
                    window.location = '/assessment_manage.html';
                }, 'post');
            },
            submit: function () {
                this.save();
            },
            validate: function () {
                var self = this;
                this.isPassed = true;
                this.$refs['formTask'].validate(function (valid) {
                    if (!valid) {
                        self.isPassed = false
                    }
                });
                this.$refs['formMethod'].validate(function (valid) {
                    if (!valid) {
                        self.isPassed = false
                    }
                });
                return this.isPassed;
            },
            openPolicy: function () {
                $(".protocol-bg").css("display", "inline");
                $(".protocol_container").css("display", "inline");
            },
            initUpload: function () {
                var self = this;
                var url = '/server/upload/upload?bos_bucket='
                + encodeURIComponent(this.config.bosBucket) + '&&bos_endpoint='
                + encodeURIComponent(this.config.bosEndpoint);
                var $button = $('#upload_button');
                var uploader = new baidubce.bos.Uploader({
                    browse_button: '#upload_button',
                    uptoken_url: url,
                    get_new_uptoken: false,
                    bos_bucket: self.config.bosBucket,
                    bos_endpoint: self.config.bosEndpoint,
                    bos_multipart_min_size: '10M',
                    max_file_size: '10Gb',
                    max_retries: 15,
                    accept: self.config.accept,
                    bos_multipart_auto_continue: true,
                    chunk_size: '4M',
                    init: {
                        FilesAdded: function (_, files) {
                            var fileType = files[0].name.split('.');
                            if (self.config.accept.indexOf(fileType[1]) > -1) {
                                self.uploadConf.format = false;
                            } else if(!self.config.accept) {
                                self.uploadConf.format = false;
                            } else {
                                self.uploadConf.format = true;
                            }
                            var size = files[0].size;
                            var maxSize =  3 * 1024 * 1024 *1024;
                            if (size > maxSize) {
                                self.uploadConf.sizeError = true;
                            } else {
                                self.uploadConf.sizeError = false;
                            }
                            self.uploadConf.error = false;
                            if (!self.uploadConf.error && !self.uploadConf.format && !self.uploadConf.sizeError) {
                                $button.addClass('ap-upload-button-disabled');
                                $button.attr('disabled', true);
                                uploader.start();
                            }
                        },
                        Key: function (_, file) {
                            var timestamp = new Date().getTime();
                            var key = timestamp + '/' + file.name;
                            return key;
                        },
                        FileUploaded: function (_, file, info) {
                            $button.attr('disabled', false);
                            $button.removeClass('ap-upload-button-disabled');
                            self.uploadConf.fileList = '<li>' + file.name + '</li>';
                            self.form.file_size = file.size;
                            self.form.file_path = info.body.location;
                        },
                        UploadProgress: function (_, file, progress, event) {
                            self.uploadConf.isShow = true;
                            self.uploadConf.uploadeProgress = parseInt(progress * 100, 10);
                        },
                        ChunkUploaded: function (_, file, result) {
                            // 分片上传的时候，单个分片上传结束
                            self.setUploadId(file.name, result.uploadId);
                        },
                        UploadResume: function (_, file, partList, event) {
                          // 断点续传生效时，调用这个函数，partList表示上次中断时，已上传完成的分块列表
                          console.log(partList);
                        },
                        UploadResumeError: function (_, file, error, event) {
                          // 尝试进行断点续传失败时，调用这个函数
                          // console.log(error);
                        },
                        NetworkSpeed: function (_, bytes, time, pendings) {
                            var speed = bytes / time;
                            var leftTime = pendings / (speed);
                            self.uploadConf.speed = self.readablizeBytes(speed * 1024);
                            self.uploadConf.leftTime = self.formatDate(leftTime);
                        },
                        Error: function (_, error, file) {
                            // 如果上传的过程中出错了，调用这个函数
                            $button.attr('disabled', false);
                            $button.removeClass('ap-upload-button-disabled');
                            self.uploadConf.error = error.message;
                            // console.log(error);
                        },
                    }
                });
            },
            readablizeBytes: function (bytes) {
            var s = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
            var e = Math.floor(Math.log(bytes) / Math.log(1024));
            return ( bytes / Math.pow(1024, Math.floor(e))).toFixed(2)
            + ' ' + s[e] + '/s';
            },
            formatDate: function (time) {
                time = time / 1000;
                var hour = format2bit(Math.floor(time / 3600));
                var minute = format2bit(Math.floor((time - hour * 3600) / 60));
                var second = format2bit(Math.round(time - hour * 3600 - minute * 60));

                return  hour + ':' + minute + ':' + second;
                function format2bit(value) {
                    value = '' + value;
                    return value.length < 2 ? '0' + value : value;
                }
            }
        }
    })

    html = '<div class="content" style="height: 200px;margin-top:150px;">';
    $.each(arr.protocol, function (index, ele) {
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
    html += '</div>';
    $("#protocol_container").html(html);
}

function bind_function() {
    $(".to_btn").bind("click", function(){
        var href_id = $(this).attr("id");
        location.href = "#" + href_id + "_href";
        window.scrollBy(0, -150);
    });
    $(".down_btn").bind("click", function() {
        var id = $(this).attr("value");
        download(id);
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
