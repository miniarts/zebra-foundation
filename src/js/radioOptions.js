(function($) {
    "use strict";
    $.fn.radioOptions = function(options){
        
        var $customAmount = $(options.inputClassName),
            $donationOption = $(this).find('input[type=radio]');

        $customAmount.on('keyup', function(){ 
            $donationOption.prop('checked', false);
        });

        $donationOption.on('click', function(){
            $customAmount.val('');
        });

        return false;
    };
})(jQuery);