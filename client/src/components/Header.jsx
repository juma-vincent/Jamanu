import React from "react";
import UserDashboard from "./UserDashboard";



class Header extends React.Component {
        

    renderContent =()=>{
        if(this.props.user){
            return  <UserDashboard user={this.props.user}/>;
        } 
        return <h1>Hello guest</h1>;
    }

    render() {
        
        return <div>{this.renderContent()}</div>
      
    }
  }

export default Header;



// return {
//     ...state,
//     currentUser: action.payload,
//     error: null,
//   };



// componentDidMount() {
//     const { fetchFarmProduceStartAsync } = this.props;
//     fetchFarmProduceStartAsync();
//   }


// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }
//   export default Welcome;




// import React from "react";


// const UserDashboard = ({name})=> {

//     return <p>Welcome {props.name}</p>;
//   }

// export default UserDashboard