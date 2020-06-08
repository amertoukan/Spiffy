import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={styles.footer}>
                <h5 style={styles.name}> Amer Toukan © 2020 </h5>
                <a href="https://www.amertoukan.com" style={styles.link}><h5>https://www.amertoukan.com</h5></a>
            </div>
        )
    }
}

const styles = { 
    footer: { 
        padding: 10,
        position: 'fixed',
       
        border: 'solid 1px #000', 
        width:'100%',
        bottom: '10px', 
        backgroundColor: 'white',
    },
    link: {
        float: 'right',
        marginLeft: 'auto'
    },
    name: {
        display: 'inline-block',
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        float: 'left',
        justifyContent: 'space-between',
        marginRight: 'auto'
    }
}