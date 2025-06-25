document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('email-input');
  const email = input.value.trim();
  const confirmation = document.getElementById('confirmation-message');
  const form = document.getElementById('email-form');

  if (email) {
    fetch("https://script.google.com/macros/s/AKfycbygITUcV2W1NVRS5UMIT6-aJrkdCREUxLZGTcWbPijMkYoxCpp9nP6FuSjZdMmtdQHiuQ/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}`
    });

    form.classList.add('hidden');
    confirmation.classList.remove('hidden');
    input.value = "";
  }
});
