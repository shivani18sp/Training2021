//
const express = require("express");
const app = express();
const HttpError = require("./utils/http-error");
const mongoose = require("mongoose");


//Route calls
const userRoutes = require("./routes/user-routes");
const adminRoutes = require("./routes/admin-routes");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routing
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);


//Error handling
app.use((req, res, next) => {
  const error = new HttpError("Page not found", 404);
  throw error;
});
app.use((error, req, res, next) => {
  res.json({
    message: error.message || "Unknown Error occured",
    code: error.code,
  });
});

//Mongoose connect
mongoose
  .connect(
    "mongodb+srv://shivani_singh18:Fppxe2Qnk9rgWOyO@blog.lq2ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Mongo DB is successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

//server working on port 2003
const port = 3000;
app.listen(port, () => {
  console.log(`working http://localhost:${port}`);
});