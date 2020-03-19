$.ajax("/data", {
    type: "GET"
}).then(function(data) {
    console.log(data);
    console.log(data.forum);
});
$('#signUp').on('click', function(event){
    console.log('thisworks!');
    event.preventDefault();
    let newUser = {
        username: $("#emailInput").val(),
        userPassword: $("#passwordInput").val(),
        // user_id: firebase.auth.uid
    }
    console.log("this is the " + JSON.stringify(newUser));
    $.ajax("/api/forum", {
        type: "POST",
        data: newUser
      }).then(function() {
        console.log("created new user");
        // Reload the page to get the updated list
        // location.reload();
      });
})
