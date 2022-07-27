import React from 'react';
import Form from '../form/Form';
import "./header.css"

function Header () {
  return (
      <>
      <div className='header'>
          <div>
          My Todo List
          </div>
          <div>
          React
          </div>
      </div>
  
          <Form/>
      </>
      
      
      
      
  )
}

export default Header