document.addEventListener("DOMContentLoaded", () => {
  console.log("나의 js 코드");

  const userTable = document.getElementById("userTable");
  const form = document.getElementById("form");

  // form 버튼을 클릭해서 post
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // 폼 자체의 기본 기능 못하게 막기
    fetch("/user", {
      method: "POST",
    }).then();
  });

  // 시작할때 자동 로딩
  fetch("/user", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        console.log("성공");
        return response.json();
      } else {
        console.log("에러");
      }
    })
    // 위에서 리턴한 response.json 의 결과를 받아서 처리하는 곳
    .then((data) => {
      console.log(data);
    });
});
