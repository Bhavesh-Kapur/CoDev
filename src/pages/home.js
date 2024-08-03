
import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import {v4 as uuidv4} from 'uuid';

const Home = () => {

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom =(e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        // console.log(id);
    }
  return (
    <div className='homeWrapper'>
        <div className="formWrapper">
            <img src="/logo.png" alt="" />
            <div className='mainLabel'>Paste invitation Code</div>
            <div className="inputGroup">
                <input type="text"  className='inputBox'  value={roomId}  on onChange={(e)=>setRoomId(e.target.value)} placeholder='Room Id'/> <br />
                <input type="text"  className='inputBox' value={username}  on onChange={(e)=>setUsername(e.target.value)} placeholder='Name'/><br />
            </div>
            <div className="btn2">
        <Button className='btn' variant="ghost">Join</Button></div><br />
        <span className='createInfo'>
            No invite, Create a new room <a onClick={createNewRoom} href="" className='newRoom'>new Room!</a>
        </span>
        </div>

        <footer>
            <h5>Built By <a href="https://github.com/Bhavesh-Kapur">Bhavesh</a></h5>
        </footer>
    </div>
  )
}

export default Home