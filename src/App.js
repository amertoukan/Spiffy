//NODE_MODULES
import React from 'react';
import Spotify from 'spotify-web-api-js';
//CSS
import './App.css';
//IMAGES
import loading from './img/loading.svg';
// COMPONENTS
import Home from './components/Home'
import Footer from './components/Footer'
//PAGES 
import NowPlaying from './pages/NowPlaying';

//spotify web api
const SWA = new Spotify(); 

class App extends React.Component {
  constructor(props){
    super(props);
    const hashes = this.getHashParams();
    this.state = {
      loading: false, 
      loggedIn: hashes.access_token ? true : false, 
      nowPlaying: {
        name:"Nothing is playing", 
        image: ''
      }
    }
    if(hashes.access_token){
      console.log('access token found.' + hashes.access_token)
      SWA.setAccessToken(hashes.access_token)
    } else {
      console.log('access token missing')
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

 
  render(){
 
  return (
    <div className="App">


{
//Welcome to Spotify.. Login button 
} 

{
this.state.loggedIn ? 

<NowPlaying 
SWA={SWA}
getPlaying={this.getNowPlaying}
nowPlaying={this.state.nowPlaying}
loading={this.state.loading}
/>
: 
<Home />
}
<Footer />
    
    </div>
  );
  }
}

export default App;
