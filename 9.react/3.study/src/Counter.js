const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        감소
      </button>
    </div>
  );
};

export default Counter;
