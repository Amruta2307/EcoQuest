import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>🌱 Welcome to EcoQuest</h1>

        <p>Login successful!</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
  path="/register"
  element={<Register />}
/>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="*"
          element={
            <Navigate to="/" replace />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;