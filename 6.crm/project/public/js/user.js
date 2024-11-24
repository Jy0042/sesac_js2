document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const genderSelect = document.getElementById("gender");

  state.endpoint = "user"; // 유저 탭 엔드포인트
  state.filters = {}; // 초기 필터 설정

  // 폼 제출 이벤트 처리
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    state.filters.name = nameInput.value.trim();
    state.filters.gender = genderSelect.value;
    state.currentPage = 1; // 검색 시 첫 페이지로 초기화
    state.updateData();
  });

  // 초기 데이터 로드
  state.updateData();
});
