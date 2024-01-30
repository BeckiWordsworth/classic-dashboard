const express = require("express");
const connectDb = require("./config/dBConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error handler last
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
