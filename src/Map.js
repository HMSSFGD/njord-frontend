import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer } from 'react-leaflet';
import leaflet from 'leaflet';
import NjordPopup from './Popup.js';

export default function Map() {
  const bounds = [[0,0], [1998*3/64, 2856*3/64]];
  const [markers, setMarkers] = useState([])
  const ws = useMemo(() => new WebSocket('wss://njord.icedcoffee.dev/ws'), []);

  useEffect(() => {
    ws.onopen = () => {
      fetch('https://njord.icedcoffee.dev/api/reports')
        .then(response => response.json())
        .then(msg => setMarkers(m => m.concat(msg)));
    }

    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      switch (msg.type) {
        case "CONNECTIONOK":
          ws.send("ad");
          break;
        case "ADDPIN":
          setMarkers(m => m.concat([msg.data]));
          break;
        case "UPDATEPIN":
          setMarkers(m => m.filter(i => i.id !== msg.data.id).concat([msg.data]));
          break;
        case "DELETEPIN":
          setMarkers(m => m.filter(i => i.id !== msg.data.id));
          break;
        default:
          console.error("Got weird data: ", msg);
      }
    }

    ws.onclose = () => {
      console.log("Disconnected");
    }
  })

  return (
    <MapContainer
      bounds={bounds}
      whenCreated={(map) => leaflet.imageOverlay('map_big.png', bounds).addTo(map)}
      center={[1998*3/128, 2856*3/128]}
      crs={leaflet.CRS.Simple}
      zoom={6}
      scrollWheelZoom={true}
      style={{height: "100vh"}}
    >
      {markers.map(m => m && (
        <NjordPopup key={m.id} report={m} />
      ))}
    </MapContainer>
  );
}
