// asynchronous code
// console.log("1st");
// setTimeout(() => {
//   console.log("2nd");
// }, 2000);
// console.log("3nd");

// callback
// const result = () => {};
// const add = (num1, num2, print) => {};
//add(1, 2, result); // callback

// callback hell

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

const comments = [
  { post: 1, comment: "Nice programming" },
  { post: 2, comment: "Comment post 2" },
  { post: 1, comment: "Comment post 1" },
];
const ratings = [];

const getPost = (postId, callback) => {
  const post = posts.find((post) => post.id === postId);
  if (post) {
    callback(null, post);
  } else {
    callback("Post not found", undefined);
  }
};
const getComments = (postId, callback) => {
    const postcomments = comments.filter((comment) => comment.post === postId);
    if (postcomments) {
      callback(null, postcomments);
    } else {
      callback("Comments not found", undefined);
    }
};
// callback 1
getPost(1, (error, post)=>{
    if(error){
        console.log({"error in findind post": error});
        return null;
    }
    //callback 2
    const pId = post.id;        
    getComments(pId, (error, comments)=>{
        if(error){
            console.log({"error in findind comments": error});
            return [];
        }
        console.log({"Comments":comments});
    });
});