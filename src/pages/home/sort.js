import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardStore from '../../components/CardStore';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useParams } from 'react-router-dom';

export default function Sort() {
    const [tempData, setData] = useState([]);
    const [sort, setSort] = useState(['asc' , 'desc']);
    const {sorttype} = useParams()
    const navigate = useNavigate()

    

    useEffect(() => {
      
      const fetchData = async()=>{
         const res = await axios.get(`https://fakestoreapi.com/products?sort=${sorttype}`);
         setData(res.data)
      }
      fetchData();
    }, [])

    console.log(tempData)

    const handleSort = (sorting) =>{
      // sorting.preventDefault()
      navigate(`/home/${sorting}`)
      console.log('pss')
  }
   
  
  return (
    <>
     {/* <option onClick={()=>handleSort('asc')} style={{width:'100px'}}>A-Z</option> */}
    {/* feature */}
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            {sort.map(type => (
                <NavDropdown.Item onClick={()=> handleSort(type)}>{type}</NavDropdown.Item>
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
