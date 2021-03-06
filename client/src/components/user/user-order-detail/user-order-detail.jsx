import React from 'react';
import axios from 'axios';
import Spinner from '../../spinner/spinner';
import './user-order-detail.scss';

const renderUserDetail = (order)=>{
    return(
                <>
                    <h1>Order Details</h1>
                    <div className='order-detail-container'> 

                        <div className='order-detail'>

                            <div className="order-detail-text">
                                <span className="order-detail-text-header"> Order ID </span> 
                                    <span className="order-detail-text-value">{order._id.toUpperCase()}</span>
                            </div>

                            <div className="order-detail-text">                            
                                <span className="order-detail-text-header"> Order Amount  </span> 
                                <span className="order-detail-text-value">KES{' '}{order.amount}</span>
                            </div>

                            <div className="order-detail-text">                           
                                <span className="order-detail-text-header"> Order Status  </span> 
                                <span className="order-detail-text-value">{order.status}</span>
                            </div>

                        </div>                    

                        <div className='order-detail'>
                            <div className="order-detail-text">                            
                                <span className="order-detail-text-header">Date of Order </span> 
                                <span className="order-detail-text-value">{new Date(order.created).toLocaleDateString()}</span>
                            </div>
                            
                        </div>            
                                               
                    
                        
                        <div className="order-product-wrapper"  >
                            <h2>Items bought</h2>
                            {order.products.map(product=>
                        
                                <div className='order-detail-product' key={product.name} >
                                
                                    <div className='order-product-background-image'
                                    style={{ backgroundImage: `url(${product.imageurl})` }}>
                                    
                                    </div>
                                
                                
                                    <div className='order-product-description'>
                                        <div>{product.name}</div>
                                        <div>Quantity : {' '} {product.quantity}</div>
                                        <div>Unit Price : {' '} KES {' '}{product.price}</div>
                                    </div>
                                </div>
                                
                            )}
                        </div>                   
                    
                    
                    
                    </div>
                </>
    );

}


class UserOrderDetail extends React.Component {

    state ={
        isLoaded: false,
        orders:[]
    }
    
    async componentDidMount(){
        const res = await axios.get('/api/orders');
        this.setState({...this.state, orders: res.data, isLoaded: true})
    }

    render() { 
        const{orders, isLoaded} = this.state;
        const order = orders.find(order=>order._id === this.props.match.params.orderId)
        return ( 
            <div>        
               {isLoaded?
               renderUserDetail(order)
               :
               <Spinner/>
               }     
                

            </div>
         );
    }
}
 
export default UserOrderDetail;



