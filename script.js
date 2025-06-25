// Cuando se envía el formulario
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ocultar formulario
    this.style.display = 'none';
    
    // Mostrar mensaje de confirmación
    document.getElementById('confirmation-message').style.display = 'block';
});
