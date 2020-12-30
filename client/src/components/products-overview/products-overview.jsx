import React from "react";
import "./products-overview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../../redux/shop/shop.selectors";
import ProductsPreview from "../products-preview/products-preview";


const ProductsOverview = ({ products }) => {
  return (
    <div className="products-overview">
      {products.map(({ id, ...otherProductProps }) => (
        <ProductsPreview key={id} {...otherProductProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(ProductsOverview);
