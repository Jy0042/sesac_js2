const Input = ({ setMessage }) => {
  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setMessage(newValue);
  };

  return (
    <div>
      <label>메세지 입력:</label>
      <input type="text" placeholder="메세지를 입력하세요" onChange={onChangeHandler} />
    </div>
  );
};

export default Input;
