import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import NotificationList from "./components/NotificationList";
import NotificationForm from "./components/NotificationForm";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MainApp() {
  const query = useQuery();
  const userIdParam = query.get("userId");
  const userId = userIdParam ? Number(userIdParam) : 1; 

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px" }}>Insyd Notification POC</h1>
      <div className="main-container"> 
      <NotificationForm userId={userId} />
      <NotificationList userId={userId} />
      </div>
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
