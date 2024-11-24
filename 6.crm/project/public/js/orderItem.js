document.addEventListener("DOMContentLoaded", () => {
  // 스토어 엔드포인트 설정
  state.endpoint = "order_item";
  state.filters = {}; // 스토어는 필터가 없으므로 빈 객체
  state.currentPage = 1; // 초기 페이지 설정

  // 초기 데이터 로드
  state.updateData();
});
