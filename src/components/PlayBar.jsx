//  NODE_MODULES
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

//COMPONENTS
import Buttons from './Buttons';
import Loading from './Loading';
import Volume from './Volume'
//CSS
import '../App.css'

export default class PlayBar extends Component {
constructor(props){ 
    super(props); 
    this.state={
        loading: true, 
        SWA: '',
    }
}

componentDidMount(){
    console.log(this.state)
    this.setState({
        loading : false, 
        SWA : this.props.SWA
    })
}

render() {
let state = this.state
return (

<div style = { styles.bar }>
{ state.loading ? 
    < Loading /> 
:

<Row> 
    {console.log(this.props.playing)}
    <Col>
    <Buttons
    style={styles.buttons}
    CTS = {this.props.CTS}
    playing = {this.props.playing}
    />
    </Col>
   <Col> 
   <Volume 
   SWA={this.props.SWA}
   volume={this.props.volume}
   />
   </Col>
</Row>  
}
</div>
        )
    }
}

const styles={
    bar:{
        position: 'fixed',
        width:'100%',
        bottom: '40px', 
        marginBottom: 40,
        backgroundColor: 'white',
    },
    buttons: {
        position: 'absolute',
        alignItems: 'center',
        padding: 10, 
        float: 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
    },
    nowPlaying: {
        alignItems: 'center',
        paddingRight: '4%'

    }
}
