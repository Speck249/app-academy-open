import { React, useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {
  const [sideOpen, setSideOpen] = useState(
    JSON.parse(localStorage.getItem("status")) || true
  );
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (selectedProduct) {
      setSideOpen(true)
    }
  }, [selectedProduct])


  useEffect(() => {
    if(!sideOpen) {
      setSelectedProduct()
      localStorage.setItem("status", JSON.stringify(false))
    } else {
      localStorage.setItem("status", true)
    }
  }, [sideOpen])

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                setSelectedProduct(item)
              }}
              isSelected={selectedProduct?.id === item.id}
              />
              
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle" onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails product={selectedProduct} visible={sideOpen} />
      </div>
    </div>
  );
}

export default ProductView;