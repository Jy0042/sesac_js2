document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-button").addEventListener("click", login);
  document.getElementById("logout-button").addEventListener("click", logout);
  document.getElementById("profile-button").addEventListener("click", profile);

  checkLoginStatus();
});

async function checkLoginStatus() {
  const response = await fetch("/check-login");
  const data = await response.json();

  if (data && data.username) {
    console.log(data.username);

    showProfile(data.username);
  } else {
    showLoginForm();
  }
}

async function logout() {
  const response = await fetch("/logout");
  if (response.ok) {
    showLoginForm();
  } else {
    console.error("로그아웃 실패");
  }
}

function profile() {
  window.location.href = "/profile";
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
      showProfile(username);
    } else {
      console.log("로그인 실패");
      alert("로그인 실패");
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
