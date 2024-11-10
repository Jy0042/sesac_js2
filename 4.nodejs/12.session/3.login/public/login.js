document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginButton").addEventListener("click", login);
  document.getElementById("logoutButton").addEventListener("click", logout);

  checkLoginStatus();
});

function checkLoginStatus() {
  fetch("/check-login")
    .then((response) => {
      if (response.ok) {
        // showProfile(username);
        return response.json();
      } else {
        console.log("로그인 상태가 아님");
        throw new Error("로그인 안 된 사용자");
      }
    })
    .then((data) => {
      if (data && data.username) {
        console.log("checkLoginStatus");
        showProfile(data.username);
      }
    })
    .catch((error) => {
      console.log("로그인 상태가 아닙니다");
    });
}

// 위에 코드 async/await 으로 변경
// async function checkLoginStatusAsyncAwait() {
//   try {
//     const response = fetch("/check-login");
//     const data = await response.json();

//     if (data && data.username) {
//       console.log(data.username);
//       showProfile(data.username);
//     } else {
//       showLoginForm();
//     }
//   } catch {
//     console.log("로그인 상태가 아닙니다");
//     showLoginForm();
//   }
// }

function logout() {
  fetch("/logout").then((response) => {
    if (response.ok) {
      showLoginForm();
    }
  });
}

function login(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("로그인 버튼 클릭");

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (response.ok) {
      console.log("로그인 성공");
      // window.location.href = "/profile";
      showProfile(username);
    } else {
      console.log("로그인 실패");
    }
  });
}

function showProfile(username) {
  document.getElementById("loginFormContainer").style.display = "none";
  document.getElementById("profile").style.display = "block";
  document.getElementById("usernameSpan").innerText = username;
}
function showLoginForm() {
  document.getElementById("loginFormContainer").style.display = "block";
  document.getElementById("profile").style.display = "none";
}
