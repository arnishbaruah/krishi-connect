const express  =require("express");
const router = require("./routes/AuthenicationRoutes")
const articalrouter = require("./routes/UploadArticalRoute")
const utilityRouter = require("./routes/OtherUtility")
const cookieParser = require("cookie-parser");
const socketIo = require('socket.io');

const bodyParser=  require("body-parser")
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketIo(server , {
    cors:{
        origin:"*"
    }
});
require("dotenv").config();
require("./config/Database").connect();
const cors = require("cors");

app.use(cookieParser());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/articalapi", articalrouter);
app.use("/otherutility", utilityRouter);

const messages = []; // Array to store messages

io.on('connection', (socket) => {
  // Send stored messages to the newly connected client
  socket.emit('init', messages);

  socket.on('chat message', (message) => {
    // Store the message and broadcast it to all connected clients
    messages.push(message);
    io.emit('chat message', message);
  });
});



server.listen(process.env.PORT ,() =>{
   console.log(`server is running on port ${process.env.PORT}`)
})