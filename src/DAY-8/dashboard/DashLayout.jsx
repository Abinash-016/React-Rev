import { useAuth } from "../AuthContext";
import { NavLink, Outlet } from "react-router-dom";

function DashLayout() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>DashBoard</h1>
      <p>Welcome {user.email}</p>

      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="analytics">Analytics</NavLink>
      </nav>
      <br />
      <button onClick={logout}>Logout</button>

      <hr />

      <Outlet />
    </div>
  );
}
export default DashLayout