import { useEffect } from "react";

const Message = ({ count, msg }) => {
  useEffect(() => {
    document.title = msg || "기본 타이틀";
  }, [msg]);

  useEffect(() => {
    //최초 1회(페이지가 렌더링될때) 호출되는것
    console.log("컴포넌트 마운팅");
    return () => {
      console.log("컴포넌트 언마운팅");
    };
  });

  useEffect(() => {
    document.body.style.backgroundColor = count % 2 === 0 ? "lightblue" : "lightcoral";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  return (
    <>
      <h3>메세지: {msg}</h3>
      {count > 10 && <p>많이 클릭했넹</p>}
      {count < 0 && <p>음수임 잘못 클릭함?</p>}
    </>
  );
};

export default Message;
