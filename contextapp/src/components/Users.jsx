import React, { useContext } from 'react'
import { context } from '../context/DataProvide'
import User from './User'


export default function Users() {
    const {users}=useContext(context)
    
    return (
        <div className='container mt-2'>
            <div className='row'>
            {
                users.map((user) =>(
                    <User key={user.id} data={user} />
                ))
            }
            </div>
        </div>
    )
}
