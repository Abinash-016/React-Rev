import { Navigate } from "react-router-dom";

function Dashboard() {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Welcome to Dashboard</h1>;
}

export default Dashboard;
