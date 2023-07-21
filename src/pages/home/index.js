import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardStore from '../../components/CardStore';;

export default function Home() {
    const [tempData, setData] = useState([]);

    useEffect(() => {
      const fetchData = async()=>{
         const res = await axios.get('https://fakestoreapi.com/products')
         setData(res.data)
      }
      fetchData();
    }, [])
  
  return (
    <>
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
