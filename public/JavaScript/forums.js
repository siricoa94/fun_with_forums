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

    for(let i = 0; i < length; i++){
        let newList = "<li>" + "<h1>"+ postList[i].posttitle+ "</h1>" + "<p>"+ postList[i].post + "</p>"+"</li>"
        $("#forum").append(newList);
    }
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