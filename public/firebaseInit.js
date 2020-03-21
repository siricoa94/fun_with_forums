var txtEmail = document.getElementById("emailInput");
var txtPassword = document.getElementById("passwordInput");
var logIn = document.getElementById("logIn");
var logOut = document.getElementById("logOut");
var signUp = document.getElementById("signUp");

$.ajax("/data", {
    type: "GET"
}).then(function(data) {
    console.log(data);
    console.log(data.forum);
});

signUp.addEventListener("click", e => {
    e.preventDefault();
    var email = txtEmail.value;
    var password = txtPassword.value;
    var auth = firebase.auth();
    var promise = auth.createUserWithEmailAndPassword(email, password);
    promise
    .catch(e => console.log(e.message)).then(function(){
        location.href = "forum"
    });
    let newUser = {
        username: email,
        userpassword: password,
    }
    console.log("this is the " + JSON.stringify(newUser));
    $.ajax("/api/forum", {
        type: "POST",
        data: newUser
      }).then(function() {
        console.log("created new user");
    });
});

logOut.addEventListener("click", e => {
    firebase.auth().signOut();
});
logIn.addEventListener("click", e => {
    e.preventDefault();
    var email = txtEmail.value;
    var password = txtPassword.value;
    var auth = firebase.auth();
    var promise = auth.signInWithEmailAndPassword(email, password);
    promise
    .catch(e => console.log(e.message)).then(function(){
        location.href = "forum"
    })
});

