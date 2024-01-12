import React from 'react'
import './Single.css'
import { useParams } from 'react-router-dom'
import DataJson from '../Product.json'
import Card from 'react-bootstrap/Card';

// import { Container } from 'react-bootstrap'

const Single = () => {
  const { subpid, pid } = useParams()
  // console.log("collect pid", subpid, "Prod id:", pid);
  let subCat = DataJson.Product.find((data) => data.id == pid)
  console.log("sub product", subCat);
  let SingleProd = subCat.sub_category.find((data) => data.sub_id == subpid)
  return (
    <>
      <Card>
        <Card.Header>{SingleProd.sub_name}</Card.Header>
        <Card.Body>
          <Card.Title>{SingleProd.company}</Card.Title>
          <Card.Text>{SingleProd.price} </Card.Text>
          {/* <Card.Text>{SingleProd.image_url} </Card.Text> */}

        </Card.Body>
      </Card>
    </>
  )
}

export default Single