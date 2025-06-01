import { useTheme } from "../context/ThemeContext";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="setting-card">
      <h1>Ayarlar</h1>
      <p>Mevcut Tema: {theme}</p>
      <button onClick={toggleTheme}>Temayı Değiştir</button>
    </div>
  );
}
