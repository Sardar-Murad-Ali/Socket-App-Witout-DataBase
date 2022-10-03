import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({socket}) => {
  let user=localStorage.getItem("userName")

    let navigate=useNavigate()
    let [name,setName]=React.useState("")
    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(){
        if(name!==""){
            localStorage.setItem("userName",name)

            socket.emit("addUser",{name:name,SocketId:socket.id})

            navigate("/chat")
        }
    }

    React.useEffect(()=>{
      if(user){
        navigate("/chat")
      }
    },[])


  return (
    <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <input placeholder='Enter Your Name' style={{padding:"10px",outline:"none"}} onChange={handleChange} value={name}/>
      <button style={{padding:"10px",marginLeft:"20px",cursor:"pointer"}} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Home
