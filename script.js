

$('.main .left .option').click(function(){
    let id = $(this).attr('id');

    $('.main .left .option').removeClass('active');
    $(`.main .left #${id}`).addClass('active');

    $('.main .middle .views .view').removeClass('active');
    $(`.main .middle .views .${id}`).addClass('active');
});