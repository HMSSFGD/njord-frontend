import React, { Component } from 'react'
import Marker from './Marker.js';

class Map extends Component {
    constructor(props) {
        super(props)

        // Dark Mode
        this.state = {
            options: {
                ...this.props.theme,
                zoom: 15,
                center: {
                    lat: 51.4560665, 
                    lng: -2.6047954,
                },
                disableDefaultUI: true,
            },
            map: {},

        }

    }

    componentDidMount() {
        const googlescript = document.getElementById('googlescript')
        if(window.google) {
            this.setState({map: new window.google.maps.Map(document.getElementById('map'), this.state.options)})                
                
        } else {
            googlescript.addEventListener('load', () => {
                this.setState({map: new window.google.maps.Map(document.getElementById('map'), this.state.options)})                
            })
        }
    }
    
    render() {
        const mapStyle = {
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
        }

        const childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, {map: this.state.map})
        )
        
        return (
            <div id='map' style={mapStyle}>
                {childrenWithProps}
            </div>
        )
    }
}

export default Map