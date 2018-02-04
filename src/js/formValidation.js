(function($) {
    "use strict";
    $.fn.formValidation = function(options){
        
        var $form = $(this),
            $select = $form.find('select'),
            $inputText = $form.find('input'+options.inputClassName+'[type=text]'),
            $radio = $form.find('input[type=radio][name='+options.radioName+']');

        function showHideError(){
            $('span.error-msg').remove();
            $('.is-invalid').after('<span class="error-msg text-danger">Not valid</span>');
        }

        function checkRadio(el){ 
            var checked = false;

            $.each(el, function(){
                if($(this).is(':checked')){
                    checked = true;
                }
            }); 
            if(checked === false){
                checkInput($inputText);
            }
        }

        function checkInput(el){  
            var $inputBox = $(el);
            if($inputBox.val() < 11){
                $inputBox.val('').addClass('is-invalid');
            }else{
                $inputBox.removeClass('is-invalid');
            }
            return false;
        }

        function checkSelect(){
            if($select.val() === ''){
                $select.addClass('is-invalid');
            }else{
                $select.removeClass('is-invalid');
            }
            return false;
        }

        $select.on('blur', function(){
            checkSelect(this);
            showHideError();
        });

        $inputText.on('blur', function(){
            checkInput(this);
            showHideError();
        });

        $radio.on('click', function(){
            $inputText.removeClass('is-invalid');
            showHideError();
        });

        $form.submit(function(e){
            checkRadio($radio);
            checkSelect();
            showHideError();
            e.preventDefault();
        });

        return false;
    };
})(jQuery);