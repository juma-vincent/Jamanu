import React from "react";


class AdminDashboard extends React.Component {
    state= {

    }

    render() {
      return(
        <div>
            <h1>Hello, {this.props.name}</h1>
            <h1>Add New Product</h1>
            <h1>Product Information</h1>
        </div>
      ); 
    }
  }
  export default AdminDashboard;




