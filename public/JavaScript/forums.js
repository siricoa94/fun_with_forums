const results = [];
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
        console.log("here are the results: "+ JSON.stringify(results));
        for(let i = 0; i < length; i++){
            for(let j = 0; j < forumList.length; j++){
                if(postList[i].userid === forumList[i].userid){
                    console.log("success " + forumList[i].username);
                    console.log("double success " + postList[i].posttitle);
                    $("#forum").append(forumList[i].username +"<br/>"+ postList[i].posttitle);
                    results.push({
                        username: forumList[i].username,
                        posttitle: postList[i].posttitle,
                        post: postList[i].post
                    });
                } else {
                    (error)
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