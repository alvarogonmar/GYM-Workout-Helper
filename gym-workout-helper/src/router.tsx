import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import ExercisePage from "./views/ExercisePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/favorites" element={<ExercisePage />} />
      </Routes>
    </BrowserRouter>
  );
}
