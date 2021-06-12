const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;


// statically serve everything in the build folder on the route '/build'
if(process.env.NODE_ENV === 'production') {
  app.use("/build", express.static(path.join(__dirname, "../build")));
};

// serve index.html on the route '/'
app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../index.html"));
});






app.use((req,res) => res.status(404).send("Page not found"));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  console.log(err);
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
})