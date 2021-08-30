//JS code to handle signup
async function signupFormHandler(event) {
    event.preventDefault();
  
    //Get teh username, email and password from the HTML fields
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //If username, email and password fields have been filled in
    //send a POST request with the username, email and password
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      //If response is OK, redirect to login page
      if (response.ok) {
        console.log('success');
        document.location.replace('/login')
      } else {
        alert(response.statusText);
      }
    }
  }

  //Listen for the submit button to be clicked
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);