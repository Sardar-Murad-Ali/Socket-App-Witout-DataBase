import React from 'react'
import "./index.css"
import {useNavigate} from "react-router-dom"
import { useRef } from 'react'

const ChatBody = ({messages,socket,typingStatus}) => {
  

  // console.log(typingStaus)
  let navigate=useNavigate()


  function leave(){
     socket.emit("leave",{name:localStorage.getItem("userName")})
     localStorage.removeItem('userName')
     navigate("/")
  }

  let scrollRef=useRef(null)

  React.useEffect(()=>{
      scrollRef.current.scrollIntoView({  behavior: 'smooth' });
  },[messages])

 


  return (
    <div style={{background:'lightgreen',height:"80vh",color:"white",width:"100%",position:"relative"}} >
       <button onClick={leave} style={{padding:"10px",position:'absolute',right:"20px",top:"10px",cursor:"pointer"}}>Leave The Room</button>
       <div className="chatBody">
         {
          messages.map((all)=>{
            return <div style={{marginBottom:"20px"}} ref={scrollRef} className={` ${all.user===localStorage.getItem("userName") ? "active" : "normal"}`} key={all.SocketId}>
               <p className='user'>{all.user}</p>
               <p className='message'>{all.message}</p>
            </div>
          })
          }
          <p>{typingStatus}...</p>
       </div>
    </div>
  )
}

export default ChatBody
