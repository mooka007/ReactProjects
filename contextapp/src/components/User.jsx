import React, { useContext } from 'react'
import { context } from '../context/DataProvide'


export default function User(props) {
    const {deleteUser} = useContext(context)
    return (
        <div>
            
            <ul>
                        <li>{props.data.name}</li>
                        <li>{props.data.email}</li>
                        <li>{props.data.phone}</li>
                        <li>
                            <button onClick={() =>deleteUser(props.data.id)} className='btn btn-danger'>Delete</button>
                        </li>
            </ul>
        </div>
    )
}
