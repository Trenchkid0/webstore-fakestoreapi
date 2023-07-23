import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import CardStore from '../../components/CardStore';


export default function Cart() {
    const [tempData, setData] = useState();
    const [tempProducts, setTempProducts] = useState([])
    const [tempCart, setTempCart] = useState([])


    const {cartId} = useParams();




    useEffect(() => {
        const fetchCart = async()=>{
            const res = await axios.get(`https://fakestoreapi.com/carts/${cartId}`)
            setData(res.data.products)

        }
        const fetchData = async()=>{
            const res = await axios.get('https://fakestoreapi.com/products')
            setTempProducts(res.data)
        }
        fetchCart();
        fetchData();

    
    }, [])


   




  return (
    <>
 
      <div className='flex flex-wrap'>

        {tempData?.map(products => (
    tempProducts.map(stuff =>  (
        products.productId === stuff.id ? (

            <div key={stuff._id} className="">
            <CardStore {...stuff} />      
          </div>

        ) : (
            ''
        )
    ))
   ))}

      </div>
    </>
  )
}
