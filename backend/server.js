const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const notificationsRoute = require("./routes/notifications");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/notifications", notificationsRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
