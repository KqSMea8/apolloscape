/*eslint-disable*/
$(document).ready(function () {
    // console.log('document ready');
});

setTimeout(function () {
    init();
}, 360);

function init() {
    if ($('.talk-list').length > 0)
    {
        init_one();
    }
    else {
        setTimeout(function () {
            init();
        } ,400);
    }
}

function init_one() {

    var arr = [
    {
        name: 'Silvio Savarese',
        institution: 'Stanford University ',
        website: 'http://cvgl.stanford.edu/silvio/',
        intro: 'silvio Savarese is an Associate Professor of Computer Science at Stanford University and director of the SAIL-Toyota Center for AI Research at Stanford. He earned his Ph.D. in Electrical Engineering from the California Institute of Technology in 2005 and was a Beckman Institute Fellow at the University of Illinois at Urbana-Champaign from 2005–2008. He joined Stanford in 2013 after being Assistant and then Associate Professor of Electrical and Computer Engineering at the University of Michigan, Ann Arbor, from 2008 to 2013. His research interests include computer vision, robotic perception and machine learning. He is recipient of several awards including a Best Student Paper Award at CVPR 2016, the James R. Croes Medal in 2013, a TRW Automotive Endowed Research Award in 2012, an NSF Career Award in 2011 and Google Research Award in 2010. In 2002 he was awarded the Walker von Brimer Award for outstanding research initiative.',
        pic: 'silvio_savarese.png'
    },
    ];

    var html = '';

    var imgArr = [
        __inline('../public/img/talk/silvio_savarese.png'),
    ];

    $.each(arr, function (index, ele) {

        var imgUrl = imgArr[index];
        html = html
        + '<div class="talk-item" id="'+ ele.name.replace(' ', '_') +'"><div class="talk-image"><img src="' + imgUrl + '"></div><div class="talk-content"><a class="author" href="' + ele.website + '">' + ele.name + '</a><div class="institution">' + ele.institution + '</div><div class="text">' + ele.intro + '</div></div></div>';
    });

    $('.talk-list').html(html);
    setTimeout(function () {
      var url = window.location.toString();
      var id = url.split('#')[1];
      if (id) {
        console.log($('#' + id), id);
        var t = $('#' + id).offset().top - 100;
        $(window).scrollTop(t);
      }
    } ,400);
}
