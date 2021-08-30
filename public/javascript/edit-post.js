//JS code for editing posts
async function editFormHandler(event) {
  event.preventDefault();

  //Get the title and content from the HTML fields, and get the id of the post
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('textarea[name="post-content"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  //Send a PUT request with the title and content
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  //If response is ok then redirect to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

//Listen for the submit button to be clicked
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
