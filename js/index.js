
// StickyMenu 

$(document).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('header').addClass('sticky');
    $('header nav').addClass('sticky');
  }

});

// ContactForm

function contactForm() {
  var contactName = document.getElementById("name").value;
  var contactEmail = document.getElementById("email").value;
  var contactMessage = document.getElementById("message").value;
  var contactError_message = document.getElementById("error_message");

  contactError_message.style.padding = "1em";

  var text;

  if (contactName.length < 3) {
    text = "The name should have more than 3 characters";
    contactError_message.innerHTML = text;
    return false;
  }

  if (contactEmail.indexOf("@") == -1 || contactEmail.length < 6) {
    text = "Enter a valid Email";
    contactError_message.innerHTML = text;
    return false;
  }

  if (contactMessage.length <= 30) {
    text = "Message should have at least 30 characters";
    contactError_message.innerHTML = text;
    return false;
  }

  alert("Thanks for your message!");
  return true;

}
