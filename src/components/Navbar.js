import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardStore from '../components/CardStore';

import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function Navbars() {
    const navigate = useNavigate()

    const token =  localStorage.getItem('token');
    const userId =  localStorage.getItem('userId');

    
    const [tempData, setData] = useState([]);
    const [tempStore, setStore] = useState([]);
    const [tempCart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async()=>{
          const res = await axios.get('https://fakestoreapi.com/products/categories')
          setData(res.data)
        }
        const fetchStore = async()=>{
          const res = await axios.get('https://fakestoreapi.com/products')
          setStore(res.data)
       }

       const fetchCart = async()=>{
        const res = await axios.get(`https://fakestoreapi.com/carts/${userId}`)
        setCart(res.data)
     }

        fetchData();
        fetchStore();

        if(userId){
          fetchCart();

        }
      }, [])

  

      const handleLogOut = ()=>{
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        window.location.reload();
      }

      const handleLogin = ()=>{
        navigate('/login');
        window.location.reload();
      }
      
      

    const handleReload = (catologue)=>{
      
      navigate(`/specific/${catologue}`)
      window.location.reload(catologue)
    }


  return (
    <>
    {token ?(
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">LadsStore</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={()=> navigate('/home')}>Home</Nav.Link>
            <NavDropdown  title="Catalogue" id="basic-nav-dropdown">
                {tempData.map(catologue =>(
                    <NavDropdown.Item  onClick={()=>handleReload(catologue)}  key={catologue} >{catologue}</NavDropdown.Item>

                ))}
            </NavDropdown>
            <div>

              
            </div>
            <Nav.Link onClick={()=>navigate(`/cart/${userId}`)} className='mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
             
            </svg>
            {tempCart ? 
            <span className='text-xs absolute ml-5 -mt-5'></span>:<span className='text-xs absolute ml-5 -mt-5'>{tempCart.products.length}</span>
            }
            </Nav.Link>
            <Nav.Link className='ms-auto' onClick={()=>handleLogOut()}>logout</Nav.Link>
          </Nav>
          
        </Container>
        </Navbar>


    ):(
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/home')}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
            <Nav.Link onClick={()=>handleLogin()}>login</Nav.Link>
          </Nav>
          
        </Container>
        </Navbar>
    <div className='flex flex-wrap'>

    {tempStore.map(infoStore =>(
      <div key={infoStore._id} className="">
        <CardStore {...infoStore} />      
      </div>
      
      
      ))}

  </div>
      </>
  
  
  )}
  
    </>
  )
}
