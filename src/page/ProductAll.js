import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
//    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/pattorney/0430_shopping/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(()=>{
    getProducts()
  }, [query]);

  return (
    <div>
      <Container />
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3} md={4} sm={6}><ProductCard item={menu}/></Col>  
          ))}          
        </Row>
    </div>
  );
}

export default ProductAll;