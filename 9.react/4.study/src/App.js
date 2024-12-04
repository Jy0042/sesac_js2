import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      console.log(`New URL: ${url}`);
    }
  }, [url]);

  const loadData = async () => {
    setLoading(true);

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const randomId = Math.floor(Math.random() * 10) + 1;
      const requestUrl = `https://jsonplaceholder.typicode.com/posts/${randomId}`;
      setUrl(requestUrl);

      const response = await fetch(requestUrl);
      const result = await response.json();

      setData(result);
    } catch (error) {
      setData({ error: true });
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setData(null);
    setUrl("");
  };

  return (
    <div>
      <button onClick={loadData} disabled={loading}>
        Load Data
      </button>
      <button onClick={clearData}>Clear</button>

      <p>Request URL : {url || "요청 url 없음"}</p>

      <div>
        {data ? (
          data.error ? (
            <div>
              <p>데이터 로드 실패</p>
            </div>
          ) : (
            <div>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          )
        ) : (
          <div>
            <p>No data loaded.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
