
import './App.css';
import { homeUrl } from './utils';

function App() {
  return (
    <div className="App"  >
      <div className="header" style={{height:'70px', backgroundColor:'#DAF7A6 ',
    position:'relative'
    }}>

     <div style={{color:'Orange', fontSize:'29px', paddingTop:'7px',  fontWeight:'bold' 
    }}>Jamanu Food Lover's Market</div>
      <a href={`${homeUrl}/auth/google`}><button style={{
        padding:'7px', backgroundColor:'#0FB213',
         color:'white',
         border:'none',
         outline: 'none',
         position:'absolute',
         top:'20px',
         right: '16px',
         cursor: 'pointer'
         }}>Login with Google</button></a>

       
        
      </div>
      

    </div>
  );
}

export default App;
