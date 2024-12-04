import { useState, useEffect } from "react";

const Counter = ({ count, setCount }) => {
  const incHandler = () => setCount(count + 3);
  const decHandler = () => setCount(count - 1);
  const [color, setColor] = useState("red");

  useEffect(() => {
    setColor("black");
    console.log(`카운트변수 변경됨: ${count}`);

    // Cleanup 함수라고 부르는 이 변화가 발생 했을 때 선행해서
    return () => {
      setColor("red");
      console.log(`나는 클린업 함수: ${count}`);
    };
  }, [count]);

  return (
    <>
      <h2 style={{ color }}>Counter</h2>
      <p>변수값 : {count}</p>

      <button onClick={decHandler}>-1 증가</button>
      <button onClick={incHandler}>+3 감소</button>
    </>
  );
};

export default Counter;
