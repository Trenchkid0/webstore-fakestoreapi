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
    const [sort, setSort] = useState([{
      key:'desc',
      value:'A-Z'
  
  }, {
      key:'asc',
      value:'Z-A'
  }]);
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
      navigate(`/home/${sorting}`)
      console.log('pss')
      window.location.reload();
  }
   
  
  return (
    <>
        <NavDropdown className='grid justify-items-end ' title="sort" id="basic-nav-dropdown">
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
