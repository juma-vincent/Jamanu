import React, { Component } from "react";
import "./shop-page.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { fetchProductsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsProductsFetching, selectProducts } from "../../redux/shop/shop.selectors";
import ProductsOverview from "../../components/products-overview/products-overview";
import ProductsPage from "../products-page/products-page";

const ProductsOverviewWithSpinner = WithSpinner(ProductsOverview);
const ProductsPageWithSpinner = WithSpinner(ProductsPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchProductsStartAsync } = this.props;
    fetchProductsStartAsync();
  }

  render() {
    const { match, isProductFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <ProductsOverviewWithSpinner
              isLoading={isProductFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:productId`}
          render={(props) => (
            <ProductsPageWithSpinner
              isLoading={isProductFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  farmProduce: selectProducts,
  isProductFetching: selectIsProductsFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
