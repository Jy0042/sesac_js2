const maxPageButtons = 5; // 최대 표시할 페이지 버튼 수
const itemsPerPage = 20; // 한 페이지에 출력할 데이터 수

// 상태 관리 객체
const state = {
  endpoint: "",
  filters: {},
  currentPage: 1,
};

// 테이블 렌더링 함수
function renderTable(data, theadId, tbodyId) {
  const thead = document.getElementById(theadId);
  const tbody = document.getElementById(tbodyId);

  // 테이블 초기화
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // 테이블 헤더 생성
  if (data.length > 0) {
    const headerRow = document.createElement("tr");
    Object.keys(data[0]).forEach((field) => {
      const th = document.createElement("th");
      th.textContent = field;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
  }

  // 현재 페이지에 해당하는 데이터만 출력
  const startIndex = (state.currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  pageData.forEach((row) => {
    const bodyRow = document.createElement("tr");
    Object.values(row).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      bodyRow.appendChild(td);
    });
    tbody.appendChild(bodyRow);
  });

  // 페이지네이션 UI 업데이트
  updatePagination(data.length);
}

// 페이지네이션 업데이트 함수
function updatePagination(totalItems) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 이전 버튼
  const prevButton = document.createElement("button");
  prevButton.textContent = "Prev";
  prevButton.disabled = state.currentPage === 1;
  prevButton.addEventListener("click", () => {
    state.currentPage--;
    state.updateData(); // 데이터 갱신
  });
  pagination.appendChild(prevButton);

  // 페이지 버튼 표시 범위 계산
  const startPage = Math.max(1, state.currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = state.currentPage === i ? "active" : "";
    pageButton.addEventListener("click", () => {
      state.currentPage = i;
      state.updateData();
    });
    pagination.appendChild(pageButton);
  }

  // 다음 버튼
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = state.currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    state.currentPage++;
    state.updateData();
  });
  pagination.appendChild(nextButton);
}

// 데이터 요청 함수
async function fetchData(endpoint, queryParams = {}) {
  try {
    const query = new URLSearchParams(queryParams).toString();
    const response = await fetch(`/api/${endpoint}?${query}`);
    if (!response.ok) throw new Error(`데이터 요청 실패: ${response.status}`);
    const data = await response.json();
    renderTable(data, "thead", "tbody");
  } catch (error) {
    console.error("데이터 요청 중 오류 발생:", error);
  }
}

// 상태 객체를 이용한 데이터 갱신
state.updateData = function () {
  fetchData(this.endpoint, this.filters);
};
