import { Routes, Route } from "react-router-dom";
import EmployEnterprises from "./EmployEnterprises";
import Private from "./Private";

// private 자식 Route
function RoutePrivate() {
  return (
    <Routes>
      <Route path="/" element={<Private />} />
      <Route path="/employ/enterprises" element={<EmployEnterprises />} />
    </Routes>
  );
}

export default RoutePrivate;
