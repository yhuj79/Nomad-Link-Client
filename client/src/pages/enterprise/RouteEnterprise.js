import { Routes, Route } from "react-router-dom";
import Enterprise from "./Enterprise";
import RecruitComplete from "./RecruitComplete";
import RecruitDevelopers from "./RecruitDevelopers";
import RecruitForm from "./RecruitForm";

// enterprise 자식 Route
function RouteEnterprise() {
  return (
      <Routes>
        <Route path="/" element={<Enterprise />} />
        <Route path="recruit/form" element={<RecruitForm />} />
        <Route path="recruit/complete" element={<RecruitComplete />} />
        <Route path="recruit/developers" element={<RecruitDevelopers />} />
      </Routes>
  );
}

export default RouteEnterprise;
