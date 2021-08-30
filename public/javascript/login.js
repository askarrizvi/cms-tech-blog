  //JS code to handle login
  async function loginFormHandler(event) {
    event.preventDefault();
  
    //Get email and password from the HTML fields
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //If email and password fields are filled, send a POST request with email and password
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      //If response is OK, redirect to dashboard
      if (response.ok) {
        document.location.replace('/dashboard')
      } else {
        alert(response.statusText);
      }
    }
  }
  
  //Listen for submit button to be clicked
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);