import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
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
import { useFetch } from './hooks.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  
  let fabContent = <Nature style={{ color: "#fff", position: 'absolute' }} />
  
  const lightMode = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#002036'
      },
      secondary: green,
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
        console.log(response)
        if(response.status == 201) {
          setMarkers([...markers, latLng])
          setState(2)
        }
        else {
          console.log(latLng)
          setState(3)
        }
      })
    }
  }

  const [state, setState] = useState(0)
  const [drawerState, setDrawerState] = useState(false)
  const [mapTheme, setMapTheme] = useState(0)

  var lightTheme = {}

  var darkTheme = {}

  const mapStyles = [lightTheme, darkTheme]
  const themeMode = [lightMode, darkMode]

  const [data, loading] = useFetch("https://woodshack-api.herokuapp.com/trees")

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
        setTimeout(() => setState(0), 1000)
    break
    case 3:
      fabContent = 
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

  if(!loading) console.log(data.pins)
  let pins = <React.Fragment />
  if(!loading) {
    pins = data.pins.map((latLng) => 
      <Marker position={{lat: latLng.latitude, lng: latLng.longitude,}} />
    )
  }

  return (
      <React.Fragment>
        <ThemeProvider theme={themeMode[mapTheme]}>
            <AppBar position="fixed" style={{backdropFilter: 'blur(5px)', opacity: '95%', boxShadow: 'none', color: 'white', boxShadow: 'none', minHeight: 100, background: 'linear-gradient(90deg, rgba(0,32,54,1) 0%, rgba(57,212,162,1) 100%)'}}>
              <Toolbar>
                  <Button onClick={toggleDrawer(true)}>
                    {/* <MenuRoundedIcon style={{color: 'white'}}/> */}
                    <div style = {{fontFamily: 'Cormorant Garamond', fontSize: '35pt', color: 'white'}}>
                      Njord.
                    </div>
                  </Button>
              </Toolbar>
            </AppBar>
            <div className="background" style={{position: 'absolute', width: '100vw', minHeight: 100, backgroundColor: 'red'}}>

            </div>
            <div className="fab">
                <Fab color="primary" onClick={() => {state == 2 ? setState(0) : setState(1)}}>
                    {fabContent}
                </Fab>
            </div>
            <MapContainer style={{height: '100vh'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>  
              </Marker>
            </MapContainer>
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
                  <div style={{fontFamily: 'Trade Winds'}}>
                    xXx__Dark Mode__xXx___
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
