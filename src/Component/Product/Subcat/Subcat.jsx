import React from 'react'
import './Subcat.css'
import { useParams, Link } from 'react-router-dom'
import DataJson from '../Product.json'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
const Subcat = () => {
  let { pid } = useParams()
  // console.log("collected pid",pid)
  let subProd = DataJson.Product.find((x) => x.id ==pid)
  // console.log("Sub product",subProd)
  return (
    <>
      <Container>
        <h1>{subProd.category}</h1>
        <Row>
          {subProd.sub_category.map((sp) => (


            <Col key={sp.sub_id} sm={12} md={6} lg={4} xl={4}>
              <h1>Column</h1>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sp.image_url }/>
                <Card.Body>
                  <Card.Title>{sp.sub_name}</Card.Title>
                  <Link to={`single/${sp.sub_id}`}>
                  <Button variant="primary">More details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Subcat