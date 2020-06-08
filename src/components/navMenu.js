import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';

const navItems = [
    {title: 'Now Playing', icon: 'fas fa-music'}, 
]
export default class NavMenu extends Component {
    render() {
        return (
            <SideNav   
                onSelect={(selected) => {
                    //Add code here
                }}
                style={styles.nav}
            >
                <Toggle/>

                <SideNav.Nav defaultSelected="home">
                {navItems.map(e => (
                    <NavItem eventKey={e.title.toLowerCase()} key={e.title.toLocaleLowerCase()}>
                    <NavIcon>
                     <i className={e.icon} style={{fontSize:'1.75em'}} style={styles.icon}/>
                    </NavIcon>
         
                    <NavText style={styles.text}>
                        {e.title}
                    </NavText>
                </NavItem>
                ))}
       
                </SideNav.Nav>
            </SideNav>
            
        )
        }
    }
const styles={
    nav:{
        backgroundColor: '#999999'
    },
    icon:{
        color: 'black',
        fontSize: '1.25em'
    },
    text: {
        color: 'black',
        fontSize: '1.25em',
        fontFamily: 'Roboto'
    }
}