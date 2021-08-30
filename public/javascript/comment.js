//JS code to handle new comments
async function commentFormHandler(event) {
    event.preventDefault();
  
    //Get the content from the HTML field and get the post id of the post
    const content = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  //If there is content, send a POST request with the post_id and content 
    if (content) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            content
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        //If response is ok, reload the page
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  //Listen for the submit button to be clicked
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);