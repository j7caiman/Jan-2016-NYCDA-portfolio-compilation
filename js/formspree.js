$("#sendMessage").click(function() {
  var data = {
    email: $("#email").val(),
    content: $("#textarea1").val(),
  };

  $.ajax({
    method: "POST",
    url: "https://formspree.io/j7caiman+codeSchoolFormspree@gmail.com",
    data: data,
    dataType: "json",
    success: function() {
      Materialize.toast("Thank you for your email! I'll respond as soon as possible.", 3000);
    }
  });
});