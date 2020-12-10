import React from "react";
import './ListProduct.css';


function ListProduct (props) {
  return (
    <div className='list-container'>
      <h2> {props.tipo}</h2>
      <ul>
        {props.lista.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default ListProduct;