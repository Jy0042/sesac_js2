const Input = ({ setMsg }) => {
  return (
    <>
      <label>메시지 입력: </label>
      <input
        type="text"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        placeholder="글자 입력"
      />
    </>
  );
};

export default Input;
