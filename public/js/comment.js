// const addComment = document.querySelector('.addComments');
// const comment = document.querySelector('.userComment');
// addComment.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log(comment.value);
//     const response = fetch('/comments',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({body:comment.value})
//     }).then(function(res){
//         return res.json();
//     }).catch(function(error){
//         console.log(error);
//     })

// })
const commentForm = document.querySelector('.addComments');
const commentInput = document.querySelector('.userComment');

commentForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const comment = commentInput.value.trim();
    const id = commentForm.dataset.id;
    console.log(id);
    console.log(commentInput.value);
    const response = fetch('/',{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({ comments: comment, id:id })
    }).then(function(res){
        return res.json();
    }).catch(function(error){
        console.log(error);
    });
});
