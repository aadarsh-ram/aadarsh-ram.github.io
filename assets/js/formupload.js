var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzhS-YdS_sLpo_q4JVpQj5eAL72AO4oh1aL2ZbRydWdR7wR0lM/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})