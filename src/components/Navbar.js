import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Navbars() {
    const navigate = useNavigate()

    const token =  localStorage.getItem('token');
    console.log(token)
    
    const [tempData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async()=>{
          const res = await axios.get('https://fakestoreapi.com/products/categories')
          setData(res.data)
        }
        fetchData();
      }, [])
      console.log(tempData)

      const handleLogOut = ()=>{
        localStorage.removeItem('token')
        window.location.reload();
      }
      
      

    const handleReload = (catologue)=>{
      
      navigate(`/specific/${catologue}`)
      window.location.reload(catologue)
    }


  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/home')}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Catalogue" id="basic-nav-dropdown">
                {tempData.map(catologue =>(
                    <NavDropdown.Item onClick={()=>handleReload(catologue)}  key={catologue} >{catologue}</NavDropdown.Item>

                ))}
            </NavDropdown>
            <Nav.Link onClick={()=>navigate('/login')}>login</Nav.Link>
            <Nav.Link onClick={()=>handleLogOut()}>logout</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}
