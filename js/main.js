(function () {
  // Mobile menu
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight current page (works with /about, /about.html and /)
  var path = location.pathname.replace(/\/$/, '').split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav a').forEach(function (a) {
    var target = a.getAttribute('href').split('#')[0].replace('.html', '') || 'index';
    if (target === path) a.setAttribute('aria-current', 'page');
  });

  // Back to top
  var top = document.querySelector('.to-top');
  if (top) {
    window.addEventListener('scroll', function () {
      top.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    top.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById('contact-form');
  if (form) {
    var params = new URLSearchParams(location.search);
    var svc = params.get('service');
    if (svc && form.service) form.service.value = svc;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var subject = 'Consultation request: ' + (f.service.value || 'General enquiry');
      var body =
        'Name: ' + f.name.value + '\n' +
        'Email: ' + f.email.value + '\n' +
        'Phone: ' + (f.phone.value || '-') + '\n' +
        'Service: ' + (f.service.value || '-') + '\n\n' +
        f.message.value;
      window.location.href = 'mailto:contact@raoadvisorypartners.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var status = document.getElementById('form-status');
      if (status) status.textContent = 'Your email app is opening with your message ready to send. If nothing opens, email us directly at contact@raoadvisorypartners.com.';
    });
  }
})();
