import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Leaf,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/login/",
        {
          username: username,
          password: password,
        }
      );

      if (response.data.success) {
        // Save login information temporarily in browser
        localStorage.setItem(
          "ecoquest_access_token",
          response.data.access
        );

        localStorage.setItem(
          "ecoquest_refresh_token",
          response.data.refresh
        );

        localStorage.setItem(
          "ecoquest_username",
          response.data.username
        );

        setMessage("Login successful! Welcome to EcoQuest 🌱");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message ||
            "Invalid username or password."
        );
      } else {
        setError(
          "Unable to connect to the EcoQuest server."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-background"></div>

      <div className="login-overlay"></div>

      <div className="login-container">

        {/* LEFT SIDE */}

        <div className="login-information">

          <div className="login-brand">

            <div className="login-brand-icon">
              <Leaf size={28} />
            </div>

            <div>
              <h2>ECOQUEST</h2>

              <span>
                Environmental Education Initiative
              </span>
            </div>

          </div>

          <div className="login-heading">

            <div className="official-badge">
              <ShieldCheck size={16} />
              SECURE DIGITAL PORTAL
            </div>

            <h1>
              Welcome Back,
              <span>Earth Guardian.</span>
            </h1>

            <p>
              Continue your environmental learning journey,
              complete missions, earn achievements and create
              measurable impact for our planet.
            </p>

          </div>

          <div className="login-values">

            <div>
              <strong>Learn</strong>
              <span>Build environmental knowledge</span>
            </div>

            <div>
              <strong>Play</strong>
              <span>Take interactive challenges</span>
            </div>

            <div>
              <strong>Impact</strong>
              <span>Turn learning into action</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="login-card">

          <div className="login-card-header">

            <div className="login-icon">
              <Lock size={22} />
            </div>

            <div>
              <h2>Sign In</h2>

              <p>
                Access your EcoQuest account
              </p>
            </div>

          </div>

          <form onSubmit={handleLogin}>

            {/* USERNAME */}

            <div className="form-group">

              <label>
                Username
              </label>

              <div className="input-wrapper">

                <User size={19} />

                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="form-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <Lock size={19} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* SUCCESS */}

            {message && (
              <div className="login-success">
                {message}
              </div>
            )}

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In"}

              {!loading && (
                <ArrowRight size={19} />
              )}
            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <div className="register-text">

            Don't have an EcoQuest account?

            <Link to="/register">
              Create Account
            </Link>

          </div>

          <div className="security-note">

            <ShieldCheck size={16} />

            <span>
              Your account information is securely
              protected.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;