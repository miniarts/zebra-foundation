(function($, window) {
    "use strict";
    var app = window.zebra || {},
        zebra = {
            init: function(){
                zebra.setDonationImg();
                zebra.setDonationAmout();
            },
            setDonationImg: function() {
                var $cardBody = $('.card-body');
                    
                $('#selectDonation').on('change', function(){
                    var value = $(this).find(':selected').val(),
                        path = '',
                        imageDiv = '';

                    if(value === ''){
                        $('.card-image').fadeOut(500, function(){
                            $cardBody.addClass('offset-md-2');
                        });
                    }else{
                        path = 'assets/'+value+'-image.jpg';
                        imageDiv = '<div class="card-image col-md-4"><img src="'+path+'" class="img-fluid swap-image" /></div>';
                        
                        if($('.card-image').length > 0){
                            if($cardBody.hasClass('offset-md-2')){
                                $cardBody.removeClass('offset-md-2');

                                $('.card-image').find('img').attr('src', path)
                                                .parent()
                                                .delay(800)
                                                .fadeIn(600);

                            }else{
                                $('.card-image').fadeOut(500,function(){ 
                                    $(this).find('img').attr('src', path);
                                })
                                .fadeIn(500);
                            }
                            
                        }else{
                            $cardBody.after(imageDiv)
                                    .addClass('col-md-8')
                                    .removeClass('offset-md-2');

                            $('.card-image').delay(800)
                                            .fadeIn(600);
                        }       
                    }
                });
                return false;
            },
            setDonationAmout: function(){
                var $customAmount = $('.custom-amount'),
                    $donationOption = $('.donation input[type=radio]');

                $customAmount.on('click', function(){
                    $donationOption.prop('checked', false);
                });

                $donationOption.on('click', function(){
                    $customAmount.val('');
                });
                return false;
            }
        };

    zebra.cache = app.cache || {};

    zebra.init($); // initialises the calls

    window.zebra = $.extend(app, zebra);
})(jQuery,window);

