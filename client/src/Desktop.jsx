import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ThemeToggle from "components/commons/ThemeToggle";
import { useTheme } from "store/ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { useCookies } from "react-cookie";

import Header from "components/commons/Header";
import Footer from "components/commons/Footer";
import Home from "pages/home/Home";
import Login from "pages/account/Login";
import Register from "pages/account/Register";
import Notice from "pages/notice/Notice";
import RouteEnterprise from "pages/enterprise/RouteEnterprise";
import RoutePrivate from "pages/private/RoutePrivate";
import RouteMyPage from "pages/mypage/RouteMyPage";
import RegisterComplete from "pages/account/RegisterComplete";

// Desktop 전체 컴포넌트
// 세션에 ID가 없을 경우 승인되지 않는 페이지 설정
function Desktop() {
  const [ThemeMode, toggleTheme] = useTheme();
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars

  return (
    <Router>
      <Header mode={ThemeMode} />
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={cookies.id ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={cookies.id ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="/register/complete"
            element={
              cookies.id ? <Navigate replace to="/" /> : <RegisterComplete />
            }
          />
          <Route
            path="/mypage/*"
            element={
              cookies.id ? <RouteMyPage /> : <Navigate replace to="/login" />
            }
          />
          <Route path="/notice/*" element={<Notice />} />
          <Route path="/enterprise/*" element={<RouteEnterprise />} />
          <Route path="/private/*" element={<RoutePrivate />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}
export default Desktop;
