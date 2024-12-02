document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add validation and backend call here
    alert('Logged in successfully!');
    window.location.href = "my-books.html";
});

// Google login functionality
function onGoogleSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Logic to authenticate the user using the Google ID token and backend
}