document.addEventListener("DOMContentLoaded", () => {
  loadProFileData();
  document.getElementById("logout-button").addEventListener("click", logout);
});
const username = document.getElementById("username");
const email = document.getElementById("email");
const createdAt = document.getElementById("created-at");
const role = document.getElementById("role");

async function loadProFileData() {
  // try/catch 안 넣음 해야함
  const response = await fetch("/profile-data");

  if (response.ok) {
    const data = await response.json();
    username.textContent = data.username;
    email.textContent = data.email;
    createdAt.textContent = data.created_at;
    role.textContent = data.role;
  } else {
    console.log(response.status);
  }
}

async function logout() {
  const response = await fetch("/logout");
  if (response.ok) {
    alert("로그아웃 됨");
    window.location.href = "/";
  } else {
    console.error("로그아웃 실패");
  }
}
