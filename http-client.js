// const http = require("http");

// const url = process.argv[2];

// http
//   .get(url, (response) => {
//     response.setEncoding("utf8");

//     response.on("data", (chunk) => {
//       console.log(chunk);
//     });

//     response.on("error", (err) => {
//       console.error("Error:", err);
//     });

//     response.on("end", () => {});
//   })
//   .on("error", (err) => {
//     console.error("Request error:", err.message);
//   });

const http = require("http");

http.get(process.argv[2], (response) => {
  response.setEncoding("utf8");
  response.on("data", (data) => {
    console.log(data);
  });
});
