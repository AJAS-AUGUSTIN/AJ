(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);




// -----------------------------------------------------

   let checkname = false;
    let checkemail = false;
    let checkphone = false;
    let checkmessage = false; 



 function checkname1() {
   let namevalue = $("#name").val()
   let nameRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   if (namevalue == "") {
     $("#error1").html("Name is Mandatory!")
   }
   else if(namevalue.length<3 || namevalue.length>20 ){
     checkname = true
     $("#error1").html("Please Enter a Valid Name")
   }
   else if (namevalue.match(nameRegex)) {
     checkname = true
     $("#error1").html("")
   }
 } 

 function checkemail1() {
   let emailvalue = $("#email").val()
   let emailRegex = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
   if (emailvalue == "") {
     $("#error2").html("E-mail is mandatory!")
   }
   else if (emailvalue.match(emailRegex)) {
     checkemail = true
     $("#error2").html("")
   }
   else {
     $("#error2").html("Invalid E-mail!")
     checkemail = false
   }
 }
 $('#email').keypress(function( email ) {
   if(email.which === 32) 
   return false;
   });

 

 function checkphone1() {
   let phonevalue = $("#phone").val()
   let phoneRegex = /[0-9]{10}/;
   let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   if (phonevalue == "") {
     $("#error3").html("Mobile number is mandatory!")
   }
   else if (phonevalue.match(phoneRegex)) {
     checkphone = true
     $("#error3").html("")
   }
   else if(phonevalue.match(messageRegex)){
     checkphone=false
     $("#error3").html("Please Enter a Valid Mobile Number")
   }
   else if(phonevalue.length==10){
     checkphone = true
     $("#error3").html("")
   }
   else{
     $("#error3").html("Please Enter 10 Digit Number")
     checkphone=false
   }
 }
 


 function checkmessage1() {
   let messagevalue = $("#message").val()
   console.log(messagevalue)
   let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   if (messagevalue.length==0) {
     $("#error4").html("Enter Something!")
     
   }
   else if (messagevalue.match(messageRegex)) {
     checkmessage = true
     $("#error4").html("")
   }
   else {
     $("#error4").html("")
     checkmessage = false
   }

 }

 $('#name').keypress(function(event){
  if (
      !event.key.match(/^[A-Za-z ]+$/) ||
      (this.value.slice(-1) == ' ' && event.key == ' ')||
      (this.value == '' && event.key == ' ')
    ) {
      event.preventDefault()
    }
   })


 $(document).ready(function () {
    $("#name").keyup(function () {
     checkname1()
    })

    $("#email").keyup(function () {
     checkemail1()
    })

    $("#phone").keyup(function () {
     checkphone1()
    })
    $("#message").keyup(function () {
     checkmessage1()
    })

   });


   $("#submit-form").submit((e)=>{
    e.preventDefault()
 
    console.log(checkname,checkemail,checkphone,checkmessage)
    if(checkname & checkemail & checkmessage &checkphone){
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxZVpP0P80Etslxt1zzD9DEAgNEzElnrdtH7tQM2ioNj1Z5YNeggGcQNx9eiU6ZNTd0oA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
}
    else{
alert("Please Fill The Form")

checkname1()
checkphone1()
checkmessage1()
checkemail1()

}
})

