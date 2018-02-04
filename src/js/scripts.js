
(function($, window) {
   "use strict";
    
    var zebra = {
            init: function(){
                $(document).ready(function(){
                    zebra.setDonationImg();
                    zebra.setDonationAmout();
                });
            },
            setDonationImg: function() {
                var options = {
                    divName: '.card-body',
                    targetDiv: '.card-image',
                    folderPath: 'assets/',
                    postFix: '-image.jpg'
                };

                $('#selectDonation').selectImg(options);

                return false;
            },
            setDonationAmout: function(){
                var options = {
                    radio: 'input[type=radio]',
                    inputClassName: '.custom-amount'
                },
                    formOptions = {
                    radioName: 'options',
                    inputClassName: '.custom-amount'
                };

                $('.donation').radioOptions(options);
                $('.card form').formValidation(formOptions);

                return false;
            }
        };

    zebra.cache = {};

    zebra.init($); // initialises the calls

    window.zebra = $.extend(zebra);
})(jQuery,window);

