import axios from "axios";

const API_URL = "http://localhost:4000/notifications";

export const fetchNotifications = (userId) =>
  axios.get(`${API_URL}/${userId}`).then((res) => res.data);

export const markAsRead = (id) =>
  axios.post(`${API_URL}/read/${id}`).then((res) => res.data);
