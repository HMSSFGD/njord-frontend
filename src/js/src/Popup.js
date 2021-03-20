import React from 'react';
import { Marker, Popup } from 'react-leaflet';

export default function NjordPopup({report}) {
  return (
    <Marker key={i} position={[m.lat, m.lng]}>
      <Popup maxWidth={215}>
        <img
          style={{
            margin: "-14px -20px 0px",
            borderRadius: "12px 12px 0px 0px",
          }}
          src={`data:image/png;base64,${m.image}`}
          alt="Image of the damage"
        />
        {m.status}<br/>{m.priority}
      </Popup>
    </Marker>
  );
}