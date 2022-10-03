import React from 'react'

const ChatFooter = ({socket}) => {
    let [message,setMessage]=React.useState("")

    let user=localStorage.getItem("userName")

    

    function handleChange(e){
        setMessage(e.target.value)
    }

    function handleSend(){
       socket.emit("message",{
          message:message,
          user:localStorage.getItem("userName"),
          SocketId:socket.id
       })
    }

    function keyDown(){
      socket.emit("typing",`${user} is typing`)
    }

   

  return (
    <div style={{marginTop:"40px",marginLeft:"40%"}}>
      <input style={{padding:"10px",outline:"none",marginLeft:"10px"}} placeholder='Messages' onChange={handleChange} value={message} onKeyDown={keyDown} />
      <button style={{cursor:"pointer",padding:"10px",marginLeft:"10px"}} onClick={handleSend}>Send</button>
      {/* <p style={{color:'black',fontWeight:"bolder",marginTop:"20px"}}>{typing}...</p> */}
    </div>
  )
}

export default ChatFooter
