import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Main } from "./components/Main";
import { BoardWrite } from "./components/BoardWrite";
import "./App.css";

const App = () => {
  const MainTitle = "게시판";
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      if (!response.ok) {
        throw new Error("데이터 가져오기 실패..");
      }
      const data = await response.json();
      console.log("받아온 데이터:", data);
      setPosts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("게시글 삭제 실패..ㅠ");
      }

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      alert("게시글이 삭제 되었습니다");
    } catch (error) {
      console.error(error.message);
    }
  };

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <Header title={MainTitle} />
      <Main posts={posts} deletePost={deletePost} />
      <BoardWrite addPost={addPost} />
    </>
  );
};

export default App;
