window.onload = () => {
  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("new-quote");

  // 서버에서 명언 가져오는 함수
  const fetchQuote = async () => {
    try {
      const response = await fetch("/api/quote"); // 서버의 명언 API 엔드포인트
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      quoteElement.innerText = data.quote;
    } catch (error) {
      quoteElement.innerText = "명언을 가져오는데 실패했습니다. 다시 시도해주세요.";
    }
  };

  // 버튼 클릭 이벤트 리스너 추가
  button.addEventListener("click", fetchQuote);

  // 페이지 로드 시 초기 명언 표시
  fetchQuote();
};
