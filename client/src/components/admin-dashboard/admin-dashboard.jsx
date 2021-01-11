import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { uploadProduct } from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input";



class AdminDashboard extends React.Component {
    state= {
      name:'',
      imageUrl: '',
      price: null,
      category: '',
      unitType: ''

    }

    handleChange= (e)=>{
       
    }

    handleSubmit = async ()=>{
      const { name, imageUrl, price, category, unitType } = this.state;
      const { history } = this.props;
      

      const res = await axios.post(`/api/new_product`,
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
      const { name, imageUrl, price, category, unitType } = this.state;
      return(
        <div>
            <h1>Hello, {this.props.name}</h1>
            <h1>Add New Product</h1>
            <h1>Product Information</h1>
            <form >
              <FormInput
              name='name'
              label='Product Name' 
              type='text'          
              value={name}
              required 
              handleChange={this.handleChange}/>

              <FormInput
              name='imageUrl'
              label='Image Url' 
              type='text'          
              value={imageUrl}
              required 
              handleChange={this.handleChange}/>

              <FormInput
              name='price'
              label='Price in KES' 
              type='number'          
              value={price}
              required 
              handleChange={this.handleChange}/>

            <label >Category</label>
            <select value={category} onChange={this.handleChange}>
              <option value='cereals'>Cereal</option>
              <option value="legumes">Legume</option>
              <option value="vegetables">Vegetable</option>
              <option value="fruits">Fruit</option>
              <option value="tubers">Tuber</option>
              <option value="livestock">Livestock</option>
            </select>

            <label >Unit Type</label>
            <select value={unitType} onChange={this.handleChange}>
              <option value='cereals'>Per KG</option>
              <option value="legumes">Each</option>
              <option value="">Empty</option>              
            </select>

              
            </form>
            

            <button onClick={ this.handleSubmit }>
              Add product
            </button>
        </div>
      ); 
    }
  }
  export default withRouter(AdminDashboard);




