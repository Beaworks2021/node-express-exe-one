const express = require("express");

const server = express();
server.use("/services/items", (request, response) => {
  response.send("This is the sevices items page");
});

server.use("/contacts", (request, response) => {
  response.send("This is the Contact page");
});

server.use("/services", (request, response) => {
  response.send("This is the Services page");
});

server.use("/about", (request, response) => {
  response.send(
    "The Construction Company was established in 1959 and is a general contractor offering construction services in terms of Site Analysis, Feasibility Studies, Preliminary Design Studies, Permit/Zoning Applications, etc. We handle various industrial, distribution, manufacturing, office, retail, recreational, healthcare and commercial projects in the Chicago area and midwest regional markets. "
  );
});

server.use("/", (request, response) => {
  response.send("<h1>Welcome to the home page</h1>");
});

server.listen(300, () => {
  console.log("Server is running on port 9000");
});
