import React, { Component } from 'react';
import axios from 'axios';
import './user-orders.scss'

class UserOrders extends Component {
    state = { 
        orders:[]
     }

    async componentDidMount(){
        const res = await axios.get('/api/orders');
        this.setState({...this.state, orders: res.data})
    }
    
    render() { 
        return ( 
            <div className='user-orders-container' >
            <h2>Order History</h2>
                {this.state.orders.reverse().filter((order, index)=> index<10).map((order)=>           
                    <div className='user-orders'  key={order._id} > 
                    <div>Order ID: <span style={{fontWeight: 'bold', color:'orange'}}>{order._id.toUpperCase()} </span></div> 
                    <div>Status: <span style={{fontWeight: 'bold', color:'orange'}}>{order.status}</span></div>
                    <div>Items ordered: <span style={{fontWeight: 'bold', color:'orange'}}>
                        {order.products.length}
                        </span></div>
                    <div>Amount : <span style={{fontWeight: 'bold', color:'orange'}}>{order.amount}</span></div>                    
                    <div>Date created: <span style={{fontWeight: 'bold', color:'orange'}}>
                    {new Date(order.created).toLocaleDateString()}</span>
                    </div>
                   
    
          </div>
          )}
        </div>
         );
    }
}
 
export default UserOrders;