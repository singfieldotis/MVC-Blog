async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#typeEmail').value.trim();
  const password = document.querySelector('#typePassword').value.trim();

  console.log(email)
  console.log(password)

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}



document.querySelector('.login-form').addEventListener('submit', loginFormHandler);