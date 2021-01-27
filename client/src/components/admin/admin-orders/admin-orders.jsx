import React, { Component } from 'react';
import axios from 'axios';
import './admin-orders.scss';
import { withRouter } from 'react-router-dom';
import Spinner from '../../spinner/spinner';

const renderAdminOrders = (history, match, orders)=>{
    return(

        <div className='admin-orders-container' >
                
            <h2>Order History</h2>

            {orders.reverse().filter((order, index)=> index<20).map((order)=>  
                        
                <div className='admin-orders'  key={order._id} >                    
                
                
                    <div className='order-column'>
                        <div>
                            Order ID : {' '}
                            <span style={{fontWeight: 'bold', color:'orange'}}>
                                {order._id.toUpperCase()} 
                            </span>
                        </div> 

                        <div>
                        Mpesa Transaction Id  :  {' '}
                            <span style={{fontWeight: 'bold', color:'orange'}}>
                                {order.transactionId}
                            </span>
                        </div> 

                        <div>
                            Quantity of Items : {' '}
                            <span style={{fontWeight: 'bold', color:'orange'}}> 
                                {order.products.length} 
                            </span>
                        </div>                       

                    </div>
                                    
                    <div className='order-column'>
                        
                    <div>Amount : KES {' '}
                            <span style={{fontWeight: 'bold', color:'orange'}}>
                                {order.amount}
                            </span>
                    </div>  

                        <div>
                            Date of order : {' '}
                            <span style={{fontWeight: 'bold', color:'orange'}}>
                                {new Date(order.created).toLocaleDateString()}
                            </span>
                        </div>

                        <div>
                            Time <span style={{fontWeight: 'bold', color:'orange'}}>
                                    {new Date(order.created).getHours()}
                                </span> : {' '}
                            <span style={{fontWeight: 'bold', color:'orange'}}>
                                {new Date(order.created).getMinutes()}
                            </span> 
                            
                        </div>
                    </div>

                    <div className='order-column'>
                        <div>
                                Contact : {' '}
                                <span style={{fontWeight: 'bold', color:'orange'}}>
                                    {order.contact}
                                </span>
                        </div> 
                            
                        <div>
                                Status : {' '}
                                <span style={{fontWeight: 'bold', color:'orange'}}>
                                    {order.status}
                                </span>
                        </div> 

                        
                    </div>

                    <div className='order-column'><div>
                        <button id='order-btn' onClick={()=>history.push(`${match.path}/${order._id}`)}>
                        See Order details
                        </button>
                        
                        </div>
                        
                        <div>
                        <button id='update-order-btn'>
                        Update Order status
                        </button>
                        </div>
                    </div>
                    
                </div>
            )}

        
            

        </div>

    );
}



class AdminOrders extends Component {
    state = { 
        isLoaded: false,
        orders:[]
     }

    async componentDidMount(){
        const res = await axios.get('/api/admin/all_orders');
        this.setState({...this.state, orders: res.data, isLoaded: true})
    }
    
    render() { 

        const {history, match} = this.props;
        const {orders} = this.state;
        
        return ( 
           <div>
               {this.state.isLoaded?            
           renderAdminOrders(history, match, orders)
           :
           
           <Spinner/>
           }
           </div>
        );
    }
}
 
export default withRouter(AdminOrders);