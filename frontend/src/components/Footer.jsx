import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">Workshop Booking</p>
          <p>Helping students find the right events and register quickly.</p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p>help@workshopbooking.com</p>
          <p>+91 98765 43210</p>
        </div>
        <div>
          <p className="footer-title">Quick Links</p>
          <Link to="/home">Home</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}
