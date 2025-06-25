document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    const confirmationMessage = document.getElementById('confirmation-message');

    console.log("Correo capturado:", emailInput.value);

    emailInput.value = '';
    this.classList.add('hidden');
    confirmationMessage.classList.remove('hidden');
});
