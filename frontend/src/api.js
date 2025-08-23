import axios from "axios";

const API_URL = "https://insyd-backend-m2lb.onrender.com/notifications";

export const fetchNotifications = (userId) =>
  axios.get(`${API_URL}/${userId}`).then((res) => res.data);

export const markAsRead = (id) =>
  axios.post(`${API_URL}/read/${id}`).then((res) => res.data);
