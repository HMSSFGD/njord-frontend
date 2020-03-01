import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleComponents from './components/GoogleComponents.js';
import Marker from './components/Marker.js';
import Map from './components/Map.js';
import Directions from './components/Directions.js';
import { 
  Fab, 
  CircularProgress,
  SwipeableDrawer,
  Button,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Grid
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Nature from '@material-ui/icons/Nature';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { light } from '@material-ui/core/styles/createPalette';


function App() {
  
  let fabContent = <Nature style={{ color: "#fff", position: 'absolute' }} />
  
  const lightMode = createMuiTheme({
    palette: {
      type: 'light',
      primary: green,
      secondary: blue,
      action: "#fff",
    },
    status: {
      danger: 'orange',
    },
  });

  const darkMode = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#303030'
      }
    },
  });

  const [markers, setMarkers] = useState([])

  const dropPin = (latLng) => {
    if(state == 1) {
      setMarkers([...markers, latLng])
      fetch('http://woodshack-api.herokuapp.com/trees', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "latitude": latLng.lat(),
          "longitude": latLng.lng(),
        })
      }).then((response) => {
        if(response.status == 201) {
          setState(2)
        }
        else {
          setState(3)
        }
      })
    }
  }

  const lightTheme = {
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
  }

  const darkTheme = {
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
  }

  const [state, setState] = useState(0)
  const [drawerState, setDrawerState] = useState(false)
  const [mapTheme, setMapTheme] = useState(0)

  const mapStyles = [lightTheme, darkTheme]
  const themeMode = [lightMode, darkMode]

  let markers2 = fetch('http://woodshack-api.herokuapp.com/trees', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  switch(state) {
    case 0:
      fabContent = <Nature style={{ color: "#fff", position: 'absolute' }} />      
      break
    case 1:
      fabContent = 
        <React.Fragment>
          <Nature style={{ color: "#fff", position: 'absolute' }} />
          <CircularProgress style={{ color: "#fff", position: 'absolute' }}/>
        </React.Fragment>
      break
    case 2:
      fabContent = 
        <React.Fragment>
          <Done style={{ color: "#fff", position: 'absolute' }} />
        </React.Fragment>
        setTimeout(    setTimeout(() => setState(0), 2000)
    
        <React.Fragment>
          <Close style={{ color: "#fff", position: 'absolute' }} />
        </React.Fragment>
        setTimeout(() => setState(0), 1000)
    break
  }

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open)
  }
  console.log(markers)
  return (
      <React.Fragment>
        <ThemeProvider theme={themeMode[mapTheme]}>
            <AppBar position="fixed" style={{color: 'white',}}>
              <Toolbar>
                  <Button onClick={toggleDrawer(true)}>
                    <MenuRoundedIcon style={{color: 'white'}}/>
                  </Button>
                  <div style = {{fontFamily: 'Courgette', fontSize: '24pt'}}>
                    Woodshack
                  </div>
              </Toolbar>
            </AppBar>
            <GoogleComponents>
              <Map theme={mapStyles[mapTheme]} dropPin={dropPin}>
                {markers.map((latLng) => 
                  <Marker position={latLng} />
                )}
              </Map>
            </GoogleComponents>
            <div className="fab">
                <Fab color="primary" onClick={() => setState(1)}>
                    {fabContent}
                </Fab>
            </div>
            
          </ThemeProvider>
          <SwipeableDrawer open={drawerState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
            <List>
              <ListItem></ListItem>
                <Button>
                  <MenuRoundedIcon onClick={toggleDrawer(false)}/>
                </Button>
              <ListItem>
                <ListItemIcon>
                  <Brightness2OutlinedIcon />
                </ListItemIcon>
  
                <ListItemText>
                  
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })   xXx__Dark Mode__xXx___
                  </div>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Switch 
                    onChange={() => {mapTheme == 0 ? setMapTheme(1) : setMapTheme(0)}}
                    value="darkMode"
                    color="primary"
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </SwipeableDrawer>
      </React.Fragment>
  );
}

export default App;
