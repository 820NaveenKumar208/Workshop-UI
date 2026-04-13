import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function PageLayout({ children, darkMode, onToggleDarkMode }) {
  return (
    <div className="app-shell">
      <Navbar darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}
