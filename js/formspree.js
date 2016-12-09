$("#sendMessage").click(function() {
  var emailTag = $("#email");
  var contentTag = $("#textarea1")

  if (!emailTag.hasClass("valid") || !validateEmail(emailTag.val()) || !contentTag.hasClass("valid")) {
    if (!emailTag.hasClass("valid") || !validateEmail(emailTag.val())) {
      emailTag.addClass("invalid");
    }
    if (!contentTag.hasClass("valid")) {
      contentTag.addClass("invalid");
    }

    return;
  }

  $.ajax({
    method: "POST",
    url: "https://formspree.io/j7caiman+codeSchoolFormspree@gmail.com",
    data: {
      email: emailTag.val(),
      content: contentTag.val(),
    },
    dataType: "json",
    success: function() {
      $('#emailSentModal').modal('open');
    }
  });

  // this is needed in order to adhere to formspree's validation, which is stricter than materialize's.
  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
});