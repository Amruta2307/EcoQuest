import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Leaf,
  Lock,
  User,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    // Check passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Basic password validation
    if (password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/register/",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      if (response.data.success) {

        setSuccess(
          "Account created successfully! Redirecting to login..."
        );

        // Clear form
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Go to login page
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }

    } catch (error) {

      if (error.response) {

        setError(
          error.response.data.message ||
          "Unable to create account."
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

    <div className="register-page">

      <div className="register-background"></div>

      <div className="register-overlay"></div>

      <div className="register-container">

        {/* LEFT INFORMATION */}

        <div className="register-information">

          <div className="register-brand">

            <div className="register-brand-icon">
              <Leaf size={28} />
            </div>

            <div>
              <h2>ECOQUEST</h2>

              <span>
                Environmental Education Initiative
              </span>
            </div>

          </div>

          <div className="register-heading">

            <div className="official-badge">

              <ShieldCheck size={16} />

              SECURE DIGITAL PORTAL

            </div>

            <h1>
              Begin Your
              <span>Eco Journey.</span>
            </h1>

            <p>
              Create your EcoQuest account and start
              learning, completing environmental missions,
              earning achievements and making a measurable
              impact.
            </p>

          </div>

          <div className="register-values">

            <div>
              <strong>Learn</strong>
              <span>Explore environmental knowledge</span>
            </div>

            <div>
              <strong>Play</strong>
              <span>Complete interactive challenges</span>
            </div>

            <div>
              <strong>Impact</strong>
              <span>Track your environmental actions</span>
            </div>

          </div>

        </div>


        {/* REGISTRATION CARD */}

        <div className="register-card">

          <div className="register-card-header">

            <div className="register-icon">
              <UserPlus size={22} />
            </div>

            <div>

              <h2>Create Account</h2>

              <p>
                Join the EcoQuest community
              </p>

            </div>

          </div>


          <form onSubmit={handleRegister}>

            {/* USERNAME */}

            <div className="form-group">

              <label>
                Username
              </label>

              <div className="input-wrapper">

                <User size={19} />

                <input
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <Mail size={19} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
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
                  placeholder="Create a password"
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

              <small className="password-hint">
                Minimum 8 characters
              </small>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="form-group">

              <label>
                Confirm Password
              </label>

              <div className="input-wrapper">

                <Lock size={19} />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >

                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}

                </button>

              </div>

            </div>


            {/* ERROR */}

            {error && (

              <div className="register-error">
                {error}
              </div>

            )}


            {/* SUCCESS */}

            {success && (

              <div className="register-success">
                {success}
              </div>

            )}


            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >

              {loading
                ? "Creating Account..."
                : "Create Account"
              }

              {!loading && (
                <ArrowRight size={19} />
              )}

            </button>

          </form>


          <div className="login-link-text">

            Already have an account?

            <Link to="/login">
              Sign In
            </Link>

          </div>


          <div className="security-note">

            <ShieldCheck size={16} />

            <span>
              Your information is securely protected.
            </span>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Register;