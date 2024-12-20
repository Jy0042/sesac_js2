import express from "express";
import morgan from "morgan";
import axios from "axios";
import nunjucks from "nunjucks";
import "dotenv/config";

const app = express();
const PORT = 3000;
const API_KEY = process.env.YOUTUBE_API_KEY;
const env = nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// 사용자 정의 필터를 추가
env.addFilter("stringify", function (obj) {
  return JSON.stringify(obj);
});

app.set("view engine", "html");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", async (req, res) => {
  // 여기에서 실제로 유튜브에 검색해서 결과를 반환
  const query = req.query.q;
  if (!query) {
    return res.status(400).send("입력 인자 없음");
  }

  const url = "https://www.googleapis.com/youtube/v3/search";

  const params = {
    part: "snippet",
    q: query,
    type: "video",
    maxResult: 10,
    key: API_KEY,
  };

  try {
    const response = await axios.get(url, { params });

    // 왕창 다 던져주기
    // const videos = response.data.items;

    // 필요한 데이터만 골라서 주기
    const videos = response.data.items.map((item) => ({
      videoId: decodeHtmlEntities(item.id.videoId),
      title: decodeHtmlEntities(item.snippet.title),
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.default.url,
    }));
    console.log(videos);
    res.render("index", { videos });
  } catch (error) {
    console.log("요청 오류", error);
    return res.status(500).send("알수없는 서버 오류");
  }
});

function decodeHtmlEntities(text) {
  const entities = {
    "&#39;": "'",
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
  };

  // 정규식을 사용하여 매칭되는 엔티티를 실제 문자로 변환
  return text.replace(/&#39;|&quot;|&amp;|&lt;|&gt;/g, (match) => entities[match] || match);
}

app.get("/play", (req, res) => {
  const videoId = req.query.videoId;
  const videos = JSON.parse(decodeURIComponent(req.query.videos || "[]"));
  // console.log(videos);

  const selectedVideo = videos.find((video) => video.videoId === videoId);

  if (!selectedVideo) {
    return res.status(404).send("비디오를 찾을 수 없습니다.");
  }

  res.render("index", { videos, selectedVideo });
});

app.listen(PORT, () => {
  console.log("서버 레디");
});
