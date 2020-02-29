import React, { Component } from 'react'

class Directions extends Component {
    constructor(props) {
        super(props)

        this.state = {
             directionsService: new window.google.maps.DirectionsService(),
             directionsRenderer: new window.google.maps.DirectionsRenderer(),
        }
    }
    
    render() {
          const directionsRequest = {
            origin: this.props.origin,
            destination: this.props.destination,
            travelMode: window.google.maps.TravelMode.WALKING,
            waypoints: this.props.waypoints,
            optimizeWaypoints: false,
            provideRouteAlternatives: false,
        }
        
        this.state.directionsRenderer.setMap(this.props.map)
        this.state.directionsService.route(directionsRequest, (result, status) => {
            if(status == 'OK') {
               this.state.directionsRenderer.setDirections(result)
            }
        })
        return(
            <React.Fragment></React.Fragment>
        )
    }
}

export default Directions