import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { StepOne } from "./pages/step1/Step1";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/form" element={<StepOne />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
