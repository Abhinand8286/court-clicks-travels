document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = (form.name.value||'').trim();
      var email = (form.email.value||'').trim();
      var phone = (form.phone.value||'').trim();
      var message = (form.message.value||'').trim();
      if(!name || !email || !message){
        // Changed alert to use custom element for better accessibility/UX (required by prompt context)
        document.getElementById('form-status').textContent = 'Please fill required fields: Name, Email, Message.';
        document.getElementById('form-status').style.backgroundColor = '#fecaca';
        document.getElementById('form-status').style.color = '#dc2626';
        document.getElementById('form-status').style.display = 'block';
        return;
      }
      if(phone && phone.replace(/\D/g,'').length < 10){
        document.getElementById('form-status').textContent = 'Please enter a valid phone number.';
        document.getElementById('form-status').style.backgroundColor = '#fecaca';
        document.getElementById('form-status').style.color = '#dc2626';
        document.getElementById('form-status').style.display = 'block';
        return;
      }
      
      // Success Message
      document.getElementById('form-status').textContent = 'Thanks '+name+' — your enquiry was received by Court Clicks!';
      document.getElementById('form-status').style.backgroundColor = '#d1fae5';
      document.getElementById('form-status').style.color = '#065f46';
      document.getElementById('form-status').style.display = 'block';
      
      form.reset();
      
      setTimeout(function() {
          document.getElementById('form-status').style.display = 'none';
      }, 5000);
    });
  }
  
  // Navigation underline fix
  try{
    var links = document.querySelectorAll('.navlinks a');
    links.forEach(function(a){
      var href = a.getAttribute('href');
      var path = window.location.pathname;

      var isActive = false;
      if (path.endsWith(href) && href !== 'index.html') {
          isActive = true;
      } else if (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html'))) {
          isActive = true;
      }

      if(isActive){
        a.style.textDecoration = 'underline';
      }
    });
  }catch(e){}
});