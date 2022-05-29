$(document).ready(function(){
    $(".nav-item").click(function() {
    $(".nav-item").removeClass("active");
    $(this).addclass("active");
     });
    
     $("#toggler").click(function(event) {
         $('#wrap').toggleClass('toggled');

         var right = $('.sidebar').css("right");
         if (right == '0px')
         {
           
             $('.sidebar').css({ 'right': '-17rem' });
             $('.layer').fadeOut();
       
         }
         else {
            $('.sidebar').css({ 'right': '0'});
            $('.layer').fadeIn(); 
            
           

                
            $('.log_in').css({ 'left': '-24rem' });
        
            
         }
     });


         
     $("#toggler_login").click(function(event) {
        $('#wrap_login').toggleClass('toggled');

        var left = $('.log_in').css("left");
        if (left == '0px')
        {
         
            $('.log_in').css({ 'left': '-24rem' });
            $('.layer').fadeOut();
    
        }
        else {
         
            $('.log_in').css({ 'left': '0'});
           $('.layer').fadeIn(); 



           $('.sidebar').css({ 'right': '-17rem' });
            
      
        }
    });


     $('.layer').click(function () {
         $('.sidebar').css({ 'right': '-17rem'});
         $('.log_in').css({ 'left': '-24rem' });
         $('.layer').fadeOut();
     });
   
     $(".search-icon").click(function () {
         $(".search-input").slideToggle("slow");
     });
     
    });
