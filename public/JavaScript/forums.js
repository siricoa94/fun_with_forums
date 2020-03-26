var logOut = document.getElementById("logOut");
$.ajax("/data/forum", {
    type: "GET"
}).then(function(data) {
    console.log(data);
    console.log(data.forum);
});
$.ajax("/data/post", {
    type: "GET"
}).then(function(data) {
    console.log(data);
    console.log(data.post);
    let postList= data.post;
    let length = postList.length;
    $.ajax("/data/forum", {
        type: "GET"
    }).then(function(newData){
        console.log(newData);
        console.log(newData.forum);
        let forumList = newData.forum;
        let results = [];
        console.log("here are the results: "+ JSON.stringify(results));
        for(let j = 0; j < forumList.length; j++){
            $("#forum").append("<h2>" + forumList[j].username + "</h2>");
            results.push({
                username: forumList[j].username,
            })
            for(let i = 0; i < length; i++ ){
                if(postList[i].userid === forumList[j].userid){
                    // console.log("success " + forumList[i].username);
                    console.log("double success " + postList[i].posttitle);
                    $("#forum").append(postList[i].posttitle +"<br/>" + postList[i].post + "<br>");
                    results.push({
                        posttitle: forumList[j].username
                    });   
                }
            }
        }
    });
});
$('#post').on('click', function(event){
    console.log('thisworks!');
    event.preventDefault();

    let newpost = {
        post: $("#postBody").val(),
        posttitle: $("#postTitle").val(),
        userid: firebase.auth().currentUser.uid
    }
    console.log("this is the " + JSON.stringify(newpost));
    $.ajax("/api/post", {
        type: "POST",
        data: newpost
      }).then(function() {
        console.log("created new post");
        // Reload the page to get the updated list
        location.reload();
      });
});
logOut.addEventListener("click", e => {
    firebase.auth().signOut();
    location.href = "/"
});