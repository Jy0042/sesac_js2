document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const username = document.getElementById("username");

  updateUsers();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = username.value;
    if (!name) {
      alert("이름 입력하세요");
      return;
    }

    registerUser(name);
  });
});

function registerUser(name) {
  fetch("/user", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name }), // name=name 의 값
  })
    .then((response) => {
      if (response.ok) {
        // alert("등록 성공");
        username.value = "";
        updateUsers();
      } else {
        alert("등록 실패");
      }
    })
    .catch((error) => {
      alert(`등록 중에 오류 발생 ${error.message}`);
    });
}

function updateUsers() {
  fetch("/user")
    .then((response) => {
      const result = response.json();
      // console.log(result);
      return result;
    })
    .then((users) => {
      // 결과 출력할 곳?
      console.log(users);
      const userTable = document.getElementById("userTable");
      userTable.innerText = "";

      if (Object.keys(users).length === 0) {
        // 사용자가 없는 경우
        const row = document.createElement("div");
        row.textContent = "등록된 사용자가 없습니다";
        userTable.appendChild(row);
      } else {
        // 사용자가 한명이라도 있는 경우
        for (const key in users) {
          const row = document.createElement("div");
          row.innerText = `ID: ${key}, Name: ${users[key]}`;
          userTable.appendChild(row);

          // 수정 버튼 추가
          const modifyButton = document.createElement("button");
          modifyButton.textContent = "수정";
          row.appendChild(modifyButton);

          // 삭제 버튼 추가
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "삭제";
          deleteButton.addEventListener("click", () => deleteUser(key));
          row.appendChild(deleteButton);

          // 위에 모든 내용(즉 한줄을 테이블에 삽입)
          userTable.appendChild(row);
        }
      }
    })
    .catch((error) => {
      console.error("사용자를 불러오기 실패", error.message);
      alert("사용자 로딩 오류");
    });
}

function deleteUser(userId) {
  fetch(`/user/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // alert("삭제 성공");
        updateUsers();
      } else {
        alert("삭제 실패");
      }
    })
    .catch((error) => {
      console.error("삭제 중 오류??", error.message);
      alert("삭제 중 오류가 발생");
    });
}

function modifyUser(userId) {
  const name = prompt(username);
}
