import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, DropdownButton, Dropdown, Button } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let {id} = useParams();
  
  const getProductDetail = async () => {
//    let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/pattorney/0430_shopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className="product-image">
          <img width={350} src={product?.img} alt="상품상세" />
        </Col>
        <Col className="detail-info">
          <div>{product?.title}</div>
          <div>{product?.price}원</div>
          <div>{product?.choice ? "Conscious Choice" : ""}</div>
          <div>{product?.new ? "신제품" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈">
            {product?.size.map((size, index)=>(
              <Dropdown.Item key={index}>{size}</Dropdown.Item>
            ))}
          </DropdownButton>          
          <Button>구매하기</Button>          
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
