import '../css/App.css';
import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

function HeaderProducts() {
  const [headerProducts, setHeaderProducts] = useState([])

  useEffect(() => {
    async function getAllHeaderProducts() {
      try {
        const headerProducts = await axios.get("http://127.0.0.1:8000/api/headerProducts/")
        //console.log(headerProducts.data)
        setHeaderProducts(headerProducts.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllHeaderProducts()
  }, [])

  return (
    <div className="HeaderProducts container">
      <h1>Header Products</h1>
      {
        headerProducts.map((headerProduct) => {
          return (
            <div key={headerProduct.id}>
              <i className={headerProduct.icon}></i>
              <h4>{headerProduct.title}</h4>
              <span>{headerProduct.title_text}</span>
              {headerProduct.subTT.map((subT) => (
                <div key={subT.title}>
                  <h6>{subT.title}</h6>
                  <p>{subT.text}</p>
                </div>
              ))}
            </div>
          )
        })
      }
    </div>
  );
}

export default HeaderProducts;