import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state)=>state.product.selectedItem);
  let {id} = useParams();
  const dispatch = useDispatch()
  
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id))
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
