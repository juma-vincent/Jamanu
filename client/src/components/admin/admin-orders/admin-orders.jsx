import React, { Component } from 'react';
import './admin-orders.scss';
import { withRouter } from 'react-router-dom';
import Spinner from '../../spinner/spinner';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrders } from '../../../redux/shop/shop.selectors';
import { fetchOrders } from '../../../redux/shop/shop.actions';


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
                        
                    </div>
                    
                </div>
            )}

        
            

        </div>

    );
}



class AdminOrders extends Component {
    state = { 
        isLoaded: false,        
     }

    async componentDidMount(){
        await this.props.fetchOrders();
        this.setState({...this.state, isLoaded: true})        
    }
    
    render() { 

        const {history, match} = this.props;
        const {orders} = this.props;
        
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

const mapStateToProps = createStructuredSelector({
    orders: selectOrders,
  });

const mapDispatchToProps = (dispatch)=>({
    fetchOrders: ()=> dispatch(fetchOrders()),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminOrders));