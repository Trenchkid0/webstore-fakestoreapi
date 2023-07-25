import React from 'react'
import { Anchor } from 'react-bootstrap'
import { TextInput } from 'flowbite-react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Login() {
    const navigate = useNavigate();
    const [tempData, setTempData] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('https://fakestoreapi.com/users')
            setTempData(res.data);
            
        }
        fetchUser();
    }, [])
    

    const [form, setForm] = useState({
        username:'',
        password:'',

    })
    console.log(form.password);

    const handleSubmit = async() =>{
        const res = await axios.post('https://fakestoreapi.com/auth/login',form)
        .then(resp=> {
            tempData.forEach((dataUser)=>{
                if(dataUser.username === form.username){
                    resp.status === 200 ? navigate(`/home/${dataUser.id}`) : navigate('/home')
                    localStorage.setItem('token',resp.data.token);
                    localStorage.setItem('userId',dataUser.id);
                }
            })
        })
        
    }

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value });
    }


  return (
    <div className='grid h-screen place-items-center'>

    <div className="w-full max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6 " action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                <TextInput type="text" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" value={form.username} onChange={(e)=>handleChange(e)} required/>
            </div>
            <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <TextInput type="password" name='password' value={form.password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e)=>handleChange(e)} required/>
            </div>
            <div className="flex items-start">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                   
                    </div>
                   
                </div>
                <Anchor href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Anchor>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>handleSubmit()} >Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <Anchor href="#" className="text-blue-700 hover:underline dark:text-blue-500 " onClick={()=>navigate('/signup')}>Create account</Anchor>
            </div>
        </form>
    </div>


    </div>
    

  )
}
