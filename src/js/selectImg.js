(function($) {
    "use strict";
    $.fn.selectImg = function(options){
        var $selectObj = $(this),
            $cardBody = $(options.divName),
            folder = options.folderPath,
            postfix = options.postFix;
                      
        $selectObj.on('change', function(){
            var value = $(this).find(':selected').val(),
                path = '',
                imageDiv = '',
                target = options.targetDiv;
                 
            if(value === ''){
                $(target).fadeOut(500, function(){
                    $cardBody.addClass('offset-md-2');
                });
            }else{
                path = folder + value + postfix;
                imageDiv = '<div class="'+target.substring(1)+' col-md-4"><img src="'+path+'" class="img-fluid swap-image" /></div>';
             
                if($(target).length > 0){
                    if($cardBody.hasClass('offset-md-2')){
                        $cardBody.removeClass('offset-md-2');

                        $(target).find('img').attr('src', path)
                                .parent()
                                .delay(800)
                                .fadeIn(600);

                    }else{
                        $(target).fadeOut(500,function(){ 
                            $(this).find('img').attr('src', path);
                        })
                        .fadeIn(500);
                    }
                    
                }else{
                    $cardBody.after(imageDiv)
                            .addClass('col-md-8')
                            .removeClass('offset-md-2');

                    $(target).delay(800)
                            .fadeIn(600);
                }       
            }
        });
        return false;
    };
})(jQuery);