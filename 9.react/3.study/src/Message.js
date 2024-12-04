import "./Message.css";

const Message = ({ count, msg }) => {
  return (
    <>
      <p className="message">
        {msg}현재 값: {count}
        {count >= 5 && <p>{count}번 넘게 클릭</p>}
      </p>
    </>
  );
};

export default Message;
