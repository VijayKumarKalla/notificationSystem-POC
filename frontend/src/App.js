import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import NotificationList from "./components/NotificationList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MainApp() {
  const query = useQuery();
  const userId = Number(query.get("userId")) || 1; // default Alice

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px" }}>Insyd Notification POC</h1>
      <NotificationList userId={userId} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
