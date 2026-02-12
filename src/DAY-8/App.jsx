import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import NotFound from "./NotFound";

const DashboardLayout = lazy(() => import("./dashboard/DashLayout"));
const Settings = lazy(() => import("./dashboard/Settings"));
const Analytics = lazy(() => import("./dashboard/Analytics"))
const Profile = lazy(() => import("./Profile"));
const Admin = lazy(() => import("./Admin"));

function Day8() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="settings"  />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="analytics"
            element={
              <ProtectedRoute role="admin">
                <Analytics/>
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Day8