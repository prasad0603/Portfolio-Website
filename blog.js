// Blog post array to store the posts
let blogPosts = [];

// Handle form submission and create new blog post
document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    // Create new post object
    const newPost = {
        id: Date.now(),
        title: title,
        content: content
    };
    
    // Add new post to blogPosts array
    blogPosts.push(newPost);
    
    // Clear form inputs
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    
    // Show notification
    showNotification('New post published successfully!');
    
    // Update the posts list
    displayPosts();
});

// Function to display the blog posts
function displayPosts() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';
    
    blogPosts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        postsList.appendChild(listItem);
    });
}

// Function to delete a post
function deletePost(id) {
    blogPosts = blogPosts.filter(post => post.id !== id);
    displayPosts();
}

// Function to show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.querySelector('p').textContent = message;
    notification.classList.remove('hidden');
    
    // Close notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Close notification manually
document.getElementById('close-notification').addEventListener('click', function() {
    document.getElementById('notification').classList.add('hidden');
});
