(function ($) {

    "use strict";

    $(window).on('load', function () {



        /*Page Loader active
        ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        /* Auto Close Responsive Navbar on Click
    ========================================================*/
        function close_toggle() {
            if ($(window).width() <= 768) {
                $('.navbar-collapse a').on('click', function () {
                    $('.navbar-collapse').collapse('hide');
                });
            } else {
                $('.navbar .navbar-inverse a').off('click');
            }
        }
        close_toggle();
        $(window).resize(close_toggle);

        // one page navigation 
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* WOW Scroll Spy
    ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });

        wow.init();


        //        Contact Form

        $("#contactForm").on("submit", function (event) {
            event.preventDefault(); // prevent reload

            $('#msgSubmit').html('');

            // if the message submit is loading then disable the submit.
            if (!$('.submitting').hasClass('d-none')) {
                return;
            }

            $(".submitting").removeClass('d-none');

            var formData = new FormData(this);
            formData.append('service_id', 'sendgrid');
            formData.append('template_id', 'my_contact_form');
            formData.append('user_id', 'user_R5gtzgpqlUSnUEcN6MXrT');

            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function () {
                $(".submitting").addClass('d-none');
                $('#msgSubmit').html('<p class="text-success">Your mail is sent!</p>');
                $('#contactForm')[0].reset();
            }).fail(function (error) {
                $(".submitting").addClass('d-none');
                $('#msgSubmit').html('<p class="text-danger">Oops... ' + JSON.stringify(error.responseText) + '</p>');
            });
        });

    });

}(jQuery));
