import React, { useState } from 'react'
import User from './User'
import axios from 'axios'
import { useEffect } from 'react'

export default function Users() {
    ////////////// Method 1
    // input state 
    // const [name, setname] = useState('')
    // const [email, setemail] = useState('')
    // const [phone, setphone] = useState('')
    
    
    // //handleName
    // function handleName (e){
    //     setname(e.target.value)
    // }
    // function handleEmail (e){
    //     setemail(e.target.value)
    // }
    // function handlephone (e){
    //     setphone(e.target.value)
    // }
    
    ////////////////// Method 2
    const [info, setInfo] = useState([])
    const [users, setusers] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setusers(res.data)
        })
     }, []);

    
    function handleInfor (e){
        setInfo({
            ...info,
            [e.target.name]:e.target.value  // .name linked with the attribute name line:58 to specify the input 
        })
    }
    
    function add(){
        axios.post('https://jsonplaceholder.typicode.com/users', info)
        .then((res) =>{
            setusers(
                [res.data, ...users]
            )
        })
    }


function remove(id){
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((data) =>{
        const res1= users.filter((user) => user.id!==id)
        setusers(res1)
    })
}

    return (
        <div className='container mt-3'>
                <div className='input'>
                    <input name='name' onChange={handleInfor} type="text" placeholder='Enter Your Name'/>
                    <input name='email' onChange={handleInfor} type="text" placeholder='Enter Your Email'/>
                    <input name='phone' onChange={handleInfor} type="number" placeholder='Enter Your Phone'/> 
                    <button onClick={add} className='btn btn-success  mt-2'>add</button>
                </div>
            <div className='row'>
                {
                    users.map((user) => (
                        <div className='col-md-6 mt-2'>
                            <User data={user}/>
                            <button className='btn btn-danger mt-2' onClick={()=>remove(user.id)}>delete</button>
                        </div>
                    ))
                }
            </div>            
        </div>
    )
}






{/* <div class="input-group">     // Search input 
    <input onChange={search} type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
aria-describedby="search-addon" />
    <button onClick={search} type="button" class="btn btn-outline-primary">search</button>
</div> */}