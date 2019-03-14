$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 500) {
            $('.menu.fl ul').addClass('menu-top');
        } else {
            $('.menu.fl ul').removeClass('menu-top');
        }
    });
});
setTimeout(function () {
    initHtml();
}, 420);

function initHtml() {
    if ($('.done_load').length > 0) {
        showHtml();
    }
    else {
        setTimeout(function () {
            initHtml();
        } ,400);
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
                'word': '1· 数据集介绍',
                'id': 'to_intro',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '2· 数据汇总',
                'id': 'to_category',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '3· 数据集类别定义',
                'id': 'to_define',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '4· 数据示例',
                'id': 'to_general',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '5· 数据集下载',
                'id': 'to_down',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '6· 数据集结构',
                'id': 'to_structure',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '7· 评估任务',
                'id': 'to_standard',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '8· 引用',
                'id': 'to_public',
                'classes': 'menu-1 to_btn'
            },
        ],
        'content' : [
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_data_href"',
                'word': '1 · 数据集介绍'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt20"  id="to_collection_href"',
                'word': '我们的场景解析是旨在为图像中的每个像素/点云标注语义（类）标签，创建最全面的2D/3D场景分析。鉴于自动驾驶技术的兴起，预计环境感知将是支持自动驾驶的关键技术。百度提供的ApolloScape数据集将包括具有高分辨率图像和像素级别标注的RGB视频，具有场景级语义分割的密集三维点云、基于双目立体视觉的视频和全景图像。'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt20"  id="to_collection_href"',
                'word': '我们提供了一辆配备了高分辨率相机和Riegl采集系统的中型SUV进行数据采集，我们的数据集包含不同城市的不同交通状况的道路行驶数据，平均每张图中移动障碍物（如车辆和行人）的数量从几十到上百不等。此外，每张图像都包含了厘米精度范围的高精度姿态信息以及，具有毫米相对精度的静态环境点云。我们希望我们提供的新数据集可以让自动驾驶相关的应用都有所受益，包括但是不限于2D/3D场景解析、定位、迁移学习和驾驶仿真。 '
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 demo"',
                'word': '<video width="554" height="561" controls="controls" autoplay="autoplay" loop="loop"><source src="' + 'http://ad-apolloscape.bj.bcebos.com/video%2Fvideo_demo.webm' + '"  type="video/mp4">您的浏览器不支持video标签</video>'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_category_href"',
                'word': '2 · 数据汇总'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '数据集中提供的图像为通过我们的采集系统每米采集一帧的方式采集，分辨率为3384 x 2710。预计2018年数据集将完整发布包含20万帧的图像数据，包含对应的像素级标注和姿态信息。数据集的一部分还提供了实例级别的标注，我们还将提供对应的静态背景深度图像。'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '截止到2018年3月8日，我们第一次发布了包含74555帧视频图像序列及对应的逐像素标注和姿态文件。2018年3月21日，我们更新了数据集的第二部分，提供了Road01_ins和Road02_ins的43,592帧静态背景深度图像。2018年4月3日，我们完成了数据集的第二部分更新，开放数据集累计提供146,997帧图像数据，包含像素级标注和姿态信息，以及对应静态背景深度图像下载。'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '该数据集会划分为3个子集：训练集、验证集和测试集，其中测试集不提供用于测试图像的语义标注。因此测试及中的图像所有像素都会标注为255。包含训练、验证和测试集的图像列表文件将尽快提供。'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_define_href"',
                'word': '3 · 数据集类别定义'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '其中我们标注了5组涵盖了25个不同语义项的标签，下表提供了这些标签的详细信息。其中给每个像素都分配了2个ID，Class ID和Train ID。Train ID是用于训练的ID，可以根据需要进行修改。值255表示为现阶段未评估的标签，可以暂时忽略。ClassID是用于表示真实标注的ID，包含颜色分配的更多细节可以在<a href="http://ad-apolloscape.bj.bcebos.com/public%2Futilities.tar.gz">utilities.tar.gz</a>中的label_apollo.py文件中查看，并且，在提交评测的阶段，请确保使用的为ClassID.'
            },
            {
                'type': 'table',
                'attr': 'class="mt10"',
                'word':[
                    '<tr><td>category</td><td>Class</td><td>Class ID</td><td>train ID</td><td>Description</td></tr>',
                    '<tr><td>Others</td><td>others</td><td>0</td><td>255</td><td></td></tr>',
                    '<tr><td></td><td>rover</td><td>1</td><td>255</td><td></td></tr>',
                    '<tr><td>Sky</td><td>sky</td><td>17</td><td>0</td><td></td></tr>',
                    '<tr><td>movable object</td><td>car</td><td>33</td><td>1</td><td></td></tr>',
                    '<tr><td></td><td>car_groups</td><td>161</td><td>1</td><td></td></tr>',
                    '<tr><td></td><td>motorbicycle</td><td>34</td><td>2</td><td></td></tr>',
                    '<tr><td></td><td>motorbicycle_group</td><td>162</td><td>2</td><td></td></tr>',
                    '<tr><td></td><td>bicycle</td><td>35</td><td>3</td><td></td></tr>',
                    '<tr><td></td><td>bicycle_group</td><td>163</td><td>3</td><td></td></tr>',
                    '<tr><td></td><td>person</td><td>36</td><td>4</td><td></td></tr>',
                    '<tr><td></td><td>person_group</td><td>164</td><td>4</td><td></td></tr>',
                    '<tr><td></td><td>rider</td><td>37</td><td>5</td><td>在自行车、摩托车、三轮车上的人</td></tr>',
                    '<tr><td></td><td>rider_group</td><td>165</td><td>5</td><td>在自行车、摩托车、三轮车上的人</td></tr>',
                    '<tr><td></td><td>truck</td><td>38</td><td>6</td><td></td></tr>',
                    '<tr><td></td><td>truck_group</td><td>166</td><td>6</td><td></td></tr>',
                    '<tr><td></td><td>bus</td><td>39</td><td>7</td><td></td></tr>',
                    '<tr><td></td><td>bus_group</td><td>167</td><td>7</td><td></td></tr>',
                    '<tr><td></td><td>tricycle</td><td>40</td><td>8</td><td>三轮汽车、摩托、或人力车</td></tr>',
                    '<tr><td></td><td>tricycle_group</td><td>168</td><td>8</td><td>三轮汽车、摩托、或人力车</td></tr>',
                    '<tr><td>flat</td><td>road</td><td>49</td><td>9</td><td></td></tr>',
                    '<tr><td></td><td>siderwalk</td><td>50</td><td>10</td><td></td></tr>',
                    '<tr><td>Road obstacles</td><td>traffic_cone</td><td>65</td><td>11</td><td>可移动的锥形障碍物</td></tr>',
                    '<tr><td></td><td>road_pile</td><td>66</td><td>12</td><td>固定的有许多不同形状的障碍物</td></tr>',
                    '<tr><td></td><td>fence</td><td>67</td><td>13</td><td></td></tr>',
                    '<tr><td>Roadside objects</td><td>traffic_light</td><td>81</td><td>14</td><td></td></tr>',
                    '<tr><td>void</td><td>pole</td><td>82</td><td>15</td><td></td></tr>',
                    '<tr><td></td><td>traffic_sign</td><td>83</td><td>16</td><td></td></tr>',
                    '<tr><td></td><td>wall</td><td>84</td><td>17</td><td></td></tr>',
                    '<tr><td></td><td>dustbin</td><td>85</td><td>18</td><td></td></tr>',
                    '<tr><td></td><td>billboard</td><td>86</td><td>19</td><td></td></tr>',
                    '<tr><td>Building</td><td>building</td><td>97</td><td>20</td><td></td></tr>',
                    '<tr><td></td><td>bridge</td><td>98</td><td>255</td><td></td></tr>',
                    '<tr><td></td><td>tunnel</td><td>99</td><td>255</td><td></td></tr>',
                    '<tr><td></td><td>overpass</td><td>100</td><td>255</td><td></td></tr>',
                    '<tr><td>Natural</td><td>vegatation</td><td>113</td><td>21</td><td></td></tr>',
                    '<tr><td>Unlabeled</td><td>unlabeled</td><td>255</td><td>255</td><td>其他未标注的物体</td></tr>',
                ]
            },
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_general_href"',
                'word': '4 · 数据示例'
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '标注图像'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_1.jpg') + '" class="demo-1">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_2.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_3.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_4.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="clearfix"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '深度图像'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_1.jpg') + '" class="demo-1">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_2.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_3.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_4.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="clearfix"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt60 title-1" id="to_down_href"',
                'word': '5 · 数据集下载'
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '实例级/像素级 标注数据'
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': '_ins表示数据包含像素级别和实例级别标签，_seg表示数据仅包含像素级别标签。'
            },
            {
                'type': 'div',
                'attr': 'class="down_list mt20 clearfix" id="to_submit_href"',
                'word': [
                    '<a class="down_btn fl mr10" value="road01_ins">road01_ins.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_ins">road02_ins.tar.gz</a>',
                    '<a class="down_btn fl" value="road03_ins">road03_ins.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_ins">road04_ins.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_seg">road02_seg.tar.gz</a>',
                    '<a class="down_btn fl" value="road03_seg">road03_seg.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_seg">road04_seg.tar.gz</a>',

                ],
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '像素级标注 车道线数据'
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': '在现有的开放数据集中标注了28种不同的车道线标记，详细标注信息参考我们的论文：<a href="http://ad-apolloscape.bj.bcebos.com/public%2FApolloScape%20Dataset.pdf">The ApolloScape Dataset for Autonomous Driving</a>'
            },
            {
                'type': 'div',
                'attr': 'class="down_list mt20 clearfix" id="to_submit_href"',
                'word': [
                    '<a class="down_btn fl mr10" value="road02_ins_lane">road02_ins_lane.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road03_ins_lane">road03_ins_lane.tar.gz</a>',

                ],
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '深度图像数据'
            },
            {
                'type': 'div',
                'attr': 'class="down_list mt20 clearfix" id="to_submit_href"',
                'word': [
                    '<a class="down_btn fl mr10" value="road01_ins_depth">road01_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_ins_depth">road02_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl " value="road03_ins_depth">road03_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_ins_depth">road04_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_seg_depth">road02_seg_depth.tar.gz</a>',
                    '<a class="down_btn fl " value="road03_seg_depth">road03_seg_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_seg_depth">road04_seg_depth.tar.gz</a>',
                ],
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': '注意：所有图像只能用于个人或组织的教育用途。商业用途或其他违反版权法的行为是不允许的。'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '图像列表'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': '上传了用于训练、验证和测试的图像列表<a href="http://ad-apolloscape.bj.bcebos.com/public%2Fimage_lists.tar.gz">Image lists</a>，暂时包括 road01_ins, road02_ins, and road03_ins 三段数据。 '
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt50 title-1"  id="to_structure_href"',
                'word': '6 · 数据集结构'
            },
            {
                'type': 'p',
                'attr': 'class="mt40 title-2"',
                'word': '数据集目录结构'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"  id="to_requirements_href"',
                'word': '{root} / {type} / {road id} _ {level} / {record id} / {camera id} / {timestamp} _ {camera id} {ext}'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'root: 用户定义的根文件夹.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'type: 当前版本中有三种数据类型，即ColorImage，Label和Pose.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'road id: 道路ID，例如road001，road002.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'level: seg表示标签仅包含像素级别标签，ins表示标签包含像素级别和实例级别标签.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'record id: 记录是例如Record001，Record002。每个记录包含多达几千个图像.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'camera id: 采集系统所使用的两个前置相机，即相机5和相机6.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1" id="to_demo_href"',
                'word': 'timestamp: 图像名称的第一部分.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'camera id: 图像名称的第二部分.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'ext: 文件的扩展名。彩色图像为.jpg，标签图像为_bin.png，实例级标签的多边形列表为.json，实例级标签为_instanceIds.png。'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '每个相机和每个记录只有一个姿态文件（即pose.txt）。该姿态文件包含相应摄像机和记录的所有图像的所有外部参数。姿态文件中每行的格式如下所示：'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'r00 r01 r02 t0 r10 r11 r12 t1 r20 r21 r22 t2 0 0 0 1 image_name'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '其中相机已经做了准确的校准和去畸变，详细的内参可以在<a href="http://ad-apolloscape.bj.bcebos.com/public%2Futilities.tar.gz">utilities.tar.gz</a>中的camera_intrinsics.txt中找到.'
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': '深度图像格式:'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '在深度图像中，深度值保存为unsigned short int格式。 它可以在OpenCV中读取，如下所示：'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'cv::Mat depth_u16 = cv::imread ( depth_path, CV_LOAD_IMAGE_ANYDEPTH); '
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '绝对深度值获取方式'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'double depth_value = depth_u16.at<ushort>(row, col) / 200.00;'
            },
            {
                'type': 'p',
                'attr': 'class="mt50 title-1" id="to_standard_href"',
                'word': '7 · 评估任务'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"  id="to_requirements_href"',
                'word': '基于所提供的三维标注、二维像素级实例级别的标注、深度图像、相机姿态信息等，我们可以定义不少相关的任务。在当前版本中，我们主要关注2D图像场景解析任务，我们希望在不久的将来能够增加更多的任务。'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': '我们为图像解析和视频解析提供了三个评估指标，有关评估指标的更多细节可以在我们的论文中找到。同时，我们正在组织<a href="https://arxiv.org/abs/1803.06184">2018 CVPR 自动驾驶研讨会</a>，更多细节将于近期公布。'
            },
            {
                'type': 'p',
                'attr': 'class="mt50 title-1" id="to_public_href"',
                'word': '8 · 引用'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': '如果我们的数据集对您的研究有用，请在您的发表作品中引用我们的论文。<br>Xinyu Huang, Xinjing Cheng, Qichuan Geng, Binbin Cao, Dingfu Zhou, Peng Wang, Yuanqing Lin, and Ruigang Yang, <a href="https://arxiv.org/abs/1803.06184">The ApolloScape Dataset for Autonomous Driving</a>, arXiv: 1803.06184, 2018<br><a href="http://ad-apolloscape.bj.bcebos.com/public%2FApolloScape%20Dataset.pdf">[PDF]</a> &nbsp <a href="http://ad-apolloscape.bj.bcebos.com/public%2FBibTex.txt">[BibTex]</a>'
            },
        ],
        'protocol': [
            {
                'type': 'div',
                'attr': 'class="title"',
                'word': '<span>开发者协议</span><a id="close_protocol" class="fr"></a>'
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
                    '<p>本《开发者协议》（“本协议”）适用于您（“开发者”）对百度及其关联方（“我方”）网站、产品、服务、应用及开放存取数据集（合称“服务”）的访问及使用。请仔细阅读本协议，若开发者对本协议有任何疑问，请与我方联系。若开发者采取任何方式访问或使用服务，则表示开发者同意受本协议约束：</p>',
                    '<p>This Developer Agreement (this “Agreement”) governs your (“Developer”) access to and use of the websites, products, services, applications and open-access data sets (collectively, the “Service”) of Baidu and its affiliates (“we,” “us” or “ours”). Please read this Agreement carefully, and contact us if the Developer has any questions regarding this Agreement. Any access to or use of the Services indicates that the Developer agrees to be bound by this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1 开发者的一般义务</p>',
                    '<p>1 General Obligations of the Develope</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.1 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.1 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.2 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.2 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.3 如我方对开发者使用的部分服务（或使用服务所涉及到的由其他数据平台提供的服务）有额外要求的，开发者应同时遵守上述所有要求或在达到上述要求后方可使用该等服务。</p>',
                    '<p>1.3 If we have additional requirements regarding certain parts of the Service (or any other digital platform services which are involved during use of the Service), the Developer may use such services only if he/she complies with all such additional requirements.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.4 经我方不时要求，开发者应当向我方提供身份信息、文件、资料、信息、源代码等（“开发者信息”）。开发者应当保证开发者信息真实、有效、合法，且不侵犯任何第三方的权利，且开发者对其拥有合法、有效、完整的知识产权或所有权。我方保留委托第三方机构调查开发者信息的权利，如果开发者信息存在失实或违法等情况，我方有权立即终止本协议并禁止开发者访问或使用服务。</p>',
                    '<p>1.4 Upon our request from time to time, the Developer shall provide us with his/her identity information, documents, materials, information, and source code (“Developer Information”). The Developer shall ensure the Developer Information is true, valid and lawful and does not infringe any rights of any third parties and the Developer owns lawful, valid and complete intellectual property rights in or title to the Developer Information. We reserve the right to appoint a third-party agent to investigate the Developer Information. If the Developer Information is found to be untrue or illegal, we are entitled to terminate this Agreement and prohibit the Developer from accessing or using the Service.</p>',
                    '<p>1.5 开发者在访问或使用服务过程中不得以任何方式：</p>',
                    '<p>1.5 When accessing or using the Service, the Developer shall not in any manner:</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.1 侵犯或违反任何人（包括我方）的知识产权或其他权利</p>',
                    '<p>1.5.1 Infringe or violate the intellectual property rights or any other rights of any parties (including ours);</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.2 从事任何具有有害、欺诈、欺骗、威胁、骚扰、诽谤，淫秽性质的活动；</p>',
                    '<p>1.5.2 Engage in any activities which are harmful, fraudulent, deceptive, threatening, harassing, defamatory or obscene;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.3 未经我方书面允许，采取爬虫或其他方式获取任何与服务中或与服务相关的页面、数据或信息（无论采取人工方式或自动方式）；</p>',
                    '<p>1.5.3 “Crawl”, “scrape” or “spider” any page, data, or information of or relating to the Service (through use of manual or automated means), without our written consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.4 使用反编译、反向工程等方式试图获取服务中或与服务相关的源代码、基本理念或信息；或</p>',
                    '<p>1.5.4 Decompile, reverse engineer, or otherwise attempt to obtain the source code or underlying ideas or information of or relating to the Service; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>2 数据集下载</p>',
                    '<p>2 Dataset Downloads</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1 在开发者访问或使用服务期间，我方会酌情授权开发者访问、使用、下载一定数据集（“数据集”）。</p>',
                    '<p>2.1 During the Developer’s access to or use of the Service, we will authorize the Developer to use and download certain data sets (“Datasets”) at our sole discretion.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.2 开发者仅有权出于非商业研究或教学目的使用数据集，不得出于任何商业目的使用数据集。</p>',
                    '<p>2.2 The Developer is entitled to use the Datasets only for the purposes of non-commercial research or teaching and shall not use the Datasets for any commercial purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.3 我方对数据集中的内容，例如图片、视频、音频、文字等不享有任何知识产权，也不就上述内容做出任何保证，该等保证包括但不限于：保证不侵犯任何知识产权权利、保证有权出于任何目的使用上述内容。</p>',
                    '<p>2.3 We do not enjoy any intellectual property rights to content in the Datasets, such as pictures, videos, audio recordings, or text, nor do we make any warranties as to such content, including but not limited to a warranty of non-infringement of other’s intellectual property rights or a warranty of entitlement to use such content for any specific purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.4 在任何时候，我方均有权取消或终止授权开发者使用数据集，并有权要求开发者删除数据集。</p>',
                    '<p>2.4 We shall be entitled to cancel or terminate the authorization granted to the Developer for use of the Datasets at any time and have the right to request the Developer to delete the Datasets.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3 隐私政策 </p>',
                    '<p>3 Privacy Policy</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1 开发者同意并允许我方通过任何线上线下方式，出于服务的目的调查、获取和收集开发者的个人数据。开发者的个人数据包括：</p>',
                    '<p>3.1 The Developer agrees and permits us to investigate, acquire and collect the Developer’s personal data for purposes of the Service, by any online or offline means. The Developer’s personal data shall include:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.1 开发者在访问或使用服务时，向我方提供的相关个人信息，包括但不限于：姓名、性别、出生日期、个人资料照片、身份证号、护照号、地址、电子邮件、社交账号、电话号码、身份验证信息或位置信息等；</p>',
                    '<p>3.1.1 Personal information that the Developer provides to us when accessing or using the Service, including but not limited to his/her name, gender, date of birth, personal photo, ID number or passport number, address, telephone number, e-mail address, social media account, identity authentication information, location information, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.2 开发者通过服务向其他方提供的共享信息，以及开发者通过服务时所储存的信息；</p>',
                    '<p>3.1.2 Shared information that the Developer provides to other parties through the Service and the information that the Developer saves via the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.3 其他方分享的开发者的信息以及其他方访问或使用服务时所提供的有关开发者的共享信息；和</p>',
                    '<p>3.1.3 The Developer’s information that is shared by other parties and shared information related to the Developer which other parties provide when accessing or using the Service; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.4 开发者访问或使用服务时，我方系统通过Cookies、Web Beacon或其他方式自动采集的技术信息。</p>',
                    '<p>3.1.4 The technological information automatically collected by the system via cookies, web beacons, or other means when the Developer accesses or uses the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2 开发者进一步同意，我方有权在全球范围内、永久、无偿出于以下目的使用开发者个人数据：</p>',
                    '<p>3.2 The Developer further agrees that we are entitled to use the Developer’s personal data globally, permanently and free of royalties for the following purposes:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.1 为开发者提供个性化服务；</p>',
                    '<p>3.2.1 Providing personalized services to the Developer;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.2 向开发者发送可能感兴趣的产品和服务的信息；邀请开发者参与我方的活动和市场调查；或向开发者发送营销信息。如果开发者不想接收此类信息，则可经书面通知我方进行退订；和</p>',
                    '<p>3.2.2 Sending the Developer product and service information in which the Developer may be interested; inviting the Developer to participate in our activities or market surveys; or send the Developer marketing information. If the Developer does not wish to receive such information, the Developer may unsubscribe by sending us written notice; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.3 开展内部审计、数据分析和研究，改善我方的服务及开发者之间的沟通。</p>',
                    '<p>3.2.3 Conducting internal audits, data analyses and research in order to improve our services and communications with the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3 除下列情形外，我方将不公开或向第三方提供开发者的个人数据：</p>',
                    '<p>3.3 Except under the following circumstances, we will not publish the Developer’s personal data or disclose it to any third parties:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.1 开发者同意披露或提供；</p>',
                    '<p>3.3.1 The Developer agrees to disclose or provide it;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.2 开发者根据服务的规则同意披露或提供；</p>',
                    '<p>3.3.2 The Developer agrees to disclose or provide it under rules with respect to the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.3 开发者与第三方已经签订的协议要求我方披露或提供；或</p>',
                    '<p>3.3.3 Any agreements executed between the Developer and any third parties require us to disclose or provide it; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.4 法律法规、国家机关依法要求披露或提供。</p>',
                    '<p>3.3.4 Its disclosure or provision is required by laws or regulations or governmental agencies.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.4 为确保我方网站的正常运转，我方不时会在计算机或移动设备上存储名为Cookies的小数据文件。Cookies是一种网络服务器存储在计算机或移动设备上的纯文本文件。Cookies的内容只能由创建它的服务器检索或读取。每个Cookies对开发者的网络浏览器或移动应用程序都是唯一的。Cookies通常包含标识符、站点名称以及一些号码和字符。借助于Cookies，网站能够存储开发者偏好等数据。我方不会将Cookies用于本协议所述目的之外的任何用途。开发者可根据自己的偏好管理或删除Cookies。</p>',
                    '<p>3.4 In order to ensure our website’s normal operation, we will from time to time store small data files called cookies on computers or mobile devices. cookies are a type of plain text file that network servers store on computers or mobile devices. The content of cookies can only be retrieved or read by the servers creating such cookies. Each cookie is unique to the Developer’s web browser or mobile application. Cookies generally contain identifiers, site names, and some numbers and characters. With the help of cookies, websites are able to save user preference data and other data. We will not use cookies for any purposes other than those described in this Agreement. The Developer may manage or delete cookies based on his/her preferences.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4知识产权 </p>',
                    '<p>4 Intellectual Property</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1 除本协议另有约定外，我方对服务中所提供的所有信息（包括但不限于图片、视频、数据、代码等）享有合法所有权利，开发者对此不享有任何权利。未经我方书面明示同意，开发者不得使用、修改、复制、公开传播、发行或以其他任何方式利用前述信息。</p>',
                    '<p>4.1Unless otherwise provided in this Agreement, we own all legal rights to the information (including but not limited to pictures, videos, data and codes) provided by us in connection with the Service and the Developer shall not have any rights to such information. Without our express written consent, the Developer shall not use, modify, copy, disseminate distribute such information or utilize it in any manner.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2 除我方与开发者另有约定外，开发者通过服务独立开发的成果（包括但不限于算法、源代码、数据、设计方案、论文等，合称“成果”）及相应的知识产权，归开发者所有。但产生该等成果所依附或使用的图片、视频、数据等（以下简称“基础数据”），如属于我方提供，则该等基础数据的所有权利并不因提供行为发生转移。开发者如在使用该等成果过程中使用了我方享有知识产权或其他合法权利的基础数据，应向我方支付使用费用，费用的数额及支付方式由我方与开发者另行约定。</p>',
                    '<p>4.2 Unless otherwise agreed by us and the Developer, the results (including but not limited to algorithms, source codes, data, design plans, and papers, collectively referred to as “Results”) independently generated by the Developer via the Service and the corresponding intellectual property rights shall belong to the Developer. Nonetheless, no rights to the images, videos, or data provided by us and utilized by the Developer in generating the Results (“Underlying Data”) shall be transferred due to our provision of such Underlying Data. If the Developer uses any Underlying Data in which we own intellectual property rights or other legal rights when using the Results, then the Developer shall pay us royalties. The amount and the payment method of the royalties shall be agreed between us and the Developer separately.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3 开发者同意授予我方在全球范围内、无限期、不受限制的免费使用前款成果的权利，包括但不限于用于服务提供、进一步开发服务、用于商业用途及分许可他人使用。为免歧义，基于上述成果使用所产生的新成果，我方享有完整的知识产权，开发者同意对新成果不主张任何权益，包括但不限于所有权、以及基于对上述成果享有的所有权而阻碍新成果的实施等。</p>',
                    '<p>4.3 The Developer agrees to grant us a global, permanent, unlimited and royalty-free right to use the above Results, including but not limited to use of such Results for the purpose of providing the Service, developing the Service, conducting commercial activities and sub-licensing to others for use. For avoidance of doubt, we shall have complete intellectual property rights in any new results generated by us by using the Results, and the Developer shall not claim any rights or interests in such new results, including but not limited to ownership and the right to obstruct the implementation of any other rights based on such new results.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5 知识产权争议报告 </p>',
                    '<p>5 Intellectual Property Dispute Reports</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1 若开发者或任何知识产权权利人认为服务中或通过服务获取的材料或内容侵犯其（或其被授权代表的主体）的知识产权，则请将包含下述信息的通知发送至okai@baidu.com：</p>',
                    '<p>5.1 If the Developer or any owner of intellectual property rights believes that material or content residing on or accessible through the Service infringes his/her intellectual property rights (or the intellectual property rights of any parties whom he/she are authorized to act on behalf of), please send a notice of copyright infringement containing the following information to okai@baidu.com</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.1 被侵权知识产权权利人授权代表的信息，包括名称、电话号码和邮箱地址；</p>',
                    '<p>5.1.1 Information regarding a person authorized to act on behalf of the owner of the intellectual property rights being infringed, including name, address, telephone number and email address;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.2 被侵权作品或材料的信息；</p>',
                    '<p>5.1.2 Information regarding works or materials being infringed upon;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.3 被控侵权作品或材料的信息，若知识产权权利人希望从某一位置移除该等被控侵权作品或材料，则还应提供该等位置的充分信息，使我方能够找到该等被控侵权作品或材料并进行确认；和</p>',
                    '<p>5.1.3 Information regarding the works or materials that are claimed to be infringed upon, including information regarding the location of the infringing documents or materials that the intellectual property owner seeks to have removed, with sufficient detail so that we are capable of finding and verifying their existence; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.4 关于通知方善意认为被控侵权材料未经知识产权权利人、其代理人或法律授权的声明。</p>',
                    '<p>5.1.4 A statement that the notifying party has a good faith belief that the material identified is not authorized by the intellectual property rights owner, its agent, or the law.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2 在收到关于侵犯知识产权的恰当通知后，我方将保留下述权利：</p>',
                    '<p>5.2 Upon receipt of a proper notice of intellectual property rights infringement, we reserve the right to:</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.1 移除或禁止访问侵权材料；</p>',
                    '<p>5.2.1 remove or disable access to the infringing material;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.2 将我方已移除或禁止访问材料的事项，告知被控侵权的内容提供者；</p>',
                    '<p>5.2.2 notify the content provider who is accused of infringement that we have removed or disabled access to the applicable material; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.3 若被控侵权的内容提供者存在多次侵权行为，则我方将终止其访问或使用服务的权利。</p>',
                    '<p>5.2.3 terminate such content providers access to or use of the Service if he or she is a repeat offender.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6 保密义务 </p>',
                    '<p>6 Obligation of Confidentiality</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1 保密信息的范围包括我方在服务中向开发者提供的，或开发者通过服务获取的关于我方的所有非公众所知的信息，包括但不限于：</p>',
                    '<p>6.1 The scope of the confidential information includes all non-public information provided by us to the Developer during the Service, or all non-public information related to us acquired by the Developer through the Service, including but not limited to the following:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.1 我方运营数据、交易数据、技术资料、财务信息、经营渠道以及方案、软件、程序、手册等；</p>',
                    '<p>6.1.1 Our operating data, transaction data, technical information, financial information, operating channels as well as plans, software, programs and manuals, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.2 我方从第三方处获得但应承担保密责任的信息；</p>',
                    '<p>6.1.2 Information obtained by us from any third parties which we are obligated to keep confidential;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.3 任何其他机密或专有信息以及通常不为我方以外的其他方所知晓、未在公共领域被正式公开的信息。</p>',
                    '<p>6.1.3 Any other information which is unknown to any parties other than us or which is not publicly available;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2 我方及开发者认可前款所有信息为保密信息（“保密信息”），且该等信息对于我方具有重要作用和商业价值，如有泄露或不当利用将造成严重影响和经济损失。开发者同意对上述保密信息严格保密，如无法确认某些信息是否为保密信息，则开发者亦应将此类信息作为保密信息进行保护。</p>',
                    '<p>6.2 We and the Developer acknowledge that the above information is our confidential information (“Confidential Information”) and is of important functional and commercial value to us, the disclosure or improper use of which will have a serious impact and cause economic losses. The Developer agrees to keep the Confidential Information strictly confidential. If the Developer is not able to confirm whether certain information is Confidential Information, then the Developer shall treat and protect such information as Confidential Information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3 保密信息的使用及保护：</p>',
                    '<p>6.3 Use and Protection of Confidential Information:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.1 开发者应承诺按照我方的指定要求在指定区域、指定场景内使用保密信息，开发者不得以不符合我方要求的方式获取、使用保密信息，不得对保密信息进行效仿、逆向工程、反编译、试图破译源代码及潜在信息，也不得以任何形式向任何第三方泄露、传播、出售、转让、用于任何商业用途或用于获取任何商业利益等。</p>',
                    '<p>6.3.1 The Developer undertakes to use the Confidential Information in accordance with our designated requirements and within the specified area, platform and time limit as designated by us. Without our prior written consent, the Developer shall not obtain or use the Confidential Information in any way contrary to our requirements. The Developer shall not imitate, reverse engineer, decompile or attempt to decode the source code or underlying information of the Confidential Information, or disclose, distribute, sell or transfer any Confidential Information to any third party or use any Confidential Information for any commercial purposes or to obtain any commercial interests.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.2 严禁开发者利用保密信息从事任何本协议约定之外的目的；</p>',
                    '<p>6.3.2 The Developer is prohibited from using the Confidential Information for any purposes not provided under this Agreement;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.3 开发者应有意识地保护保密信息，并采取所有必要的保密措施。</p>',
                    '<p>6.3.3 The Developer shall consciously and actively protect the Confidential Information and take all necessary confidentiality measures.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.4 我方无须对保密信息的真实性、适用性、完整性和合理性承担责任，以及并未对此做出一切明确表达的或暗含的陈述和担保。我方无须因开发者对保密信息的使用行为承担任何责任。</p>',
                    '<p>6.4 We are not responsible for the correctness, compatibility, completeness or reasonableness of the Confidential Information, and disclaim any express or implied representations or warranties in respect thereof. We are not legally responsible for use of the Confidential Information by the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7 违约责任 </p>',
                    '<p>7 Liability for Breach</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.1 若开发者违反本协议任何规定，我方有权立即终止本协议并禁止开发者使用或接触服务。</p>',
                    '<p>7.1 If the Developer breaches any stipulations under this Agreement, we are entitled to immediately terminate this Agreement and prohibit Developer from using or accessing the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.2 就开发者使用我方服务而造成的任何损失、损害或法律后果，我方不承担任何责任。若开发者或其雇员或代理人错误地或误导性地使用我方服务，而对我方造成任何声誉损失或经济损失，则开发者应当就该等法律后果负责，并向我方做出赔偿。</p>',
                    '<p>7.2 We accept no liability for any losses, damages or legal consequences whatsoever caused by the Developer’s use of the Service. In the case of any incorrect or misdirected use of the Service by the Developer or his/her employees or agents that causes us a loss of reputation or economic losses, the Developer shall be liable for such legal consequences and compensation;</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.3 若开发者违反了本协议下的或任何与本协议相关的义务而直接或间接导致我方发生了任何性质的损失、损害、费用、索赔、命令、责任或开支，开发者同意向我方做出全部赔偿，未免歧义，该等赔偿包括但不限于我方为执行本条款的过程中，或由于主张本协议下责任的索赔而产生的任何费用或开支。</p>',
                    '<p>7.3 If the Developer breaches any obligations under or in connection with this Agreement and directly or indirectly causes us any losses, damages, costs, claims, orders, liabilities or expenses of any nature, then the Developer shall fully compensate us. For avoidance of doubt, such compensation shall include but be not limited to any expenses or costs which we incur from the execution of this provision or claiming liabilities under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8 协议修改 </p>',
                    '<p>8 VARIATION</p>',
                    '<p>&nbsp;</p>',
                    '<p>我方保留在任何时候修改本协议的权利。在该等情况下，我方将通过在http://apolloscape.auto发布、发送邮件和或其他方式通知开发者。若开发者不同意该等修改，则开发者有权拒绝接受，但开发者将无权继续使用服务。若对本协议做出的任何修改生效后，开发者以任何方式继续使用服务，则将视为开发者同意接受所有该等修改的约束。</p>',
                    '<p>We reserve the right to change this Agreement at any time. Under such circumstances, we will bring it to your attention by placing a notice on the http://apolloscape.auto, by sending the Developer an email, and/or by other means. If the Developer does not agree with such changes, then the Developer is free to reject them, but Developer will no longer be able to use the Service. If the Developer uses the Service in any way after any changes to this Agreement are effective, then the Developer shall be deemed to have agreed to be bound by all such changes.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9 语言、法律适用及争议解决 </p>',
                    '<p>9 LANGUAGE.GOVERNING LAW AND DISPUTE RESOLUTION</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.1 本协议以中英文版本准备，中英文版本内容相冲突的，应以本协议中文版本为准。</p>',
                    '<p>9.1 This agreement is made in both the Chinese and English languages. If there is any conflict between the Chinese version and the English version, the Chinese version shall prevail.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.2 本协议的有效性、履行和与本协议及其修订本有关的所有事宜，将受中华人民共和国大陆法律管辖，本协议下及和本协议相关的任何争议均仅适用中华人民共和国大陆法律。</p>',
                    '<p>9.2 The validity and implementation of this Agreement and all matters related to this Agreement and its amendments shall be governed by the laws of the People’s Republic of China and any disputes under or in connection with this Agreement shall all be governed solely by the laws of the People’s Republic of China.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.3 本协议下及和本协议相关的任何争议，开发者与我方首先应友好协商解决，协商不成的，任何一方可向北京市海淀法院提起诉讼。</p>',
                    '<p>9.3 We and the Developer shall attempt in the first instance to resolve disputes under or in connection with this Agreement through friendly consultation. If the parties fail to resolve such disputes through consultation, either party may bring an action at Haidian District Court, Beijing.</p>',
                    '<p>&nbsp;</p>',
                ],
            },
            {
                'type': 'div',
                'attr': 'class="hr" id="download_id"',
                'word': ''
            },
            {
                'type': 'a',
                'attr': 'class="agree_btn agree_btn_no fl" value="0"',
                'word': '我已阅读并同意上述条款与条件'
            },
            {
                'type': 'a',
                'attr': 'class="submit_btn fr"',
                'word': '确认'
            },
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
                'word': '1· Introduction',
                'id': 'to_intro',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '2· Summary',
                'id': 'to_category',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '3· Class Definitions',
                'id': 'to_define',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '4· Data Example',
                'id': 'to_general',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '5· Dataset Download',
                'id': 'to_down',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '6· Dataset Structure',
                'id': 'to_structure',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '7· Evaluation Tasks',
                'id': 'to_standard',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '8· Publication',
                'id': 'to_public',
                'classes': 'menu-1 to_btn'
            },
        ],
        'content' : [
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_data_href"',
                'word': '1 · Introduction'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt20"  id="to_collection_href"',
                'word': 'Scene parsing aims to assign a class (semantic) label for each pixel in an image, or each point in a point cloud. It is one of the most comprehensive analyses of a 2D/3D scene. Given the rise of autonomous driving, environmental perception is expected to be a key enabling technical piece. The ApolloScape dataset provided by Baidu, Inc. will include RGB videos with high resolution images and per pixel annotation, survey- grade dense 3D points with semantic segmentation, stereoscopic video, and panoramic images. '
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt20"  id="to_collection_href"',
                'word': 'We equipped a mid-size SUV with high resolution cameras and a Riegl acquisition system. Our dataset is collected in different cities under various traffic conditions. The number of moving objects, such as vehicles and pedestrians, averages from tens to over one hundred. Moreover, each image is tagged with high-accuracy pose information at cm accuracy and the static background point cloud has mm relative accuracy. We expect our new dataset can deeply benefit various autonomous driving related applications that include but not limited to 2D/3D scene understanding, localization, transfer learning, and driving simulation. '
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 demo"',
                'word': '<video width="554" height="561" controls="controls" autoplay="autoplay" loop="loop"><source src="' + 'http://ad-apolloscape.bj.bcebos.com/video%2Fvideo_demo.webm' + '"  type="video/mp4">您的浏览器不支持video标签</video>'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_category_href"',
                'word': '2 · Summary of Scence Parsing Dataset'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'Image frames in our dataset are collected every one meter by our acquisition system with resolution 3384 x 2710. It is expected that the released dataset will include 200K image frames with corresponding pixel-level annotations and pose information. Instance-level annotations are available for a subset of the dataset. Depth maps for static background will also be provided.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'As of March 8, 2018, we have released the first part of the dataset that contains 74555 video frames and their pixel-level and instance-level annotations.On March 21, 2018, we added the second part of the data set, including  43592 depth images for static background of road01_ins and road02_ins.On April 03, 2018，the Scene Parsing data set cumulatively provides 146,997 frames with corresponding pixel-level annotations and pose information，depth maps for static background.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'The dataset is divided into three subsets for training, validation and testing respectively. The semantic annotations for testing images are not provided. All the pixels in the ground truth annotations for testing images are labeled as 255. The files that contain image lists of training, validation, and testing subsets will be provided soon.'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_define_href"',
                'word': '3 · Class Definitions'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'We annotate 25 different labels covered by five groups. The following table gives the details of these labels. There are two IDs, class ID and train ID, assigned to each pixel. The train ID is the one used for training and can be modified as needed. The value 255 indicates the ignoring labels that currently are not evaluated during the testing phase. The class ID is used to represent the label in ground truth labels. More details including color assignment can be found in label_apollo.py in <a href="http://ad-apolloscape.bj.bcebos.com/public%2Futilities.tar.gz">utilities.tar.gz</a>. During the submission, however, please make sure to use the class IDs.'
            },
            {
                'type': 'table',
                'attr': 'class="mt10"',
                'word':[
                    '<tr><td>category</td><td>Class</td><td>Class ID</td><td>train ID</td><td>Description</td></tr>',
                    '<tr><td>Others</td><td>others</td><td>0</td><td>255</td><td></td></tr>',
                    '<tr><td></td><td>rover</td><td>1</td><td>255</td><td></td></tr>',
                    '<tr><td>Sky</td><td>sky</td><td>17</td><td>0</td><td></td></tr>',
                    '<tr><td>movable object</td><td>car</td><td>33</td><td>1</td><td></td></tr>',
                    '<tr><td></td><td>car_groups</td><td>161</td><td>1</td><td></td></tr>',
                    '<tr><td></td><td>motorbicycle</td><td>34</td><td>2</td><td></td></tr>',
                    '<tr><td></td><td>motorbicycle_group</td><td>162</td><td>2</td><td></td></tr>',
                    '<tr><td></td><td>bicycle</td><td>35</td><td>3</td><td></td></tr>',
                    '<tr><td></td><td>bicycle_group</td><td>163</td><td>3</td><td></td></tr>',
                    '<tr><td></td><td>person</td><td>36</td><td>4</td><td></td></tr>',
                    '<tr><td></td><td>person_group</td><td>164</td><td>4</td><td></td></tr>',
                    '<tr><td></td><td>rider</td><td>37</td><td>5</td><td>person on motorcycle,bicycle or tricycle</td></tr>',
                    '<tr><td></td><td>rider_group</td><td>165</td><td>5</td><td>person on motorcycle,bicycle or tricycle</td></tr>',
                    '<tr><td></td><td>truck</td><td>38</td><td>6</td><td></td></tr>',
                    '<tr><td></td><td>truck_group</td><td>166</td><td>6</td><td></td></tr>',
                    '<tr><td></td><td>bus</td><td>39</td><td>7</td><td></td></tr>',
                    '<tr><td></td><td>bus_group</td><td>167</td><td>7</td><td></td></tr>',
                    '<tr><td></td><td>tricycle</td><td>40</td><td>8</td><td>three-wheeled vehicles,motorized, or human-powered</td></tr>',
                    '<tr><td></td><td>tricycle_group</td><td>168</td><td>8</td><td>three-wheeled vehicles,motorized, or human-powered</td></tr>',
                    '<tr><td>flat</td><td>road</td><td>49</td><td>9</td><td></td></tr>',
                    '<tr><td></td><td>siderwalk</td><td>50</td><td>10</td><td></td></tr>',
                    '<tr><td>Road obstacles</td><td>traffic_cone</td><td>65</td><td>11</td><td>movable and cone-shaped markers</td></tr>',
                    '<tr><td></td><td>road_pile</td><td>66</td><td>12</td><td>fixed with many different shapes</td></tr>',
                    '<tr><td></td><td>fence</td><td>67</td><td>13</td><td></td></tr>',
                    '<tr><td>Roadside objects</td><td>traffic_light</td><td>81</td><td>14</td><td></td></tr>',
                    '<tr><td>void</td><td>pole</td><td>82</td><td>15</td><td></td></tr>',
                    '<tr><td></td><td>traffic_sign</td><td>83</td><td>16</td><td></td></tr>',
                    '<tr><td></td><td>wall</td><td>84</td><td>17</td><td></td></tr>',
                    '<tr><td></td><td>dustbin</td><td>85</td><td>18</td><td></td></tr>',
                    '<tr><td></td><td>billboard</td><td>86</td><td>19</td><td></td></tr>',
                    '<tr><td>Building</td><td>building</td><td>97</td><td>20</td><td></td></tr>',
                    '<tr><td></td><td>bridge</td><td>98</td><td>255</td><td></td></tr>',
                    '<tr><td></td><td>tunnel</td><td>99</td><td>255</td><td></td></tr>',
                    '<tr><td></td><td>overpass</td><td>100</td><td>255</td><td></td></tr>',
                    '<tr><td>Natural</td><td>vegatation</td><td>113</td><td>21</td><td></td></tr>',
                    '<tr><td>Unlabeled</td><td>unlabeled</td><td>255</td><td>255</td><td>other unlabeled objects</td></tr>',
                ]
            },
            {
                'type': 'p',
                'attr': 'class="title-1 mt60" id="to_general_href"',
                'word': '4 · Data Example'
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Color Label'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_1.jpg') + '" class="demo-1">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_2.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_3.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/color/color_4.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="clearfix"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Depth Image'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_1.jpg') + '" class="demo-1">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_2.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_3.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="fl mt20 small-imgae"',
                'word': '<img src="' + __uri('/public/img/scene/depth/depth_4.jpg') + '" class="demo-1 ml10">'
            },
            {
                'type': 'div',
                'attr': 'class="clearfix"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt60 title-1" id="to_down_href"',
                'word': '5 · Dataset Download'
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Instance-level & Pixel-level labels'
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': '_ins means labels contains both pixel-level and instance-level labels, _seg means labels contains pixel-level labels only. '
            },
            {
                'type': 'div',
                'attr': 'class="down_list mt20 clearfix" id="to_submit_href"',
                'word': [
                    '<a class="down_btn fl mr10" value="road01_ins">road01_ins.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_ins">road02_ins.tar.gz</a>',
                    '<a class="down_btn fl" value="road03_ins">road03_ins.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_ins">road04_ins.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_seg">road02_seg.tar.gz</a>',
                    '<a class="down_btn fl" value="road03_seg">road03_seg.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_seg">road04_seg.tar.gz</a>',

                ],
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Pixel-level LaneLine labels'
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': 'We annotate 28 different lane markings that currentlyare not available in existing open datasets. <a href="http://ad-apolloscape.bj.bcebos.com/public%2FApolloScape%20Dataset.pdf">The ApolloScape Dataset for Autonomous Driving</a> give detailed information of these lane markings'
            },
            {
                'type': 'div',
                'attr': 'class="down_list mt20 clearfix" id="to_submit_href"',
                'word': [
                    '<a class="down_btn fl mr10" value="road02_ins_lane">road02_ins_lane.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road03_ins_lane">road03_ins_lane.tar.gz</a>'

                ],
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Depth images'
            },
            {
                'type': 'div',
                'attr': 'class="down_list mt20 clearfix" id="to_submit_href"',
                'word':  [
                    '<a class="down_btn fl mr10" value="road01_ins_depth">road01_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_ins_depth">road02_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl " value="road03_ins_depth">road03_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_ins_depth">road04_ins_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road02_seg_depth">road02_seg_depth.tar.gz</a>',
                    '<a class="down_btn fl " value="road03_seg_depth">road03_seg_depth.tar.gz</a>',
                    '<a class="down_btn fl mr10" value="road04_seg_depth">road04_seg_depth.tar.gz</a>',
                ],
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': 'Note: All photos can only be used for educational purpose by individuals or organizations. Commercial use or other violations of copyright law are not permitted.'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Image lists'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt20 word-1"',
                'word': 'Uploaded the <a href="http://ad-apolloscape.bj.bcebos.com/public%2Fimage_lists.tar.gz">Image lists</a> for training, validation, and testing for road01_ins, road02_ins, and road03_ins. '
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'p',
                'attr': 'class="mt50 title-1"  id="to_structure_href"',
                'word': '6 · Dataset Structure'
            },
            {
                'type': 'p',
                'attr': 'class="mt40 title-2"',
                'word': 'Folder structure of the dataset '
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"  id="to_requirements_href"',
                'word': '{root} / {type} / {road id} _ {level} / {record id} / {camera id} / {timestamp} _ {camera id} {ext}'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'root: the root folder defined by users.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'type: there are three data types in current release, i.e., ColorImage, Label, and Pose. '
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'road id: the road id, e.g., road001, road002.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'level: two different levels, seg means labels contains pixel-level labels only, ins means labels contains both pixel-level and instance-level labels.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'record id: the record is, e.g., Record001, Record002. Each record contains up to few thousands images.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'camera id: two front cameras are used in our acquisition system, i.e., Camera 5 and Camera 6.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1" id="to_demo_href"',
                'word': 'timestamp: the first part of the image name.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'camera id: the second part of the image name.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'ext: the extension of the file. .jpg for color image, _bin.png for label image, .json for the polygon list of instance-level labels, and _instanceIds.png for instance-level labels.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'There is only one pose file (i.e., pose.txt) for each camera and each record. This pose file contains all the extrinsic parameters for all the images of the corresponding camera and record. The format of each line in the pose file is as follows:'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'r00 r01 r02 t0 r10 r11 r12 t1 r20 r21 r22 t2 0 0 0 1 image_name'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'The cameras have been well calibrated and undistorted. The intrinsic parameters of cameras can found in camera_intrinsics.txt in the <a href="http://ad-apolloscape.bj.bcebos.com/public%2Futilities.tar.gz">utilities.tar.gz</a>.'
            },
            {
                'type': 'p',
                'attr': 'class="title-2 mt40"',
                'word': 'Depth image format:'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'In the depth image, the depth value is save as unsigned short int format. It can be easily read in OpenCV as: '
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'cv::Mat depth_u16 = cv::imread ( depth_path, CV_LOAD_IMAGE_ANYDEPTH); '
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'The absolute depth value in meter can be obtained as'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'double depth_value = depth_u16.at<ushort>(row, col) / 200.00;'
            },
            {
                'type': 'p',
                'attr': 'class="mt50 title-1" id="to_standard_href"',
                'word': '7 · Evaluation Tasks'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"  id="to_requirements_href"',
                'word': 'Given 3D annotations, 2D pixel and instance-level annotations, background depth maps, camera pose information, a number of tasks could be defined. In current release, we mainly focus on the 2D image parsing task. We would like to add more tasks in near future.'
            },
            {
                'type': 'p',
                'attr': 'class="word-1"',
                'word': 'We have provided three evaluation metrics for single image parsing and video parsing. More details about the evaluation metrics can be found in our paper.We are organizing <a href="https://arxiv.org/abs/1803.06184">2018 CVPR Workshop on Autonomous Driving Challenge</a>, more details to be announced soon.'
            },
            {
                'type': 'p',
                'attr': 'class="mt50 title-1" id="to_public_href"',
                'word': '8 · Publication'
            },
            {
                'type': 'p',
                'attr': 'class="word-1 mt10"',
                'word': 'Please cite our paper in your publications if our dataset is used in your research.<br>Xinyu Huang, Xinjing Cheng, Qichuan Geng, Binbin Cao, Dingfu Zhou, Peng Wang, Yuanqing Lin, and Ruigang Yang, <a href="https://arxiv.org/abs/1803.06184">The ApolloScape Dataset for Autonomous Driving</a>, arXiv: 1803.06184, 2018<br><a href="http://ad-apolloscape.bj.bcebos.com/public%2FApolloScape%20Dataset.pdf">[PDF]</a> &nbsp <a href="http://ad-apolloscape.bj.bcebos.com/public%2FBibTex.txt">[BibTex]</a>'
            },
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
                    '<p>本《开发者协议》（“本协议”）适用于您（“开发者”）对百度及其关联方（“我方”）网站、产品、服务、应用及开放存取数据集（合称“服务”）的访问及使用。请仔细阅读本协议，若开发者对本协议有任何疑问，请与我方联系。若开发者采取任何方式访问或使用服务，则表示开发者同意受本协议约束：</p>',
                    '<p>This Developer Agreement (this “Agreement”) governs your (“Developer”) access to and use of the websites, products, services, applications and open-access data sets (collectively, the “Service”) of Baidu and its affiliates (“we,” “us” or “ours”). Please read this Agreement carefully, and contact us if the Developer has any questions regarding this Agreement. Any access to or use of the Services indicates that the Developer agrees to be bound by this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1 开发者的一般义务</p>',
                    '<p>1 General Obligations of the Develope</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.1 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.1 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.2 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.2 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.3 如我方对开发者使用的部分服务（或使用服务所涉及到的由其他数据平台提供的服务）有额外要求的，开发者应同时遵守上述所有要求或在达到上述要求后方可使用该等服务。</p>',
                    '<p>1.3 If we have additional requirements regarding certain parts of the Service (or any other digital platform services which are involved during use of the Service), the Developer may use such services only if he/she complies with all such additional requirements.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.4 经我方不时要求，开发者应当向我方提供身份信息、文件、资料、信息、源代码等（“开发者信息”）。开发者应当保证开发者信息真实、有效、合法，且不侵犯任何第三方的权利，且开发者对其拥有合法、有效、完整的知识产权或所有权。我方保留委托第三方机构调查开发者信息的权利，如果开发者信息存在失实或违法等情况，我方有权立即终止本协议并禁止开发者访问或使用服务。</p>',
                    '<p>1.4 Upon our request from time to time, the Developer shall provide us with his/her identity information, documents, materials, information, and source code (“Developer Information”). The Developer shall ensure the Developer Information is true, valid and lawful and does not infringe any rights of any third parties and the Developer owns lawful, valid and complete intellectual property rights in or title to the Developer Information. We reserve the right to appoint a third-party agent to investigate the Developer Information. If the Developer Information is found to be untrue or illegal, we are entitled to terminate this Agreement and prohibit the Developer from accessing or using the Service.</p>',
                    '<p>1.5 开发者在访问或使用服务过程中不得以任何方式：</p>',
                    '<p>1.5 When accessing or using the Service, the Developer shall not in any manner:</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.1 侵犯或违反任何人（包括我方）的知识产权或其他权利</p>',
                    '<p>1.5.1 Infringe or violate the intellectual property rights or any other rights of any parties (including ours);</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.2 从事任何具有有害、欺诈、欺骗、威胁、骚扰、诽谤，淫秽性质的活动；</p>',
                    '<p>1.5.2 Engage in any activities which are harmful, fraudulent, deceptive, threatening, harassing, defamatory or obscene;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.3 未经我方书面允许，采取爬虫或其他方式获取任何与服务中或与服务相关的页面、数据或信息（无论采取人工方式或自动方式）；</p>',
                    '<p>1.5.3 “Crawl”, “scrape” or “spider” any page, data, or information of or relating to the Service (through use of manual or automated means), without our written consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.4 使用反编译、反向工程等方式试图获取服务中或与服务相关的源代码、基本理念或信息；或</p>',
                    '<p>1.5.4 Decompile, reverse engineer, or otherwise attempt to obtain the source code or underlying ideas or information of or relating to the Service; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>2 数据集下载</p>',
                    '<p>2 Dataset Downloads</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1 在开发者访问或使用服务期间，我方会酌情授权开发者访问、使用、下载一定数据集（“数据集”）。</p>',
                    '<p>2.1 During the Developer’s access to or use of the Service, we will authorize the Developer to use and download certain data sets (“Datasets”) at our sole discretion.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.2 开发者仅有权出于非商业研究或教学目的使用数据集，不得出于任何商业目的使用数据集。</p>',
                    '<p>2.2 The Developer is entitled to use the Datasets only for the purposes of non-commercial research or teaching and shall not use the Datasets for any commercial purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.3 我方对数据集中的内容，例如图片、视频、音频、文字等不享有任何知识产权，也不就上述内容做出任何保证，该等保证包括但不限于：保证不侵犯任何知识产权权利、保证有权出于任何目的使用上述内容。</p>',
                    '<p>2.3 We do not enjoy any intellectual property rights to content in the Datasets, such as pictures, videos, audio recordings, or text, nor do we make any warranties as to such content, including but not limited to a warranty of non-infringement of other’s intellectual property rights or a warranty of entitlement to use such content for any specific purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.4 在任何时候，我方均有权取消或终止授权开发者使用数据集，并有权要求开发者删除数据集。</p>',
                    '<p>2.4 We shall be entitled to cancel or terminate the authorization granted to the Developer for use of the Datasets at any time and have the right to request the Developer to delete the Datasets.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3 隐私政策 </p>',
                    '<p>3 Privacy Policy</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1 开发者同意并允许我方通过任何线上线下方式，出于服务的目的调查、获取和收集开发者的个人数据。开发者的个人数据包括：</p>',
                    '<p>3.1 The Developer agrees and permits us to investigate, acquire and collect the Developer’s personal data for purposes of the Service, by any online or offline means. The Developer’s personal data shall include:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.1 开发者在访问或使用服务时，向我方提供的相关个人信息，包括但不限于：姓名、性别、出生日期、个人资料照片、身份证号、护照号、地址、电子邮件、社交账号、电话号码、身份验证信息或位置信息等；</p>',
                    '<p>3.1.1 Personal information that the Developer provides to us when accessing or using the Service, including but not limited to his/her name, gender, date of birth, personal photo, ID number or passport number, address, telephone number, e-mail address, social media account, identity authentication information, location information, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.2 开发者通过服务向其他方提供的共享信息，以及开发者通过服务时所储存的信息；</p>',
                    '<p>3.1.2 Shared information that the Developer provides to other parties through the Service and the information that the Developer saves via the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.3 其他方分享的开发者的信息以及其他方访问或使用服务时所提供的有关开发者的共享信息；和</p>',
                    '<p>3.1.3 The Developer’s information that is shared by other parties and shared information related to the Developer which other parties provide when accessing or using the Service; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.4 开发者访问或使用服务时，我方系统通过Cookies、Web Beacon或其他方式自动采集的技术信息。</p>',
                    '<p>3.1.4 The technological information automatically collected by the system via cookies, web beacons, or other means when the Developer accesses or uses the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2 开发者进一步同意，我方有权在全球范围内、永久、无偿出于以下目的使用开发者个人数据：</p>',
                    '<p>3.2 The Developer further agrees that we are entitled to use the Developer’s personal data globally, permanently and free of royalties for the following purposes:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.1 为开发者提供个性化服务；</p>',
                    '<p>3.2.1 Providing personalized services to the Developer;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.2 向开发者发送可能感兴趣的产品和服务的信息；邀请开发者参与我方的活动和市场调查；或向开发者发送营销信息。如果开发者不想接收此类信息，则可经书面通知我方进行退订；和</p>',
                    '<p>3.2.2 Sending the Developer product and service information in which the Developer may be interested; inviting the Developer to participate in our activities or market surveys; or send the Developer marketing information. If the Developer does not wish to receive such information, the Developer may unsubscribe by sending us written notice; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.3 开展内部审计、数据分析和研究，改善我方的服务及开发者之间的沟通。</p>',
                    '<p>3.2.3 Conducting internal audits, data analyses and research in order to improve our services and communications with the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3 除下列情形外，我方将不公开或向第三方提供开发者的个人数据：</p>',
                    '<p>3.3 Except under the following circumstances, we will not publish the Developer’s personal data or disclose it to any third parties:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.1 开发者同意披露或提供；</p>',
                    '<p>3.3.1 The Developer agrees to disclose or provide it;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.2 开发者根据服务的规则同意披露或提供；</p>',
                    '<p>3.3.2 The Developer agrees to disclose or provide it under rules with respect to the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.3 开发者与第三方已经签订的协议要求我方披露或提供；或</p>',
                    '<p>3.3.3 Any agreements executed between the Developer and any third parties require us to disclose or provide it; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.4 法律法规、国家机关依法要求披露或提供。</p>',
                    '<p>3.3.4 Its disclosure or provision is required by laws or regulations or governmental agencies.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.4 为确保我方网站的正常运转，我方不时会在计算机或移动设备上存储名为Cookies的小数据文件。Cookies是一种网络服务器存储在计算机或移动设备上的纯文本文件。Cookies的内容只能由创建它的服务器检索或读取。每个Cookies对开发者的网络浏览器或移动应用程序都是唯一的。Cookies通常包含标识符、站点名称以及一些号码和字符。借助于Cookies，网站能够存储开发者偏好等数据。我方不会将Cookies用于本协议所述目的之外的任何用途。开发者可根据自己的偏好管理或删除Cookies。</p>',
                    '<p>3.4 In order to ensure our website’s normal operation, we will from time to time store small data files called cookies on computers or mobile devices. cookies are a type of plain text file that network servers store on computers or mobile devices. The content of cookies can only be retrieved or read by the servers creating such cookies. Each cookie is unique to the Developer’s web browser or mobile application. Cookies generally contain identifiers, site names, and some numbers and characters. With the help of cookies, websites are able to save user preference data and other data. We will not use cookies for any purposes other than those described in this Agreement. The Developer may manage or delete cookies based on his/her preferences.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4知识产权 </p>',
                    '<p>4 Intellectual Property</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1 除本协议另有约定外，我方对服务中所提供的所有信息（包括但不限于图片、视频、数据、代码等）享有合法所有权利，开发者对此不享有任何权利。未经我方书面明示同意，开发者不得使用、修改、复制、公开传播、发行或以其他任何方式利用前述信息。</p>',
                    '<p>4.1Unless otherwise provided in this Agreement, we own all legal rights to the information (including but not limited to pictures, videos, data and codes) provided by us in connection with the Service and the Developer shall not have any rights to such information. Without our express written consent, the Developer shall not use, modify, copy, disseminate distribute such information or utilize it in any manner.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2 除我方与开发者另有约定外，开发者通过服务独立开发的成果（包括但不限于算法、源代码、数据、设计方案、论文等，合称“成果”）及相应的知识产权，归开发者所有。但产生该等成果所依附或使用的图片、视频、数据等（以下简称“基础数据”），如属于我方提供，则该等基础数据的所有权利并不因提供行为发生转移。开发者如在使用该等成果过程中使用了我方享有知识产权或其他合法权利的基础数据，应向我方支付使用费用，费用的数额及支付方式由我方与开发者另行约定。</p>',
                    '<p>4.2 Unless otherwise agreed by us and the Developer, the results (including but not limited to algorithms, source codes, data, design plans, and papers, collectively referred to as “Results”) independently generated by the Developer via the Service and the corresponding intellectual property rights shall belong to the Developer. Nonetheless, no rights to the images, videos, or data provided by us and utilized by the Developer in generating the Results (“Underlying Data”) shall be transferred due to our provision of such Underlying Data. If the Developer uses any Underlying Data in which we own intellectual property rights or other legal rights when using the Results, then the Developer shall pay us royalties. The amount and the payment method of the royalties shall be agreed between us and the Developer separately.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3 开发者同意授予我方在全球范围内、无限期、不受限制的免费使用前款成果的权利，包括但不限于用于服务提供、进一步开发服务、用于商业用途及分许可他人使用。为免歧义，基于上述成果使用所产生的新成果，我方享有完整的知识产权，开发者同意对新成果不主张任何权益，包括但不限于所有权、以及基于对上述成果享有的所有权而阻碍新成果的实施等。</p>',
                    '<p>4.3 The Developer agrees to grant us a global, permanent, unlimited and royalty-free right to use the above Results, including but not limited to use of such Results for the purpose of providing the Service, developing the Service, conducting commercial activities and sub-licensing to others for use. For avoidance of doubt, we shall have complete intellectual property rights in any new results generated by us by using the Results, and the Developer shall not claim any rights or interests in such new results, including but not limited to ownership and the right to obstruct the implementation of any other rights based on such new results.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5 知识产权争议报告 </p>',
                    '<p>5 Intellectual Property Dispute Reports</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1 若开发者或任何知识产权权利人认为服务中或通过服务获取的材料或内容侵犯其（或其被授权代表的主体）的知识产权，则请将包含下述信息的通知发送至okai@baidu.com：</p>',
                    '<p>5.1 If the Developer or any owner of intellectual property rights believes that material or content residing on or accessible through the Service infringes his/her intellectual property rights (or the intellectual property rights of any parties whom he/she are authorized to act on behalf of), please send a notice of copyright infringement containing the following information to okai@baidu.com</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.1 被侵权知识产权权利人授权代表的信息，包括名称、电话号码和邮箱地址；</p>',
                    '<p>5.1.1 Information regarding a person authorized to act on behalf of the owner of the intellectual property rights being infringed, including name, address, telephone number and email address;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.2 被侵权作品或材料的信息；</p>',
                    '<p>5.1.2 Information regarding works or materials being infringed upon;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.3 被控侵权作品或材料的信息，若知识产权权利人希望从某一位置移除该等被控侵权作品或材料，则还应提供该等位置的充分信息，使我方能够找到该等被控侵权作品或材料并进行确认；和</p>',
                    '<p>5.1.3 Information regarding the works or materials that are claimed to be infringed upon, including information regarding the location of the infringing documents or materials that the intellectual property owner seeks to have removed, with sufficient detail so that we are capable of finding and verifying their existence; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.4 关于通知方善意认为被控侵权材料未经知识产权权利人、其代理人或法律授权的声明。</p>',
                    '<p>5.1.4 A statement that the notifying party has a good faith belief that the material identified is not authorized by the intellectual property rights owner, its agent, or the law.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2 在收到关于侵犯知识产权的恰当通知后，我方将保留下述权利：</p>',
                    '<p>5.2 Upon receipt of a proper notice of intellectual property rights infringement, we reserve the right to:</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.1 移除或禁止访问侵权材料；</p>',
                    '<p>5.2.1 remove or disable access to the infringing material;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.2 将我方已移除或禁止访问材料的事项，告知被控侵权的内容提供者；</p>',
                    '<p>5.2.2 notify the content provider who is accused of infringement that we have removed or disabled access to the applicable material; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.3 若被控侵权的内容提供者存在多次侵权行为，则我方将终止其访问或使用服务的权利。</p>',
                    '<p>5.2.3 terminate such content providers access to or use of the Service if he or she is a repeat offender.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6 保密义务 </p>',
                    '<p>6 Obligation of Confidentiality</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1 保密信息的范围包括我方在服务中向开发者提供的，或开发者通过服务获取的关于我方的所有非公众所知的信息，包括但不限于：</p>',
                    '<p>6.1 The scope of the confidential information includes all non-public information provided by us to the Developer during the Service, or all non-public information related to us acquired by the Developer through the Service, including but not limited to the following:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.1 我方运营数据、交易数据、技术资料、财务信息、经营渠道以及方案、软件、程序、手册等；</p>',
                    '<p>6.1.1 Our operating data, transaction data, technical information, financial information, operating channels as well as plans, software, programs and manuals, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.2 我方从第三方处获得但应承担保密责任的信息；</p>',
                    '<p>6.1.2 Information obtained by us from any third parties which we are obligated to keep confidential;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.3 任何其他机密或专有信息以及通常不为我方以外的其他方所知晓、未在公共领域被正式公开的信息。</p>',
                    '<p>6.1.3 Any other information which is unknown to any parties other than us or which is not publicly available;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2 我方及开发者认可前款所有信息为保密信息（“保密信息”），且该等信息对于我方具有重要作用和商业价值，如有泄露或不当利用将造成严重影响和经济损失。开发者同意对上述保密信息严格保密，如无法确认某些信息是否为保密信息，则开发者亦应将此类信息作为保密信息进行保护。</p>',
                    '<p>6.2 We and the Developer acknowledge that the above information is our confidential information (“Confidential Information”) and is of important functional and commercial value to us, the disclosure or improper use of which will have a serious impact and cause economic losses. The Developer agrees to keep the Confidential Information strictly confidential. If the Developer is not able to confirm whether certain information is Confidential Information, then the Developer shall treat and protect such information as Confidential Information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3 保密信息的使用及保护：</p>',
                    '<p>6.3 Use and Protection of Confidential Information:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.1 开发者应承诺按照我方的指定要求在指定区域、指定场景内使用保密信息，开发者不得以不符合我方要求的方式获取、使用保密信息，不得对保密信息进行效仿、逆向工程、反编译、试图破译源代码及潜在信息，也不得以任何形式向任何第三方泄露、传播、出售、转让、用于任何商业用途或用于获取任何商业利益等。</p>',
                    '<p>6.3.1 The Developer undertakes to use the Confidential Information in accordance with our designated requirements and within the specified area, platform and time limit as designated by us. Without our prior written consent, the Developer shall not obtain or use the Confidential Information in any way contrary to our requirements. The Developer shall not imitate, reverse engineer, decompile or attempt to decode the source code or underlying information of the Confidential Information, or disclose, distribute, sell or transfer any Confidential Information to any third party or use any Confidential Information for any commercial purposes or to obtain any commercial interests.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.2 严禁开发者利用保密信息从事任何本协议约定之外的目的；</p>',
                    '<p>6.3.2 The Developer is prohibited from using the Confidential Information for any purposes not provided under this Agreement;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.3 开发者应有意识地保护保密信息，并采取所有必要的保密措施。</p>',
                    '<p>6.3.3 The Developer shall consciously and actively protect the Confidential Information and take all necessary confidentiality measures.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.4 我方无须对保密信息的真实性、适用性、完整性和合理性承担责任，以及并未对此做出一切明确表达的或暗含的陈述和担保。我方无须因开发者对保密信息的使用行为承担任何责任。</p>',
                    '<p>6.4 We are not responsible for the correctness, compatibility, completeness or reasonableness of the Confidential Information, and disclaim any express or implied representations or warranties in respect thereof. We are not legally responsible for use of the Confidential Information by the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7 违约责任 </p>',
                    '<p>7 Liability for Breach</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.1 若开发者违反本协议任何规定，我方有权立即终止本协议并禁止开发者使用或接触服务。</p>',
                    '<p>7.1 If the Developer breaches any stipulations under this Agreement, we are entitled to immediately terminate this Agreement and prohibit Developer from using or accessing the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.2 就开发者使用我方服务而造成的任何损失、损害或法律后果，我方不承担任何责任。若开发者或其雇员或代理人错误地或误导性地使用我方服务，而对我方造成任何声誉损失或经济损失，则开发者应当就该等法律后果负责，并向我方做出赔偿。</p>',
                    '<p>7.2 We accept no liability for any losses, damages or legal consequences whatsoever caused by the Developer’s use of the Service. In the case of any incorrect or misdirected use of the Service by the Developer or his/her employees or agents that causes us a loss of reputation or economic losses, the Developer shall be liable for such legal consequences and compensation;</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.3 若开发者违反了本协议下的或任何与本协议相关的义务而直接或间接导致我方发生了任何性质的损失、损害、费用、索赔、命令、责任或开支，开发者同意向我方做出全部赔偿，未免歧义，该等赔偿包括但不限于我方为执行本条款的过程中，或由于主张本协议下责任的索赔而产生的任何费用或开支。</p>',
                    '<p>7.3 If the Developer breaches any obligations under or in connection with this Agreement and directly or indirectly causes us any losses, damages, costs, claims, orders, liabilities or expenses of any nature, then the Developer shall fully compensate us. For avoidance of doubt, such compensation shall include but be not limited to any expenses or costs which we incur from the execution of this provision or claiming liabilities under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8 协议修改 </p>',
                    '<p>8 VARIATION</p>',
                    '<p>&nbsp;</p>',
                    '<p>我方保留在任何时候修改本协议的权利。在该等情况下，我方将通过在http://apolloscape.auto发布、发送邮件和或其他方式通知开发者。若开发者不同意该等修改，则开发者有权拒绝接受，但开发者将无权继续使用服务。若对本协议做出的任何修改生效后，开发者以任何方式继续使用服务，则将视为开发者同意接受所有该等修改的约束。</p>',
                    '<p>We reserve the right to change this Agreement at any time. Under such circumstances, we will bring it to your attention by placing a notice on the http://apolloscape.auto, by sending the Developer an email, and/or by other means. If the Developer does not agree with such changes, then the Developer is free to reject them, but Developer will no longer be able to use the Service. If the Developer uses the Service in any way after any changes to this Agreement are effective, then the Developer shall be deemed to have agreed to be bound by all such changes.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9 语言、法律适用及争议解决 </p>',
                    '<p>9 LANGUAGE.GOVERNING LAW AND DISPUTE RESOLUTION</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.1 本协议以中英文版本准备，中英文版本内容相冲突的，应以本协议中文版本为准。</p>',
                    '<p>9.1 This agreement is made in both the Chinese and English languages. If there is any conflict between the Chinese version and the English version, the Chinese version shall prevail.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.2 本协议的有效性、履行和与本协议及其修订本有关的所有事宜，将受中华人民共和国大陆法律管辖，本协议下及和本协议相关的任何争议均仅适用中华人民共和国大陆法律。</p>',
                    '<p>9.2 The validity and implementation of this Agreement and all matters related to this Agreement and its amendments shall be governed by the laws of the People’s Republic of China and any disputes under or in connection with this Agreement shall all be governed solely by the laws of the People’s Republic of China.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.3 本协议下及和本协议相关的任何争议，开发者与我方首先应友好协商解决，协商不成的，任何一方可向北京市海淀法院提起诉讼。</p>',
                    '<p>9.3 We and the Developer shall attempt in the first instance to resolve disputes under or in connection with this Agreement through friendly consultation. If the parties fail to resolve such disputes through consultation, either party may bring an action at Haidian District Court, Beijing.</p>',
                    '<p>&nbsp;</p>',
                ],
            },
            {
                'type': 'div',
                'attr': 'class="hr" id="download_id"',
                'word': ''
            },
            {
                'type': 'a',
                'attr': 'class="agree_btn agree_btn_no fl" value="0"',
                'word': 'I have read and agree to the Terms & Conditions above.'
            },
            {
                'type': 'a',
                'attr': 'class="submit_btn fr"',
                'word': 'Confirm'
            },
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
        // html += '<div class="ban-operation"><a class="button" href="submit_assessment.html">'
        // + ele.operation.submit_assessment + '</a> &nbsp;&nbsp; <a class="button" href="benchmark.html">'
        // + ele.operation.benchmark + '</a></div>';
        html += '<p class="ban-brief-hr"  id="to_intro_href"></p>';
        html += '</div>';
    });
    $('#banner-container').html(html);

    html = '';
    html += '<div class="menu fl">';
    html += '<ul>';
    $.each(arr.menu, function (index, ele) {
        html += '<li class="' + ele.classes+ '" id="' + ele.id+ '">' + ele.word+ '</li>';
    });
    html += '</ul>';
    html += '</div>';
    html += '<div class="content fl">';
    $.each(arr.content, function (index, ele) {
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
    html += '<div class="cb"></div>';
    $("#scene-container").html(html);

    html = '<div class="content">';
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
    $('.to_btn').bind('click', function () {
        console.log(11111111);
        var hrefId = $(this).attr('id');
        location.href = '#' + hrefId + '_href';
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
