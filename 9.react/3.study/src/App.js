import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Message from "./Message";
import Input from "./Input";
import "./App.css";

const App = () => {
  const pageTitle = "Welcome to My Web Page";

  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  return (
    <div className="App">
      <Header title={pageTitle} />
      <main className="App-header">
        <h1>Hello</h1>
        <p>리액트 복습</p>
        <Counter count={count} setCount={setCount} />
        <Message count={count} msg={msg} />
        <Input setMsg={setMsg} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
