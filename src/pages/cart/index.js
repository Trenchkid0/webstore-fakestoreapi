import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Anchor } from 'react-bootstrap';

import axios from 'axios';
import CartPage from '../../components/CartPage';


export default function Cart() {
    const [tempData, setData] = useState();
    const [tempProducts, setTempProducts] = useState([])

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

    let total = 0;
    tempData?.map(products => (
        tempProducts.map(stuff =>  (
        products.productId === stuff.id ? (
            
            total += stuff.price*products.quantity

            ) : (
                ''
            )
        ))

    ))
                
  return (
    <>
 
          <div className='flex'>
      <div className='flex flex-wrap flex-col '>

        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Each Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                
            </tr>
        </thead>
        <tbody>
        

            {tempData?.map(products => (
                tempProducts.map(stuff =>  (
                products.productId === stuff.id ? (

                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <CartPage dataProducts={stuff} dataCart={products} /> 
            
                    </tr>    
            

            ) : (
                ''
            )
        ))
    ))}

        </tbody>
        
        
        
    </table>
</div>


        


      </div>
        
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 mx-20 dark:bg-gray-800 dark:border-gray-700">
        <p className='text-xl mt-1 mx-5'>Total CheckOut:</p>
        <h1 className='ml-10'>${total}</h1>
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Connect wallet
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
        <ul className="my-4 space-y-3 ">
            <li>
            <Anchor href="#" className="flex no-underline items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>


                    <span className="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
                </Anchor>
            </li>
            <li>
                <Anchor href="#" className="flex no-underline items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
                </Anchor>
            </li>
            <li>
                <Anchor href="#" className="flex no-underline items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
                </Anchor>
            </li>
            <li>
                <Anchor href="#" className="flex no-underline items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
                </Anchor>
            </li>
            <li>
                <Anchor href="#" className="flex items-center no-underline p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
                </Anchor>
            </li>
        </ul>
        <div>
            <Anchor href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Why do I need to connect with my wallet?</Anchor>
        </div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-36 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Payments</button>
    </div>


      </div>
    </>
  )
}
