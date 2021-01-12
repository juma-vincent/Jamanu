import React from 'react';
import axios from 'axios';


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
      <div>
        {this.state.products.map(product=>
          
          <div key={product.id}> 
            <h3>{product.name}</h3>
          </div>
          )}
        </div>
     );
  }
}
 
export default AdminUploadedProducts;

