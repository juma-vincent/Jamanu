import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { uploadProduct } from "../../../redux/user/user.actions";
import {connect} from 'react-redux';
import CustomButton from "../../custom-button/custom-button";
import { FormContainer } from './admin-upload-product.styles';


class UploadNewProduct extends Component {
    state= {
        name:'',
        imageurl: '',
        price: 0,
        category: '',
        unitType: ''
  
      }   
      
  
      handleChange= (event)=>{
          const {name, value} = event.target;
          this.setState({...this.state, [name]: value});
          console.log(this.state)
         
      }
  
      handleSubmit = async (event)=>{
        event.preventDefault();
        const { name, imageurl, price, category, unitType } = this.state;
        const { history, uploadProduct } = this.props;            
  
        
        uploadProduct({name, imageurl, price, category, unitType }, history);
        this.setState({ name:"", imageurl:"", price:0, category:"", unitType:"" });
      }
  
      render() {
        const { name, imageurl, price, category, unitType } = this.state;        
        
        
        return(
          <div>
              <h2> Add New Product</h2>        
              
              <form >        
  
                <FormContainer>
                    <label htmlFor='name'> <span className='label-name'>Product Name </span> 
                        <input                      
                        name='name'                      
                        type='text'
                        value={name}
                        required
                        onChange={this.handleChange}
                        />
                    </label >
                    
                    <label htmlFor='imageurl'><span className='label-name'>Image Url </span> 
                        <input                      
                        name='imageurl'                      
                        type='text'
                        value={imageurl}
                        required
                        onChange={this.handleChange}
                        />
                    </label>
                    
                    <label htmlFor='price'> <span className='label-name'>Price in KES </span> 
                        <input                       
                        name='price'
                        type='number'                  
                        value={price}
                        required
                        onChange={this.handleChange}                  
                        />
                    </label>
                    
                    <label htmlFor='category'><span className='label-name'>Category </span> 
                        <select value={category}  name='category' onChange={this.handleChange}>
                        <option value='cereals'>Cereal</option>
                        <option value="legumes">Legume</option>
                        <option value="vegetables">Vegetable</option>
                        <option value="fruits">Fruit</option>
                        <option value="tubers">Tuber</option>
                        <option value="livestock">Livestock</option>
                        </select>
                    </label>
                    
                    <label htmlFor='unitType'> <span className='label-name'>Unit Type </span> 
                        <select value={unitType} name='unitType' onChange={this.handleChange} >
                        <option value='per kg'>Per KG</option>
                        <option value="each">Each</option>
                        <option value="">Empty</option>
                        </select>
                    </label>
  
                    <CustomButton id='btn' onClick={this.handleSubmit}>Upload</CustomButton>
                </FormContainer>
  
                
              </form>    
  
              
          </div>
        ); 
      }
}


  const mapDispatchToProps = (dispatch) => ({
    uploadProduct: ({name, imageurl, price, category, unitType},history) =>
      dispatch(uploadProduct({ name, imageurl, price, category, unitType },history)),
  });
 
export default connect(null, mapDispatchToProps)(withRouter(UploadNewProduct));