const express = require("express");

const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const {Server} = require("socket.io");

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        credentials: true
    }
});



io.on("connection", (socket)=>{
    console.log(socket.id+" is connected");
    socket.on("join_room", (room)=>{
        socket.join(room);
    })
    socket.on("send_msg", (data)=>{
        io.to(data.room).emit(data.msg);
    });

    socket.on("msg_send", (data)=>{
        io.to(data.room).emit("msg_rcvd", data.msg)
    });

})


io.listen(3000, ()=>{
    console.log("server started at 3000");
})