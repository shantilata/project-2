import React from 'react'

const Childform = (props) => {

    return (
        <div>
            <h1>Given data</h1>
            <h2>{props?.fname}</h2>
        <h3>{props?.lname}</h3>
        <h4>{props?.mail}</h4>
        {/* <h5>{props?.fname}</h5> */}
        <h6>{props?.pwd}</h6>
        </div>
    )
}

export default Childform