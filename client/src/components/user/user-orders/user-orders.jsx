import React, { Component } from 'react';
import axios from 'axios';
import './user-orders.scss';
import { withRouter } from 'react-router-dom';
import Spinner from '../../spinner/spinner';


const renderUserOrders = (history, match, orders)=>{
    return(
        <div className='user-orders-container' >
               
                <h2>Order History</h2>

                {orders.reverse().filter((order, index)=> index<10).map((order)=>  
                         
                    <div className='user-orders'  key={order._id} >                    
                    
                        <div className='order-column'>
                            <div>
                                Order ID : {' '}
                                <span style={{fontWeight: 'bold', color:'orange'}}>
                                    {order._id.toUpperCase()} 
                                </span>
                            </div> 

                            <div>
                                Status : {' '}
                                <span style={{fontWeight: 'bold', color:'orange'}}>
                                    {order.status}
                                </span>
                            </div>                        

                        </div>

                        <div className='order-column'>
                            <div>
                                Items ordered : {' '}
                                <span style={{fontWeight: 'bold', color:'orange'}}> 
                                    {order.products.length} 
                                </span>
                            </div>

                            <div>Amount : {' '}
                                <span style={{fontWeight: 'bold', color:'orange'}}>
                                    {order.amount}
                                </span>
                            </div>  
                        </div>

                                        
                        <div className='order-column'>
                            <div>
                                Date created : {' '}
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
                        
                        <button id='order-btn' onClick={()=>history.push(`${match.path}/${order._id}`)}>
                            See Order details
                        </button>

                    </div>
                )}

          
                

        </div>
    );
}



class UserOrders extends Component {
    state = { 
        isLoaded: false,
        orders:[]
     }

    async componentDidMount(){
        const res = await axios.get('/api/orders');
        this.setState({...this.state, orders: res.data, isLoaded: true})
    }
    
    render() { 
        const {history, match} = this.props
        const {orders} = this.state;
        return ( 
            <div>
                  {this.state.isLoaded?
                    renderUserOrders(history, match, orders)            
                         :
                    <Spinner/>
                   }
            </div>
            
        );
    }
}
 
export default withRouter(UserOrders);