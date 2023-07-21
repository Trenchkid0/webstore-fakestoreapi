import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardStore from '../../components/CardStore';
import { useParams } from 'react-router-dom';


export default function Electronic() {
    const [tempData, setData] = useState([]);
    const {nameCata} = useParams()

    useEffect(() => {
      const fetchData = async()=>{
         const res = await axios.get(`https://fakestoreapi.com/products/category/${nameCata}`)
         setData(res.data)
      }
      fetchData();
    }, [])

    console.log(tempData)
  
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
