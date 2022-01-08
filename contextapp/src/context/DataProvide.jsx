import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const context = createContext()

export default function DataProvide(props) {

    const [users, setusers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setusers(res.data)
        })
    }, []);

    function deleteUser(id){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>{
            const data = users.filter(user => user.id != id)
            setusers(data)
        })
    }

    function addUser (user){
        axios.post('https://jsonplaceholder.typicode.com/users',user)
        .then(res =>{
            setusers([
                res.data, ...users
            ])
            navigate('/users')
        })
    }

    const message = "hi from Navbar"
    const fullname = 'jhon doe'
    return (
        <div>
            <context.Provider value={{message,fullname,users, deleteUser, addUser}}>
                {
                    props.children
                }
            </context.Provider>
        </div>
    )
}
