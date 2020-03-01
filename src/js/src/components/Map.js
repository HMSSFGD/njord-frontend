import React, { Component } from 'react'
import Marker from './Marker.js';

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                zoom: 10,
                center: {
                    lat: 51.4560665, 
                    lng: -2.6047954,
                },
                disableDefaultUI: true,
                styles: this.props.theme.styles
            },
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
    
    componentDidUpdate(prevProps, prevState) {
        console.log("updated")
        if (this.props.theme !== prevProps.theme) {
            console.log("fresh new props")
            const newOptions = {
                options: {
                    ...this.state.options,
                    styles: this.props.theme.styles
                },
            }
            this.setState({
                ...newOptions,
                map: new window.google.maps.Map(document.getElementById('map'), newOptions)
            })
        }
    }    
    
    render() {
        if(this.state.map) {
            console.log("map exists")
            this.state.map.addListener('click', (e) => {
                console.log(e.latLng)
                this.props.dropPin(e.latLng)
            })
        }
        console.log(this.state)
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