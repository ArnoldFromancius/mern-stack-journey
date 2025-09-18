const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to DB
mongoose
  .connect(
    "mongodb+srv://arnoldfromancius_db_user:%23siliconwhisperer2799@mighkacarepluscluster.a5owpj6.mongodb.net/?retryWrites=true&w=majority&appName=MighkaCareplusCluster"
  )
  .then(async () => {
    console.log("MongoDB connected");

    // create schema + model
    const userSchema = new mongoose.Schema({
      name: String,
      address: String,
      phone: String,
      email: String,
    });

    const User = mongoose.model("User", userSchema);

    // create + save user
    const userobj = new User({
      name: "Arnold",
      address: "Ndeke Village",
      phone: "0977777777",
      email: "mail@mail.com",
    });

    await userobj.save();

    // log first user
    const firstUser = await User.findOne({});
    console.log(firstUser);
  })
  .catch((err) => console.error(err));

// ROUTING
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/info", (req, res) => {
  res.sendFile("./views/info.html", { root: __dirname });
});

app.use((req, res) => {
  res.sendFile("./views/missing.html", { root: __dirname });
});

app.listen(2000, () => console.log("Server running on port 2000"));

