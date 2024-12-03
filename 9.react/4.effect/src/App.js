import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  const loadData = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const randomId = Math.floor(Math.random() * 10) + 1;
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
      const result = await response.json();
      // console.log(result);
      console.log(randomId);
      setData(result);
    } catch (error) {
      setData({ error: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [count]);
  // 지겨볼 변수, 이 변수가 변경될 때 마다, 이 함수 안의 내용을 실행
  // 이 변수가 변경 되었을 때 발생되는 side-effect를 해결하기 위한 함수를 정의하는 곳
  // [] <-- 이거의 의미는 최초 1회만 실행

  // loadData();

  const renderData = () => {
    if (!data) {
      return <p>No data loaded.</p>;
    }
    if (data.error) {
      return <p style={{ color: "red" }}>데이터 로딩에 실패</p>;
    }
    return (
      <div>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    );
  };

  const clearHandler = async () => {
    setClearing(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    setData(null);
    setClearing(false);
  };

  return (
    <div className="container my-4">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)} disabled={loading}>
        {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
        {loading ? "Loading..." : "Load Data"}
      </button>

      <button
        className="btn btn-danger ms-3"
        onClick={clearHandler}
        disabled={clearing || loading || data === null}
      >
        {clearing ? (
          <>
            <span className="spinner-border spinner-border-sm me-2"></span>
            Clearing...
          </>
        ) : (
          "Clear"
        )}
      </button>

      {/* 결과를 출력할 공간 */}
      <div className="mt-4">
        {data ? (
          data.error ? (
            <div className="alert alert-danger">
              <p style={{ color: "red" }}>데이터 로딩에 실패</p>
            </div>
          ) : (
            <div className="alert alert-success">
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          )
        ) : (
          <div className="alert alert-secondary">
            <p>No data loaded.</p>
          </div>
        )}
      </div>

      {/* 위랑 똑같은 코드를 if 구문으로 작성 */}
      {/* <div className="mt-4">{renderData()}</div> */}
    </div>
  );
};

export default App;
