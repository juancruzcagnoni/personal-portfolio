// Form 
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending';

   const serviceID = 'default_service';
   const templateID = 'template_am5gjul';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent succesfully!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});