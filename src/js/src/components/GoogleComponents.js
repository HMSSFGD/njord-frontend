import React, { Component } from 'react'
import Map from './Map.js';
import Directions from './Directions.js';
import Marker from './Marker.js';

class GoogleComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            googleComponents: false,
        }
    }

    componentDidMount() {
        const googlescript = document.getElementById('googlescript')	
		if(window.google) {
			this.setState({googleComponents: true,})                      
		} else {
			googlescript.addEventListener('load', () => {
				this.setState({googleComponents: true,})             
			})
		}
    }

    render() {
        let googleComponents
        if(this.state.googleComponents) {
            googleComponents = this.props.children
        } else {
            googleComponents = <React.Fragment></React.Fragment>
        }

        return(
            googleComponents
        )
    }
}

export default GoogleComponents