export function fetch_checkLoginStatus() {
  return fetch("/api/check-login")
    .then((response) => response.json())
    .then((userData) => {
      if (userData.username) {
        document.getElementById("user-info").innerHTML = `
        ${userData.username} 님
        <span class="logout-btn" id="logout">Logout</span>
        `;

        document.getElementById("user-info").style.display = "block";
        document.getElementById("logout").addEventListener("click", logout);
        // showProfile(userData.username);
        return userData.username;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("로그인 체크 오류");
      return null;
    });
}

function logout() {
  fetch("/api/logout")
    .then((response) => {
      if (response.ok) {
        // 로그아웃 성송
        return response.json();
      } else {
        // 로그아웃 실패
      }
    })
    .then((data) => {
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    });
}
