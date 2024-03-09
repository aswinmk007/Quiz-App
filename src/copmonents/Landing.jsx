import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div style={{width:'100%',height:'100vh',backgroundColor:'#9BE1ED'}} className='d-flex justify-content-center'>
        <div style={{width:'600px',marginTop:'10rem'}} className='p-5 rounded '>
          <div style={{backgroundColor:'#48047A'}} className='d-flex justify-content-center align-items-center p-3  rounded shadow flex-column text-light'>
            <h1>Start the Quiz</h1>
            <h4>Good Luck!!!</h4>
            <button className='btn btn-success'><Link style={{color:'white',textDecoration:'none'}} to={'/questions'}>START</Link></button>

          </div>
          </div>
    </div>
  )
}

export default Landing