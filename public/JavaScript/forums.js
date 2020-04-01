var logOut = document.getElementById("logOut");
var editBtn = document.getElementById("#editPostBtn");
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
            
            results.push({
                username: forumList[j].username,
            })
            for(let i = 0; i < length; i++ ){
                if(postList[i].userid === forumList[j].userid){
                    $("#cardContainer").append("<div class='postInfoContainer' id='postInfoContainer"+[i]+"'"+"</div>");
                    $("#postInfoContainer"+ [i]).append("<div class='postInfoContainerInner' id='postInfoContainerInner"+[i]+"'"+"</div>");
                    $("#postInfoContainerInner"+[i]+"").append("<h2 class='postCardTitle'>" + forumList[j].username + "</h2>");
                    $("#postInfoContainerInner"+[i]+"").append("<h4>"+ postList[i].posttitle + "</h4>"+"<h5 class='postedPost'>" + postList[i].post + "</h5>" + "<button id='editPostBtn' data-id='"+postList[i].id+"'>Edit Post</button>" + "<button id='deletePostBtn' data-id='"+postList[i].id+"'>Delete Post</button>");
                    results.push({
                        posttitle: forumList[j].username
                    });   
                }
            }
        }
    });
});
$('#submitPostBtn').on('click', function(event){
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
// logOut.addEventListener("click", e => {
//     firebase.auth().signOut();
//     location.href = "/"
// });
$(document).on('click', "#deletePostBtn", function(event){
    let id = $(this).data("id");
    console.log("this works" + id);
    $.ajax("/api/post/" + id, {
        type: "DELETE"
    }).then(function(){
        console.log("deleted post: " + id);
        location.reload();
    });
});
$(document).on('click', "#editPostBtn", function(event){
    event.preventDefault();
    console.log("edit button works!");
    let id = $(this).data("id");
    console.log(id + " Hey man I work");
    // location.href = "#fatherdiv";
    // displayDiv();
    let newpost = {
        post: $("#postBodyEdit").val(),
        posttitle: $("#postTitleEdit").val(),
    }
    console.log("this is the " + JSON.stringify(newpost));
    $.ajax("api/post/" + id, {
        type: "PUT",
        data: newpost
    }).then(function(){
        console.log("updated post: " + id);
        location.reload();
    });
});


function displayDiv(){
    let editDiv = document.getElementById("submitDiv");
    if(editDiv.style.display ==="none") {
        editDiv.style.display = "block";
    } else {
        editDiv.style.display = "none";
    }
}