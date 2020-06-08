import React, { Component } from 'react'

export default class Buttons extends Component {
    
    render() {
        console.log(this.props.playing)
        return (
            <div>
                {/**
 * Previous
 */}
    <i className = {'fas fa-fast-backward fa-3x'}
        style = { styles.button }
        id = "skipToPrevious"
        onClick = {this.props.CTS}
    />
{/**
 * Play Pause Button
 */}
        
        <i className = { this.props.playing ? "fa fa-pause fa-3x" : 'fa fa-play fa-3x' } 
           id = { this.props.playing ? "pause" : 'play' }       
           style = { styles.button } 
           onClick = { this.props.CTS }
        />

{/**
 * Next 
 */}
    <i className = { 'fa fa-fast-forward fa-3x' }
        id = 'skipToNext'
        style = { styles.button }
        onClick = { this.props.CTS }
    />
            </div>
        )
    }
}

const styles={
    bar:{
        position: 'fixed',
        
        width:'100%',
        bottom: '40px', 
        backgroundColor: 'white',
    },
    button: {
     
        alignItems: 'center',
        padding: 10, 
        marginRight: '5%',
        overflow: 'hidden',
    }
}
