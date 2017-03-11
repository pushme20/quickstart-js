window.addEventListener('load', function(){

  var signInButton = document.getElementById('sign-in-button');
  signInButton.addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    console.log("signInWithPopup");
  });

  var signOutButton = document.getElementById('sign-out-button');
  signOutButton.addEventListener('click', function(){
    firebase.auth().signOut();
    console.log("signOut");
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user.displayName);
    } else {
      // User is signed out.
      console.log("User logged out");
    }
  });
});
