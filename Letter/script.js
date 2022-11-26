window.onload = function () {
    $(function () {

        if (!$('.envelope').hasClass('open')) {
            $('.envelope').click(function () {
                $(this).removeClass('new').addClass('open');
            });
        }

    });
}