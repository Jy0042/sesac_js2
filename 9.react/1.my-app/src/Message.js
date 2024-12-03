import "./Message.css";

const Message = ({ count }) => {
  return <p className="message">현재 카운터 값은: {count}</p>;
};

export default Message;
