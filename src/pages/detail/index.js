import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import DetailStuff from '../../components/DetailStuff';
import { useParams } from 'react-router-dom';


export default function Detail() {
    const [tempData, setData] = useState({});
    const {stuffId} = useParams()

    useEffect(() => {
      const fetchData = async()=>{
         const res = await axios.get(`https://fakestoreapi.com/products/${stuffId}`)
         setData(res.data)
      }
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(tempData)
  
  return (
    <>
    <div className='flex flex-wrap'>

      
          <DetailStuff {...tempData} />      
       

    </div>
  </>
  )
}
