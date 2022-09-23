import React, {useState, useEffect} from "react";
import "./style.css";
import Footer from './footer.js'
import Entry from './entry.js'

export default function App() {

const month = new Date().toLocaleString(
  'default', {month: 'long'}
);

const day = new Date().getDate() 
const year = new Date().getFullYear() 
const clockTime = new Date().getHours() + ':' + new Date().getMinutes()

const timer = new Date().getMilliseconds()

const [cTime, setTime] = useState(clockTime);



 useEffect(() => {
    setInterval(() => {
      setTime(clockTime);
    }, 1000);
  });













  return (
    <div className="app-container">
      <div className="header">
      <h1>Hello DeVon</h1>
      <p>This is going to get better</p>
      </div>
      <div className="sub-header">
        <h3>{month} {day}, {year}</h3>
        <p>{cTime}</p>
        </div>
        <div className="entry-header">
        <h3 className="entry-title">Entries</h3>
        </div>
      <div className="mainbody">
      <Entry />
      </div>
      <Footer />
    </div>
  );
}
