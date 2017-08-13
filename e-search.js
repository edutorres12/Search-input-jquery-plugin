//plugin e-search.js by Eduardo Torres, for more documentation visit: https://github.com/edukni/Search-input-jquery-plugin


(function($){
    $.fn.extend({
        search: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
                search = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                // Chrome Fix (Use keyup over keypress to detect backspace)
                // thank you @palerdot
                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    // This catches the backspace button in chrome, but also prevents
                    // the event from triggering too preemptively. Without this line,
                    // using tab/shift+tab will make the focused element fire the callback.
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    
                    // Check if timeout has been set. If it has, "reset" the clock and
                    // start over again.
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){


			     		var valor = el.value.toLowerCase();
			     		if(valor){

			     		$(".containerItems").children().fadeOut('fast');
			     		$(".containerItems [data-search*="+valor+"]").fadeIn('fast');

			     		}else{

                          $(".containerItems").children().fadeIn('fast');
        

                        }

                        

                        search(el);

                    }, timeout);
                }).on('blur',function(){
     	   				//when leaving the input

                   		search(el);
                });
            });



        }
    });
})(jQuery);




