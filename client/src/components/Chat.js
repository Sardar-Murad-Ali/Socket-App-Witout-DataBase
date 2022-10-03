import React from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const Chat = ({socket}) => {
    let [messages,setMessages]=React.useState([])

    let [typing,setTyping]=React.useState("")

    React.useEffect(()=>{
         socket.on("getMessage",(data)=>{
             setMessages([...messages,data])
         })
    },[socket,messages])

    console.log(messages)

    React.useEffect(()=>{
      socket.on("typingStatus",(data)=>{
        // console.log(data)
        setTyping(data)
      })
  },[socket])

  // console.log(typing)

  return (
    <div style={{display:"flex"}}>
      <ChatBar socket={socket}/>
      <div style={{width:"100vw"}}>
        <ChatBody socket={socket} typingStatus={typing} messages={messages}/>
        <ChatFooter socket={socket}/>
      </div>
    </div>
  )
}

export default Chat
