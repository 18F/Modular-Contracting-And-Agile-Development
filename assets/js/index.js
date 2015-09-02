(function (document, window, $) {
  $(document).ready(function(){
    ajaxifyContactForm();
  });

  function ajaxifyContactForm () {
    var contactForm = $('#contact'),
        originalUrl = contactForm.attr('action');
        contactBtn  = $('[type=submit]'),
        alert       = $('#contact-alert');

    contactBtn.on('click', function (e) {
      e.preventDefault();
      var url = [originalUrl, contactForm.serialize()].join('?'),
          img = $('<img></img');

      img.on('error', function (e) {
        console.log('known error', e);
        window.setTimeout(function() {
          alert.fadeOut();
        }, 1000);
      });

      alert.fadeIn(0);
      contactBtn.attr('disabled', true);
      img.attr('src', url);

    });
  }
})(document, window, $);
