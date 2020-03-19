$.ajax("/data", {
    type: "GET"
}).then(function(data) {
    console.log(data);
    console.log(data.forum);
    let forumList= data.forum;
    let length = forumList.length;

    for(let i = 0; i < length; i++){
        let newList = "<li>" + "<h1>"+ forumList[i].username + "</h1>" + "<p>"+ forumList[i].post + "</p>"+"</li>"
        $("#forum").append(newList);
    }
});
$('#post').on('click', function(event){
    console.log('thisworks!');
    event.preventDefault();

    let newpost = {
        username: $("#postTitle").val(),
        post: $("#postBody").val()
    }
    console.log("this is the " + JSON.stringify(newpost));
    $.ajax("/api/forum", {
        type: "POST",
        data: newpost
      }).then(function() {
        console.log("created new post");
        // Reload the page to get the updated list
        location.reload();
      });
});
$('#signUp').on('click', function(event){
    console.log('thisworks!');
    event.preventDefault();
    let newUser = {
        username: $("#emailInput").val(),
        userPassword: $("#passwordInput").val(),
        // user_id: firebase.auth.user.uid
    }
    console.log("this is the " + JSON.stringify(newUser));
    $.ajax("/api/forum", {
        type: "POST",
        data: newUser
      }).then(function() {
        console.log("created new user");
        // Reload the page to get the updated list
        location.reload();
      });
})