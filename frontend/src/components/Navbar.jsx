
import {
  Search,
  Globe,
  LogIn,
  Menu,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Top Government Style Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">

          <div>
            An Environmental Education Initiative
          </div>

          <div className="top-links">
            <span>Accessibility</span>
            <span>English</span>
            <span>मराठी</span>
            <span>हिंदी</span>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">

        <div className="container nav-content">

          {/* Logo */}
          <div className="brand">

            <div className="brand-icon">
              <Leaf size={25} />
            </div>

            <div>
              <div className="brand-name">
                ECOQUEST
              </div>

              <div className="brand-tagline">
                Learn • Play • Act • Impact
              </div>
            </div>

          </div>

          {/* Menu */}
          <div className="nav-links">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#learning">Learning</a>

            <a href="#challenges">
              Challenges
            </a>

            <a href="#missions">
              Missions
            </a>

            <a href="#impact">
              Impact
            </a>

          </div>

          {/* Right Side */}
          <div className="nav-actions">

            <button className="icon-button">
              <Search size={19} />
            </button>

            <button className="language-button">
              <Globe size={18} />
              EN
            </button>

            <Link
  to="/login"
  className="login-button"
>
  <LogIn size={18} />
  Login
</Link>

            <button className="mobile-menu">
              <Menu size={22} />
            </button>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;