import React from 'react'


const ChatBar = ({socket}) => {

  let [users,setUsers]=React.useState([])

  React.useEffect(()=>{
    socket.on("getUsers",(data)=>{
         setUsers(data)
    })
  },[socket])


  console.log(users)
  return (
    <div style={{height:"100vh",background:"lightblue",color:'white'}}>
       {
        users.map((all)=>{
          console.log(all)
          return (
            <p>{all.name}</p>
          )
        })
       }
    </div>
  )
}

export default ChatBar
