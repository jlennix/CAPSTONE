const express = require("express");
const cors = require('cors')
const app = express();
require("dotenv").config();

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))

// const cors = require("cors");
// const app = express();
// app.use(
//   cors({
//     allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
//     exposedHeaders: ["authorization"], // you can change the headers
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false
//   });
// )

// parse requests of content-type -
let dbConnect = require("./dbConnect")

app.use(express.json()); //without app wont work

let userRoutes = require('./routes/userRoutes')
let postRoutes = require('./routes/postRoutes')
let likeRoutes = require('./routes/likeRoutes')
let commentRoutes = require('./routes/commentRoutes')

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/comments', commentRoutes)

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}.`);
// console.log(process.env)
});