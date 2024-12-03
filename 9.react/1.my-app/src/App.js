import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

// 실무적은 패턴으로는 const가 많이 쓰임
// function 으로 작성해도 무방
function App() {
  // const App = () => {

  const pageTitle = "Welcome to My Website";

  return (
    <div className="App">
      <Header title={pageTitle} />
      <main className="App-header">
        <h1>Hello, World!</h1>
        <p>안녕하세요, 리액트 학습자</p>
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
