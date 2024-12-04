const Input = ({ setMsg }) => {
  const onChange = (e) => {
    const NewValue = e.target.value;
    setMsg(NewValue);
  };

  return (
    <>
      <label>메세지 입력:</label>
      <input type="text" placeholder="메시지를 입력" onChange={onChange} />
    </>
  );
};

export default Input;
