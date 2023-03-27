import React from 'react'
import './App.css'
import Create from './Components/createProducts'
import Update from './Components/updateProducts'
import Read from './Components/readProducts'
import { Nav } from 'react-bootstrap'
import { Container, Navbar } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <div className='color'>
          <Navbar style={{borderBottom:"1px solid lightgray"}}>
            <Container>
              <Navbar.Brand>
                <h4 style={{color:"white"}}><span style={{fontSize:"45px"}}>&#8473;</span> roducts...</h4>
              </Navbar.Brand>
              <Nav className='me-end'>
                <Nav.Link as={Link} to='/' style={{color:"white",fontSize:"20px"}}>
                  Add Products
                </Nav.Link>
                <Nav.Link as={Link} to='/all' style={{color:"white",fontSize:"20px"}}>
                  Products List
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path='/' element={<Create />}></Route>
            <Route exact path='/all' element={<Read />}></Route>
            <Route exact path='/update' element={<Update />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
