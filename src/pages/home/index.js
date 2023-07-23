import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardStore from '../../components/CardStore';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Home() {
    const [tempData, setData] = useState([]);
    const [sort, setSort] = useState([{
        key:'asc',
        value:'A-Z'
    
    }, {
        key:'desc',
        value:'Z-A'
    }]);

     console.log(sort.ascending)
    const navigate = useNavigate()

    useEffect(() => {
      const fetchData = async()=>{
         const res = await axios.get('https://fakestoreapi.com/products')
         setData(res.data)
      }
      fetchData();
    }, [])
    

    const handleSort = (sorting) =>{
        navigate(`/home/${sorting}`)
        console.log('pss')
        window.location.reload();
    }
  
  return (
    <>
        <NavDropdown className='grid justify-items-end' title="Dropdown" id="basic-nav-dropdown">
            {sort.map(({ key, value }) => (
                <NavDropdown.Item onClick={()=> handleSort( [key])}>{value}</NavDropdown.Item>
            ))}
        </NavDropdown>
      <div className='flex flex-wrap'>

        {tempData.map(infoStore =>(
          <div key={infoStore._id} className="">
            <CardStore {...infoStore} />      
          </div>

        ))}

      </div>
    </>
  )
}
