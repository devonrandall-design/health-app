import React from 'react'

export default function Footer({urgency, setUrgency, entries, addEntry}) {

const urgencyLevels = ['Mild', 'Medium', 'Urgent']

function logEntry () {
  const addDate = new Date().getHours() + ':' + new Date().getMinutes() 

addEntry([...entries, [addDate, urgency]])


}

return (<><div className="footer">
  <div className="button-container">
  <div></div>
  {urgencyLevels.map(levels => { return <div><button onClick={() => setUrgency(levels)} className="button-sm">{levels}</button></div>})}
 
  </div>
  
  <button onClick={() => logEntry()} className="main-button">Log Entry</button>
</div>

</>
)
}