
import React from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

const home = () => {
  return (
    <div className='homeWrapper'>
        <div className="formWrapper">
            <img src="/logo.png" alt="" />
            <div className='mainLabel'>Paste invitation Code</div>
            <div className="inputGroup">
                <input type="text"  className='inputBox' placeholder='Room Id'/> <br />
                <input type="text"  className='inputBox' placeholder='Name'/><br />
            </div>
            <div className="btn2">
        <Button className='btn' variant="ghost">Join</Button></div><br />
        <span className='createInfo'>
            No invite, Create a new room <a href="" className='newRoom'>new Room!</a>
        </span>
        </div>

        <footer>
            <h5>Built By <a href="https://github.com/Bhavesh-Kapur">Bhavesh</a></h5>
        </footer>
    </div>
  )
}

export default home