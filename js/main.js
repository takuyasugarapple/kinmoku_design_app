$(document).ready(function () {
    $('.textbox_name').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_name').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_name').addClass("focus")
        });

    $('.textbox_mail').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_mail').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_mail').addClass("focus")
        });

    $('.textbox_pass').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_pass').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_pass').addClass("focus")
        });

    $('.textbox_repass').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_repass').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_repass').addClass("focus")
        });
});