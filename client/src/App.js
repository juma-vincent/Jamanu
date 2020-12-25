import React from "react";
import './App.css';
import Header from './components/Header';
import { homeUrl } from './utils';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';
import UserDashboard from "./components/UserDashboard";




class App extends React.Component {
  

  componentDidMount() {     
    this.props.fetchUser();     
    
  }       
        
    

  render() {   
    {console.log(this.props.auth)}   
    
    return (
      <div className="App"  >
  
        {/* <Route exact path='/'component={Home} /> */}
        <Route exact path='/dashboard'component={UserDashboard} />
        
          <div className="" style={{height:'90px', backgroundColor:'#DAF7A6 ',
          position:'relative'
          }}>
          <Header  user={this.props.auth}/>             
            
            
          
          </div>
    
    

      </div>
    );
  }
    }

    const mapStateToProps = ({auth})=>{
      return {auth};
    }
    export default connect(mapStateToProps, actions)(App);
  



