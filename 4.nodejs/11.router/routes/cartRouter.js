const express = require("express");
const router = express.Router();

// 라우트 체인
router
  .route("/")
  .get((req, res) => {
    res.send("상품 조회");
  })
  .post((req, res) => {
    res.send("상품 추가");
  })
  .put((req, res) => {
    res.send("상품 갯수 추가");
  })
  .delete((req, res) => {
    res.send("상품 삭제");
  });

module.exports = router;
