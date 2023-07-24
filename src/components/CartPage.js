import React from 'react'
import { Anchor } from 'react-bootstrap'
import { useState,useEffect } from 'react'

export default function CartPage({dataProducts,dataCart}) {
    let eachTotal =  dataProducts.price * dataCart.quantity;    

  return (
    <div  className='flex'>

        <div>
            <img className='h-52 w-10' src={dataProducts.image}/>
        </div>
        <div className='flex flex-col'>
            <div className='flex'>
                <button>+</button>
                <input className='text-center w-10' value={dataCart.quantity}/>
                <button>-</button>  

                <p className='mx-5'>$ {dataProducts.price }</p>
                <p className='mx-5'>$ {eachTotal}</p>
            </div>
        
        </div>
    </div>
    

  )
}
