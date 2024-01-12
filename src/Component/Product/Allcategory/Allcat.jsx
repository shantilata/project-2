import React from 'react'
import DataJson from '../Product.json'
import './Allcat.css'
import { Link } from 'react-router-dom'

function Allcat() {
    return (
        <>
            {DataJson.Product.map(prod => {

                return (
                    <React.Fragment key={prod.id}>
                        <h1>{prod.category}</h1>
                        <p>{prod.pname}</p>
                        <Link to={`sub_cat/${prod.id}`}>
                            <button>Choose category</button>
                        </Link>
                        <hr />
                    </React.Fragment>
                )


            })}
        </>
    )
}

export default Allcat