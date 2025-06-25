document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('email-input');
  const message = document.getElementById('confirmation-message');

  if (input.value) {
    console.log("Correo capturado:", input.value);
    this.classList.add('hidden');
    message.classList.remove('hidden');
  }
});
