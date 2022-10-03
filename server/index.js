import express from "express"
let app=express()
import http from "http"

import {Server} from "socket.io"

let server=http.createServer(app)

import cors from "cors"



app.use(cors())


const SocketIo = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });


//   Socket On Starts

let users=[]
SocketIo.on("connection",(socket)=>{
    // console.log("The User Is Just Connected")

    socket.on("addUser",(data)=>{
        socket.userId=data.SocketId
        users.push(data)
      SocketIo.emit("getUsers",users)
    },)
    
    socket.on("message",(data)=>{
        SocketIo.emit("getMessage",data)
    })

    socket.on("leave",({name})=>{
      // console.log(`The user is leaving ${name}`)
      users=users.filter((all)=>all.name!==name)
      SocketIo.emit("getUsers",users)
      // socket.disconnect()
    })

    socket.on("typing",(data)=>{
      socket.broadcast.emit("typingStatus",data)
    })


})
//   Socket On Ends
  



server.listen(5000,()=>{
    console.log("This app is listening on the port 5000")
})