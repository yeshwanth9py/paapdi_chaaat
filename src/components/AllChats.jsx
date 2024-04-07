import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import ChatIf from './ChatIf';
import {useNavigate} from "react-router-dom";


const AllChats = () => {
    const [msg, setMsg] = useState();
    const [room, setRoom ] = useState();
    const [join, setJoin] = useState(false);
    const [socket, setSocket] = useState()

    const navigate = useNavigate();


    useEffect(()=>{
        const sockett = io("http://localhost:3000");
        setSocket(sockett);
    },[])

    useEffect(()=>{ 
      if(join){
        socket.emit("join_room",room);
        // navigate(`/chat/${room}`);
      } 

    }, [join])

    function changeRoom(e){
      setRoom(e.target.value);
    }

    function joinRoom(){
      setJoin(!join);
    } 
    
  return (
    <div>
        {join?<ChatIf socket={socket} room={room}/>:<><input type="text" placeholder='enter room no' value={room} onChange={changeRoom}/>
        <br/>
        <button onClick={joinRoom}>join room</button></>}
    </div>
  )
}

export default AllChats