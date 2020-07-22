$(function () {
    //大盒子鼠标移入移出波纹效果
    $('.box').on({
        'mouseenter': function (e) {
            let x = e.pageX - $(this).offset().left;
            let y = e.pageY - $(this).offset().top;
            $('.box span').css({
                left: x,
                top: y
            });
            $('.box').removeClass('out').addClass('in');
        },
        'mouseleave': function (e) {
            let x = e.pageX - $(this).offset().left;
            let y = e.pageY - $(this).offset().top;
            $('.box span').css({
                left: x,
                top: y
            });
            $('.box').removeClass('in').addClass('out');
        }
    });
    //输入框焦点事件,文字升降
    $('.userName,.password').on({
        'focus': function () {
            if ($(this).hasClass('userName')) {
                $('form i.name').css('top', 35);
            } else {
                $('form i.pas').css('top', 115);
            };
        },
        'blur': function () {
            if ($(this).val().length == 0) {
                if ($(this).hasClass('userName')) {
                    $('form i.name').css('top', '');
                } else {
                    $('form i.pas').css('top', '');
                };
            };
        }
    });
    //登录验证
    $('#login').on('click', function (e) {
        //阻止表单按钮默认提交事件
        e.preventDefault();
        if ($('.userName').val() == '陈丽丹' && $('.password').val() == '940604') {
            window.location.assign('./旋转木马.html');
        };
    });
});