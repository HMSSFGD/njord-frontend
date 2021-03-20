import React, { Component } from 'react'

class Marker extends Component {
    render() {
        const marker = new window.google.maps.Marker({
                position: this.props.position,
                map: this.props.map,
            })
            marker.setMap(this.props.map)
    

        return(
            <React.Fragment></React.Fragment>
        )
    }
}

export default Marker