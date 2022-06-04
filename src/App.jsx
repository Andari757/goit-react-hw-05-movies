import { Routes, Route } from "react-router-dom";
import MovieDetailsPage from "pages/MovieDetailsPage";
import HomePage from "./pages/HomePage";
import Menu from "modules/Menu";
export function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}
