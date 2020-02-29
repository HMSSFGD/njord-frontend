import React, { Component } from 'react'
import Marker from './Marker.js';

class Map extends Component {
    constructor(props) {
        super(props)

        // Dark Mode
        this.state = {
            options: {
                styles: [
                    {
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#242f3e"
                        }
                      ]
                    },
                    {
                      "elementType": "labels",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#746855"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#242f3e"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.locality",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#d59563"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.neighborhood",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#d59563"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.business",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#263c3f"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#8cca5b"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#6b9a76"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#38414e"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#212a37"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels.icon",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#9ca5b3"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#746855"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#1f2835"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#f3d19c"
                        }
                      ]
                    },
                    {
                      "featureType": "transit",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "transit",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#2f3948"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.station",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#d59563"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#17263c"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#92c7d8"
                        },
                        {
                          "weight": 2.5
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#515c6d"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#17263c"
                        }
                      ]
                    }
                  ],
                zoom: 15,
                center: {
                    lat: 51.4560665, 
                    lng: -2.6047954,
                },
                disableDefaultUI: true,
            },
            map: {},

        }

        // Light 
        this.state = {
            options: {
                styles: [
                    {
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#ebe3cd"
                        }
                      ]
                    },
                    {
                      "elementType": "labels",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#523735"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#f5f1e6"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#c9b2a6"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#dcd2be"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#ae9e90"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.neighborhood",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "landscape.natural",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#93817c"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.business",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#77bb40"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#447530"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#f5f1e6"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels.icon",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road.arterial",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#fdfcf8"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#f8c967"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#e9bc62"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway.controlled_access",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#e98d58"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway.controlled_access",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#db8555"
                        }
                      ]
                    },
                    {
                      "featureType": "road.local",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#806b63"
                        }
                      ]
                    },
                    {
                      "featureType": "transit",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#8f7d77"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#ebe3cd"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.station",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#dfd2ae"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#00b9e4"
                        },
                        {
                          "weight": 2.5
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#92998d"
                        }
                      ]
                    }
                  ],
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