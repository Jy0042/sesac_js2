import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./userDetail.css";

const UserDetail = () => {
  const { userId } = useParams(); // URL에서 userId 추출

  // const users = [
  //   { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  //   { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  //   { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
  // ];

  // const user = users.find((u) => u.id === parseInt(userId));

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User Not Found");
        }
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => setError(error.message));
  }, [userId]);

  if (error) {
    // return <p style={{ color: "red", fontWeight: "bold" }}>에러발생: {error}</p>;
    return <p className="error-message">오류 : {error}</p>;
  }

  // 데이터가 로드되지 않았을 때 처리
  // if (!user) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h2>User Detail</h2>
      <p>유저 상세 페이지: {userId}</p>

      <p>
        <strong>이름:</strong> {user.name}
      </p>
      <p>
        <strong>이메일:</strong> {user.email}
      </p>
      <p>
        <strong>나이:</strong> {user.age}
      </p>
    </div>
  );
};

export default UserDetail;
