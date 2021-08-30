//JS code to handle new posts
async function newFormHandler(event) {
    event.preventDefault();
  
    //Get the title and content from the HTML fields
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
  
    //Send a POST request with the title and content
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    //If the response is ok, then redirect to the dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  //Listen for the submit button to be clicked
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);