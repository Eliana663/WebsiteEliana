import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import '../TimeLine/timetable.css';
import '../TimeLine/flags.css';
import { cronology } from '../../data/cronology';




export function Timetable() {
  const events = cronology

  const customizedMarker = (item) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color, width: 50, height: 50, borderRadius: 30}}
      >
        <i className={item.icon} style={{fontSize: 40}}></i>
      </span>
    );
  };

  const customizedContent = (item) => {


    return (

      <Card title={item.status} className='card'>
        {item.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
            alt={item.name}
            width={200}
            className="shadow-1"
          />

          
        )}
       
        <ul>
          <li>{item.Organization}</li>
          <li>{item.Beggining} - {item.Ending}</li>
          <li>{item.Title}</li> 
        </ul>
       </Card>

    );
  };

  return (
    <div >
      <Timeline
        value={events}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}