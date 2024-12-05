import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <Router>
      <div>
        <h1>사용자 정보 요청 웹사이트</h1>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
