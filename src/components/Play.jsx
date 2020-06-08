import React, { Component } from 'react';
import Loading from './Loading.jsx'
import {Button, Row, Col} from 'react-bootstrap';

export default class Play extends Component {
    constructor(props){
        super(props); 
        this.state={
        } 
    }



render() {
return (

this.state.loading ? 

<div>
<Loading 
/>
</div>


:


<div>
<div style={styles.playing}> 
  {//Now playing 
  }
<Row>
    <Col>
    <h4> Now Playing: </h4>
    <h2> { this.props.spotify.nowPlaying.song } </h2>
    <h3> { this.props.spotify.nowPlaying.artist } </h3>
    </Col>
    <Col>
    <h4>Playing on: {this.props.spotify.device} </h4>
    <h5> {this.props.spotify.deviceType} </h5>
    </Col>
</Row>

</div>


<img 
 src={this.props.spotify.nowPlaying.coverImg}
/>

</div>
            
)
}
}

const styles = { 
    playing: {
        color: 'white'
    }
}