/**
 * jQuery hintText Plugin 1.0
 *
 * http://davidgodfrey.info/hintText
 *
 * Copyright (c) 2012 David Godfrey
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){
  $.fn.hintText = function(options) {

    var
      defaults = {
        hintColor: 'gray',
        
      },
      settings = $.extend({}, defaults, options);

    var test = document.createElement('input');
    var html5 = ('placeholder' in test);
            
    this.each(function() {
      var $this = $(this);
      //only run if the placehoder attribute isn't supported and there is text in placeholder to show
      if(html5 != true && $this.attr("placeholder") != ""){
        if ($this.val()=='') {
          $this.val($this.attr("placeholder"));
        }
        $this.css({color:settings.hintColor});

        $this.focusin(function(){
        if($this.val() === $this.attr('placeholder')){
            $this.val("");
            $this.addClass("hintRemoved");
            $this.css({color:''});
        }
        }).focusout(function(){
            if($this.val() === ""){
                $this.val($this.attr('placeholder'));
                $this.removeClass("hintRemoved");
                $this.css({color:settings.hintColor});
            }
        });      
      }
    });

    // returns the jQuery object to allow for chainability.
    return this;
  }  
})(jQuery);  
