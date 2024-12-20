// const fetch = require("node-fetch");
import fetch from "node-fetch";
import axios from "axios";

async function fetchExample() {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      console.log("에러");
      return;
    }

    const data = await response.json();
    console.log("fetch 데이터: ", data.title);
  } catch (error) {
    console.error("fetch 통신오류");
  }
}

async function axiosExample() {
  try {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts/1");
    // console.log("응답코드: ", response.status);
    console.log("axios 데이터: ", response.data.title);
  } catch (error) {
    console.log("axios 통신오류");
  }
}

(async () => {
  await fetchExample();
  await axiosExample();
})();
