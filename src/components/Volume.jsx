import React, { Component } from 'react'
import {Form, } from 'react-bootstrap';
export default class Volume extends Component {
    constructor(props){ 
        super(props)
        this.state={
            percent: null, 
            loading: false
        }
        this.setVolume = this.setVolume.bind(this)
    }
   async setVolume(p){
       this.setState({
           loading: true 
       })
     let percent = (p.target.value)
    const changeVolume = this.props.SWA.setVolume(percent)
        await changeVolume 
            .then (res => this.setState ({
                percent: percent, 
                loading: false
            }))
    }
    componentDidMount(){
        this.setState({ 
            percent: this.props.volume
        })
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group 
                    controlId="formBasicRange" 
                    style={styles.volume}
                    value={this.state.percent}
                    onChange={this.setVolume}
                    >
                        <Form.Label> <h5> Volume </h5> {this.state.percent}</Form.Label>
                        <Form.Control type='range'/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const styles= {
    volume: {
        width: '50%',
        float: 'right',
        marginLeft: 'auto',
        marginRight: 20
    }
}
