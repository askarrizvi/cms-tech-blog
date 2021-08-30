//JS code to handle logging out
async function logout() {
  //Send a POSt request to logout
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    //If response is OK, redirect to the homepage
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  //Listen for the logout button to be clicked 
  document.querySelector('#logout').addEventListener('click', logout);