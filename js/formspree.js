$("#sendMessage").click(function() {
  var emailTag = $("#email");
  var contentTag = $("#textarea1")

  if (!emailTag.hasClass("valid") || !contentTag.hasClass("valid")) {
    if (!emailTag.hasClass("valid")) {
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
});