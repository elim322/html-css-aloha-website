$(document).ready(function() {
  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true
  });

  // code for smooth scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // code for the email alert boxes
  $(".form-submit-button").on("submit", function(event) {
    event.preventDefault();

    if ($("#your-email").val() == "") {
      alert("You missed the field.");
    } else {
      alert("Thanks for subscribing!");
    }
  });

  //skip link bug fix 
  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
       $("#"+$(this).attr("href").slice(1)+"").focus();
    });
 });

 console.log('hellos');
 //adding items to cart 

 var itemCount = 0;
 $(".carousel-cell button").on("click", function(event) {
   event.preventDefault();
    itemCount++
   // try appending the item count to cart
    itemCount().append('.cart')

 });

  // end of document jquery
});
