import React from 'react'

export default function Entry({entries, urgency, index}) {

  return <div className="entry-card">
    <div className="column">
      <h6>Time</ h6>
      <h3>{entries[index][0]}</h3>
      </div>
      <div className="column">
      <h6>Urgency</h6>
      <div className={`tag + ${entries[index][1]}`}><h3 className="dynamic">{entries[index][1]}</h3></div>
      </div>
      <div className="column">
      <div></div>
      <div></div>
      </div>
      
    </div>
}