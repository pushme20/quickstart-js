window.addEventListener('load', function(){

  var signInButton = document.getElementById('sign-in-button');
  signInButton.addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
});
