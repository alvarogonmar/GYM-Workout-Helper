import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import ExercisePage from "./views/ExercisePage";
import Layout from "./layouts/Layout";
import SearchPage from "./views/SearchPage";
import UserAccountPage from "./views/UserAccountPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/myexercises" element={<ExercisePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user" element={<UserAccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
