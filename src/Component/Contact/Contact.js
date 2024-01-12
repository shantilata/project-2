import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    let { name } = useParams()
    console.log("Received Value:",name)
    return (
        <div>
            <h1>HI {name},Good Morning</h1>
        </div>
    )
}

export default Contact