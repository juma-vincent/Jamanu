import React from 'react';
import axios from 'axios';
import './admin-uploaded-products.scss';


class AdminUploadedProducts extends React.Component {
  state= {
     products: [] 
  }

  async componentDidMount(){
    const res = await axios.get('/api/admin/products');
    this.setState({...this.state, products: res.data})
  }

  render() { 
    return ( 
      <div className='admin-uploaded-products-container' >
        <h2>Upload History</h2>
        {this.state.products.reverse().filter((product, index)=> index<10).map((product)=> 
          
          <div className='admin-uploaded-products'  key={product.id} > 
            <div>Name: <span style={{fontWeight: 'bold', color:'orange'}}>{product.name} </span></div> 
             <div>Category: <span style={{fontWeight: 'bold', color:'orange'}}>{product.category}</span></div>
             <div>Date created: <span style={{fontWeight: 'bold', color:'orange'}}>
               {new Date(product.created).toLocaleDateString()}</span>
             </div>
             {/* <div style={{margin: '5px'}}>Unit Type: <span>{product.unitType}</span></div> */}
                         
          </div>
          )}
        </div>
     );
  }
}
 
export default AdminUploadedProducts;

