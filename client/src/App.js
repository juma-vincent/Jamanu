import React from "react";
import './App.css';
// import Header from './components/Header';
import { homeUrl } from './utils';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';
import UserDashboard from "./components/UserDashboard";




class App extends React.Component {

  // state = {
  //   currentUser: null
  // };

  componentDidMount() {     
    this.props.fetchUser();     
    
  }
  

   renderButton = ()=>{
    return(
      
      <a href={`${homeUrl}/auth/google`} >
        <button    
      style={{
      padding:'10px', backgroundColor:'#0FB213',
       color:'white',
       border:'none',
       outline: 'none',
       position:'absolute',
       top:'100px',
       right: '26px',
       cursor: 'pointer'
    }} >Login with Google </button></a>

     
        
        
    );
  }

      render() {       
        
        return (
          <div className="App"  >
      
      {/* <Route exact path='/'component={Home} /> */}
      <Route exact path='/dashboard'component={UserDashboard} />
        <div className="header" style={{height:'90px', backgroundColor:'#DAF7A6 ',
        position:'relative'
        }}>
        {/* <Header  user={this.props.auth}/> */}

              <div style={{color:'Orange', fontSize:'29px', paddingTop:'7px',  fontWeight:'bold' 
              }}>Jamanu Food Lover's Market</div>
          
          
        
        </div>
        
        <div>
          {
            this.props.auth?
               <a href={`${homeUrl}/api/logout`}><button >Logout</button></a>
            :
                this.renderButton()
            
          }
        </div>

    </div>
        );
      }
    }

    const mapStateToProps = ({auth})=>{
      return {auth};
    }
    export default connect(mapStateToProps, actions)(App);
  



