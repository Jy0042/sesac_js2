import axios from "axios";

// 특정 사용자의 게시글
const userId = 1;
const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

const getUserPosts = async () => {
  try {
    const response = await axios.get(postUrl);
    console.log("1번 유저의 포스팅: ", response.data);
  } catch (error) {
    console.error("Error fetching posts: ", error.message);
  }
};

const getPostComments = async (postId) => {
  const commentUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  const response = await axios.get(commentUrl);
  console.log(`게시글 ${postId}의 코멘트: `);
  const comments = response.data;
  comments.forEach((comment) => {
    console.log(comment.name);
  });
};

// getUserPosts();

getPostComments(3);
