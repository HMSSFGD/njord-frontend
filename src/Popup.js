import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import Swal from 'sweetalert2';

export default function NjordPopup({report}) {
  const [status, setStatus] = useState(report.status);
  const [priority, setPriority] = useState(report.priority);
  const update = () => {
    fetch('http://localhost:8080/api/reports/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.assign({}, report, {
        status: status,
        priority: priority,
      })),
    }).then(response => Math.floor(response.status / 100) === 2
      ?  Swal.fire('Saved!', '', 'success')
      : Swal.fire('Something went wrong...', 'error') && console.error(response));
  }

  return (
    <Marker position={[report.lng, report.lat]}>
      <Popup
        minWidth={215}
        maxWidth={215}
        onClose={() => status !== report.status || priority !== report.priority
          ? Swal.fire({
              title: 'Do you want to save the changes?',
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: `Save`,
              denyButtonText: `Don't save`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                update();
              } else if (result.isDenied) {
                setStatus(report.status);
                setPriority(report.priority);
              }
            })
          : null
        }
      >
        <img
          style={{
            margin: "-14px -20px 0px",
            borderRadius: "12px 12px 0px 0px",
          }}
          src={`data:image/png;base64,${report.image}`}
          alt="Damage"
        />
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '0.1rem 1rem', justifyConent: 'center', alignItems: 'center'}}>
          <h2>Status:</h2>
          <select
            name="status-inp"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="UNREAD">Unread</option>
            <option value="READ">Read</option>
            <option value="INPROGRESS">In Progress</option>
            <option value="RESOLVED">Resolved</option>
          </select>
          <h2>Priority:</h2>
          <select
            name="priority-inp"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="LOW">Low</option>
            <option value="NOTSET">Not Set</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
          <button
            style={{gridColumn: '1/-1'}}
            onClick={update}
          >
            Save
          </button>
        </div>
      </Popup>
    </Marker>
  );
}
