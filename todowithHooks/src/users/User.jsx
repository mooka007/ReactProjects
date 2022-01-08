import React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {
    return (
        <>
            <ul className='list-group'>
                <li className="list-group-item">Name : {props.data.name}</li>
                <li className="list-group-item">Email : {props.data.email}</li>
                <li className="list-group-item">Phone : {props.data.phone}</li>
                <buttons className="form-control btn-warning">
                   <Link to={`/details/${props.apah.id}`} className='btn-btn-warning'>details</Link>
                </buttons>
            </ul>
        </>
    )
}
