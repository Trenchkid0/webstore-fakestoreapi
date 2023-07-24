import React from 'react'
import { Image } from 'react-bootstrap'


export default function CartPage({dataProducts,dataCart}) {
    let eachTotal =  dataProducts.price * dataCart.quantity;    

  return (
    <>
                <th scope="row" class="px-6 w-56 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Image className='h-52 w-10' src={dataProducts.image}/>
                    
                </th>
                <td class="px-6 py-4 text-center">
                    {dataCart.quantity}
                </td>
                <td class="text px-6 py-4">
                {dataProducts.title}
                </td>
                <td class="px-6 py-4">
                    {eachTotal}
                </td>
                
    
    </>
    
        
    

  )
}
