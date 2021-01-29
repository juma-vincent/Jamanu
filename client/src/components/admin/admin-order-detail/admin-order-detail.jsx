import React from 'react';
import Spinner from '../../spinner/spinner';
import './admin-order-detail.scss'
import { fetchOrders, updateOrderStatus } from '../../../redux/shop/shop.actions';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrders } from '../../../redux/shop/shop.selectors';



class AdminOrderDetail extends React.Component {

    state ={
        isLoaded: false,  
        status: ''  ,    
    }
    
    async componentDidMount(){
        await this.props.fetchOrders();
        this.setState({...this.state, isLoaded: true})
    }

    handleChange= (event)=>{
        const {name, value} = event.target;
        this.setState({...this.state, [name]: value});
        
       
    }

    handleSubmit = async (event)=>{
      event.preventDefault();
      const { status } = this.state;
      const orderId = this.props.match.params.orderId            

      
      this.props.updateOrderStatus({status, orderId})
      this.setState({ status: '' });
    }

    render() { 
        const { isLoaded, status } = this.state;
        const {orders} = this.props;

        const order = orders.find(order=>order._id === this.props.match.params.orderId)
        return ( 
            <div>
                {isLoaded? (
                 <>
                    <h1>Order Details</h1>
                    <div className='order-detail-container'> 
    
                        <div className='order-detail'>
    
                            <div className="order-detail-text">
                                <span className="order-detail-text-header"> Order ID </span> 
                                    <span className="order-detail-text-value">{order._id}</span>
                            </div>
    
                            <div className="order-detail-text">                            
                                <span className="order-detail-text-header"> Order Amount  </span> 
                                <span className="order-detail-text-value">KES {' '}{order.amount}</span>
                            </div>
    
                            <div className="order-detail-text">                           
                                <span className="order-detail-text-header"> Order Status  </span> 
                                <span className="order-detail-text-value">{order.status}</span>
                            </div>
    
                        </div>                    
    
                        <div className='order-detail'>
                            <div className="order-detail-text">                            
                                <span className="order-detail-text-header">Date of Order </span> 
                                <span className="order-detail-text-value">
                                    {new Date(order.created).toLocaleDateString()}
                                </span>
                            </div>
    
                            <div className="order-detail-text">                            
                                <span className="order-detail-text-header">Contact </span> 
                                <span className="order-detail-text-value">{order.contact}</span>
                            </div>
    
                            <div className="order-detail-text">                             
                                <span className="order-detail-text-header">Mpesa Transaction ID  </span> 
                                <span className="order-detail-text-value">{order.transactionId}</span>
                            </div>
    
                            
                        </div>    
    
                        <div className="order-detail-input-container">
                            <h2>Update order status</h2>                            
                            <label htmlFor='status'><span className='label-name'>Order Status </span>
                            <select value={status}  name='status' onChange={this.handleChange}>
                            <option value=''>Not Selected</option>
                            <option value='Unprocessed'>Unprocessed</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipping">Shipping</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                            </select>
                            </label>
                            
                            
                            <button id='update-order-btn' onClick={this.handleSubmit}>
                            Update Order status
                            </button>
                        
    
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
                ):
                <Spinner />
                 }
                

            </div>
         );
    }
}

const mapStateToProps = createStructuredSelector({
    orders: selectOrders,
  });

const mapDispatchToProps = (dispatch)=>({
    fetchOrders: ()=> dispatch(fetchOrders()),
    updateOrderStatus: ({status, orderId})=> dispatch(updateOrderStatus({status, orderId})),
}) ; 
 
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderDetail);



