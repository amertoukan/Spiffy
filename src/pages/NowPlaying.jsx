//NODE_MODULES
import React, { Component } from 'react'
//COMPONENTS
import NavMenu from '../components/navMenu';
import Play from '../components/Play';
import PlayBar from '../components/PlayBar.jsx';

export default class NowPlaying extends Component {
constructor(props){ 
    super(props); 
    this.state={ 
        loading: false, 
        play: true,
        playing: false, 
        spotify: {
            device: null,
            deviceType: null,
            volume: null,
            nowPlaying: { 
                song: null, 
                artist: null
            },
            popularity: null
        }
    }
    this.callToSpotify = this.callToSpotify.bind(this)
    this.getMyTrack = this.getMyTrack.bind(this)
}


async getMyTrack(props){
    const SpotifyPlease = this.props.SWA.getMyCurrentPlaybackState()
        await SpotifyPlease 
            .then(res => {
                if( res ){
                this.setState ({
                    playing: res.is_playing, 
                    spotify: {
                        device: res.device.name ? res.device.name : '',
                        deviceType: res.device.type ? res.device.type : '' ,
                        volume: res.device.volume_percent ? res.device.volume_percent : '',
                        nowPlaying: { 
                            coverImg: res.item.album.images[0].url ? res.item.album.images[0].url : '' ,
                            song: res.item.name ? res.item.name : '', 
                            artist: res.item.artists[0].name ? res.item.artists[0].name : ''
                        },
                        popularity: res.popularity ? res.popularity : ''
                    }

                })} else { 
                    this.setState({
                        nowPlaying: {
                            song: "Nothing is playing on Spotify.",
                            artist: 'Please insure something is playing and then try again. '
                        }
                    })
                }
              
            })
}

async callToSpotify(props){
    let state = this.state
    let command = props.target.id
    
    //INITIATE LOADING STATE
  this.setState({ loading: true })
    const spotifyAction = this.props.SWA[command]()
    await spotifyAction
        .then(res => this.setState({
            loading: false
        }))
    if(command !== 'pause'){
    setTimeout(this.getMyTrack(), 2500)}
}
componentDidUpdate(){ 
    this.getMyTrack()
}
componentDidMount(){
    this.getMyTrack()
}
render() {
    return (

<div>

<Play
    SWA={this.props.SWA}
    spotify={this.state.spotify}
    loading={this.state.loading}
/>

<PlayBar
    SWA = {this.props.SWA}
    getMyTrack = {this.getMyTrack}
    CTS = { this.callToSpotify }
    playing = {this.state.playing}
    spotify = {this.state.spotify}
    volume={this.state.spotify.volume}
/>
</div>
        )
    }
}
