const container = document.getElementById("scroll-container");
const itemPerLoad = 20; // 한 번에 로드할 아이템 수
let start = 0; // 시작 인덱스
let end = start + itemPerLoad; // 끝 인덱스
let hasMoreData = true; // 데이터가 남아 있는지 확인
const maxItemOnScreen = 100;

// 데이터를 가져오고 화면에 추가하는 함수
function fetchAndAppendData() {
  if (!hasMoreData) {
    console.log("더 이상 로드할 데이터가 없습니다.");
    return;
  }

  fetch(`/api/data?start=${start}&end=${end}`)
    .then((response) => {
      if (!response.ok) throw new Error("데이터 로드 실패");
      return response.json();
    })
    .then((items) => {
      if (items.length === 0) {
        hasMoreData = false; // 데이터가 더 이상 없음
        console.log("모든 데이터를 로드했습니다.");
        return;
      }

      items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.textContent = item;
        container.appendChild(itemElement);
      });

      // 오래된 데이터 삭제
      let itemsToRemove = container.children.length - maxItemOnScreen;
      if (itemsToRemove > 0) {
        console.log("지워야할 갯수는? ", itemsToRemove);
        // for (let i = 0; i < itemsToRemove; i++) {
        while (itemsToRemove-- > 0) {
          container.removeChild(container.lastElementChild);
        }
      }

      // 업데이트: 가져온 데이터만큼 start 증가
      start += items.length;
      end = start + itemPerLoad;
    })
    .catch((error) => console.error("데이터 로드 실패: ", error));
}

// 초기 데이터 로드
fetchAndAppendData();

function fetchAndAppendPrevData() {
  const firstItem = container.firstElementChild;
  console.log(firstItem);

  const pend = firstItem ? parseInt(firstItem.textContent.replace("Item", "")) - 1 : 0;
  const pstart = pend - itemPerLoad;

  console.log(`이전 데이터 로딩..${pstart}..${pend}`);
  fetch(`/api/data?start=${pstart}&end=${pend}`)
    .then((response) => {
      if (!response.ok) throw new Error("데이터 로드 실패");
      return response.json();
    })
    .then((items) => {
      items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.textContent = item;
        container.insertBefore(itemElement, firstItem);
      });
      const firstItemHeight = firstItem.clientHeight;
      const BeforeLoadingPos = firstItemHeight * items.length;
      window.scrollTo(0, BeforeLoadingPos);
    });
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("화면 끝에 있음!!");
    console.log(`시작:${start}, 끝:${end}`);
    fetchAndAppendData();
  } else if (window.scrollY === 0) {
    fetchAndAppendPrevData();
  }
});
