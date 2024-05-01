import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <div className="card" onClick={showDetail}>
      <img className="item-image" width={250} src={item?.img} alt="개별상품" />
      <div>{item?.choice ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard;
