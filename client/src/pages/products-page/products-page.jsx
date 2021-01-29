import React,{useEffect, useState} from "react";
import "./products-page.scss";
import { connect } from "react-redux";
import ProductItem from "../../components/product-item/product-item";
import { selectEachProduct } from "../../redux/shop/shop.selectors";
import Spinner from "../../components/spinner/spinner";


class ProductsPage extends React.Component {
  
  render() { 
    
    return ( 
      
      
      <>
        {this.props.categoryItems?
        (
         <div className="products-page">
           
            <h2 className="title"> {this.props.categoryItems.title.toUpperCase()}</h2>
            <div className="items">            
              {this.props.categoryItems.items.map((item) => (
                <ProductItem
                className="product-item"
                key={item.id}
                item={item}
                />
              ))}
            </div>
            
          </div>
        )
        :
        <Spinner/>
        }
      </>
    
     );
  }
}
 



const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectEachProduct(ownProps.match.params.productId)(
    state
  ),
});





export default connect(mapStateToProps)(ProductsPage);
