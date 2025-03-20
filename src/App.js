import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AdminRoutes from "./layouts/admin";

function App() {
  return (
    <Router basename="">
      <Routes>

        {/* 기본 홈 페이지 */}
        <Route path="/" element={<AdminRoutes />} />

        {/* admin 하위 경로 관리 */}
        <Route path="admin/*" element={<AdminRoutes />} />

      </Routes>
    </Router>
  );
}


export default App;
