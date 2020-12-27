import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { homeUrl } from "../utils";
import { uploadProduct } from "../actions";





class AdminDashboard extends React.Component {
    state= {
      name:'',
      imageUrl: '',
      price: null,
      category: '',
      unitType: ''

    }

    handleSubmit = ()=>{
      const { name, imageUrl, price, category, unitType } = this.state;
      const { history } = this.props;

      const res = axios.post(`${homeUrl}/api/new_product`,
      {
      name,
      imageUrl, 
      price, 
      category,
      unitType
      }
      );
      uploadProduct(res.data, history)
    }

    render() {
      
      return(
        <div>
            <h1>Hello, {this.props.name}</h1>
            <h1>Add New Product</h1>
            <h1>Product Information</h1>
            <button onClick={ this.handleSubmit }>
              Add product
            </button>
        </div>
      ); 
    }
  }
  export default withRouter(AdminDashboard);




