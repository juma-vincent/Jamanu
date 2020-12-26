import React from "react";
import { homeUrl } from "../utils";
import UserDashboard from "./UserDashboard";




class Header extends React.Component {
        

    renderContent =()=>{
        switch(this.props.user){
            case null:
                return 
            case false:
                return <a href={`${homeUrl}/auth/google`} > 
                <button    
              style={{
              padding:'10px', backgroundColor:'#0FB213',
               color:'white',
               border:'none',
               outline: 'none',
               position:'absolute',
               top:'20px',
               right: '26px',
               cursor: 'pointer'
            }} >Login with Google </button></a>
            default:
                return    <a href={`${homeUrl}/api/logout`}><button> Logout</button> </a>
                    
        }
        
    }

    render() {
        
        return <div>
            <div style={{color:'Orange', fontSize:'29px', paddingTop:'7px',  fontWeight:'bold' 
              }}>Jamanu Food Lover's Market</div>
            {this.renderContent()}
            </div>
      
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