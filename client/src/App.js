import React from "react";
import './App.css';
import Header from './components/Header';
import { homeUrl } from './utils';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';
import UserDashboard from "./components/UserDashboard";

const Home =()=> <div>I am home</div>


class App extends React.Component {

  // state = {
  //   currentUser: null
  // };

  componentDidMount() {     
    this.props.fetchUser();   
    
    
  }
   renderButton = ()=>{
    return(
      <button onClick={()=>this.props.logInUser() } style={{
        padding:'10px', backgroundColor:'#0FB213',
         color:'white',
         border:'none',
         outline: 'none',
         position:'absolute',
         top:'100px',
         right: '26px',
         cursor: 'pointer'
         }}>Login with Google</button>
        
    );
  }

      render() {
        
        console.log(this.props)
        return (
          <div className="App"  >
      
      <Route exact path='/dashboard'component={Home} />
      <Route exact path='/'component={UserDashboard} />
        <div className="header" style={{height:'70px', backgroundColor:'#DAF7A6 ',
        position:'relative'
        }}>
            
              <div style={{color:'Orange', fontSize:'29px', paddingTop:'7px',  fontWeight:'bold' 
              }}>Jamanu Food Lover's Market</div>
          
          <Header user={this.props.auth}/>
        
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
  



