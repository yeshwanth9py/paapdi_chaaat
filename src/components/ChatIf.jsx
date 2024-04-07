import React, { useState, useEffect } from 'react'

const ChatIf = ({socket, room}) => {
  const [msg, setMsg] = useState();
  const [allmsgs, setAllmsgs] = useState([]);

  function sendmsg(){
    socket.emit("msg_send", {room, msg});
  }

  useEffect(()=>{
    socket.on("msg_rcvd", (data)=>{
      setAllmsgs((prevmsgs)=>{
        return [...prevmsgs,data]
      });
    })
  },[])

  return (
    <div>
      <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
      <button onClick={sendmsg}>submit</button>
      <br/>
      see all messages here:-
      <br/>
      <ul>
        {allmsgs.map((m)=>{
          return (
            <li>{m}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ChatIf