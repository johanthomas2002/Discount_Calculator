import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <>
        <Navbar className="bg-success">
            <Container>
            <Navbar.Brand href="">
               <img src="https://cdn0.iconfinder.com/data/icons/finance-icons-rounded/110/Calculator-512.png" 
               alt="logo" style={{width:'100px'}}/>
               <span className='fs-2 text-warning ms-3 mt-5'>Discount Calculator</span>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </>
      
  )
}

export default Header
