$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
   
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   
    if (target.length) {
     
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1500, function() {
     
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus(); 
        };
      });
    }
  }
})
//animations
function BookService() {
 
            let name = getElement('fullname');
            let email = getElement('email');
            let telephone = getElement('telephone');
            let dateofservice = getElement('dateofservice');
            let dateofdeliver = getElement('dateofdeliver');
            let vechilenumber = getElement('vechilenumber');
            let Addressline = getElement('Addressline');
           

      document.getElementById('alertBox').style.display='block';
      setTimeout(ClearBox,3000);
      //claer alertBox
           function ClearBox(){
          
               document.getElementById('alertBox').style.display='none';
               
           }
     
    
   

           
}
//get all elements from DOM
function getElement(id) {
 return document.getElementById(id).value;
}
//clear Input after submition


