document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const userId = document.getElementById('userId').value;

  if (userId) {
    getUserData(userId);
    getUserPosts(userId);
  }
});

function getUserData(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const userData = `
        <h2>User Details</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      document.getElementById('userData').innerHTML = userData;
    });
}

function getUserPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
      const postContainer = document.getElementById('userPosts');
      postContainer.innerHTML = '<h2>User Posts</h2>';
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button data-postid="${post.id}" onclick="showComments(${post.id})">Show Comments</button>
          <div id="comments-${post.id}" class="comments"></div>
        `;
        postContainer.appendChild(postElement);
      });
    });
}

function showComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(comments => {
      const commentContainer = document.getElementById(`comments-${postId}`);
      let commentList = '<h4>Comments:</h4>';
      comments.forEach(comment => {
        commentList += `
          <p><strong>${comment.name}:</strong> ${comment.body}</p>
        `;
      });
      commentContainer.innerHTML = commentList;
    });
}
