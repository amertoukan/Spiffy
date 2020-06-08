import React, { Component } from 'react'; 
import {Button} from 'react-bootstrap'
import '../App.css'

export default class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.header}>Spiffy</h1>
                <p style={styles.text} className="textAnimate">The goal of this application is for users to connect, view and control their spotify accounts.</p>
                <a href="http://localhost:8888">
                <Button style={styles.button}> 
                   Log In with Spotify
                </Button>
                </a>
            </div>
        )
    }
}


const styles={
    container: {
        margin: 40, 
    },
    header: {
        color:'white',
        fontFamily: 'Pacifico',
        fontSize: '5em',
        margin: '3%',
        marginTop: '10%'
    },
    text: {
        color:'#999999',
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'left'
    },
    button: { 
        fontFamily: 'Roboto',
        width: '100%'
    }
}