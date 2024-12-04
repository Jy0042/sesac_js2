import { useState, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Counter from "./Counter";
import Input from "./Input";
import Message from "./Message";

const App = () => {
  const pageTitle = "Welcome to My WebSite";
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  const [showComponent, setShowComponent] = useState(true);

  const MyComponent = () => {
    useEffect(() => {
      console.log("컴포넌트 등장(마운팅)");
      return () => {
        console.log("컴포넌트 삭제? (언마운팅)");
      };
    }, []);

    return <div>내 새로운 컴포넌트</div>;
  };

  return (
    <>
      <Header title={pageTitle} />
      <h1>hello, world</h1>
      <main>
        <p>여기 메인 영역</p>
        <Counter count={count} setCount={setCount} />
        <Input setMsg={setMsg} />
        <Message msg={msg} count={count} />
        <button onClick={() => setShowComponent(!showComponent)}>MyComponent 토글</button>
        {showComponent && <MyComponent />}
      </main>

      <Footer />
    </>
  );
};

export default App;
