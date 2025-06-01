import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MovieDetailPage from "./pages/MovieDetailPage.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">🎬 Film Rehberi</h2>
        <div className="nav-links">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/favorites">Favoriler</Link>
          <Link to="/settings">Ayarlar</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
