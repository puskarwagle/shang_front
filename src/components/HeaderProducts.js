import '../css/App.css';
import '../css/HeaderMain.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeaderProducts() {
  const [headerProducts, setHeaderProducts] = useState([]);

  useEffect(() => {
    async function getAllHeaderProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/headerProducts/");
        setHeaderProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllHeaderProducts();
  }, []);

  const handleLiClickPP = (index) => {
    setHeaderProducts((prevProducts) => {
      return prevProducts.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            active: true
          };
        } else {
          return {
            ...product,
            active: false
          };
        }
      });
    });
  };

  return (
    <div className="headerProd headerMain">
      <ul className="hMA list-unstyled pt-4 pb-4 ps-4">
        {headerProducts.map((headerProduct, index) => (
          <li
            key={headerProduct.id}
            className={`text-nowrap p-1 ${headerProduct.active ? 'hmaactive' : ''}`}
            onClick={() => handleLiClickPP(index)}
          >
            {headerProduct.title}
          </li>
        ))}
      </ul>
      {headerProducts.map((headerProduct) => (
        <div
          key={headerProduct.id}
          className={`hMB ${headerProduct.active ? 'hmbActive' : 'hmbPassive'}`}
        >
          <div className="hMBFirst">
            <span>
              {headerProduct.title} <i className="fas fa-arrow-right"></i>
            </span>
            <span>{headerProduct.title_text}</span>
          </div>
          <div className="hMBTexts">
            {headerProduct.subTT.map((subT) => (
                <div key={subT.id} className="hMBText">
                  <span>{subT.title}</span>
                  <span>{subT.text}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderProducts;
