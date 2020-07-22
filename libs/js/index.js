$(function () {
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
    $('.userName,.password').on({
        'focus': function () {
            if ($(this).hasClass('userName')) {
                $('form i.name').css('top', 35);
            } else {
                $('form i.pas').css('top', 115);
            }
        },
        'blur': function () {
            if ($(this).val().length == 0) {
                if ($(this).hasClass('userName')) {
                    $('form i.name').css('top', '');
                } else {
                    $('form i.pas').css('top', '');
                }
            }
        }
    });
});