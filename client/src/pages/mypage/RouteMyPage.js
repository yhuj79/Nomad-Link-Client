import { Routes, Route } from "react-router-dom";
import MyPage from "pages/mypage/MyPage";
import Resume from "pages/mypage/Resume";
import ResumeSave from "pages/mypage/ResumeSave";
import ResumeUpdate from "pages/mypage/ResumeUpdate";

// mypage 자식 Route
function RouteMypage() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/resume/save" element={<ResumeSave />} />
      <Route path="/resume/update" element={<ResumeUpdate />} />
    </Routes>
  );
}

export default RouteMypage;
