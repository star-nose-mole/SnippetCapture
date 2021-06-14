const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

//requiring routers
const apiRouter = require("./routes/api");
const authRouter = require("./routes/auth");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", apiRouter); //confirm that this is the correct endpoint for the fetch requests
// app.use("/api", authRouter); 
// app.use("/login", authRouter); 


// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.join(__dirname, "../build")));
  // serve index.html on the route '/'
}

// does the code below belong inside above if-statement?
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
});

app.use("*", (req, res) => res.status(404).send("Page not found"));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  console.log(err);
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.export = app;
