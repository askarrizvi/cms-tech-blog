//JS code to handle post deletion
async function deleteFormHandler(event) {
  event.preventDefault();

  //Get the id of the post
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  //Send a DELETE request with the id
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  //If response is ok, redirect to dashboard
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

//Listen for delete button click
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
