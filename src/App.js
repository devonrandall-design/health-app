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
 

let count = 30

const [cCount, setCount] = useState(count)

const newTime = new Date().toLocaleTimeString()

const [time, setTime] = useState(newTime);




 useEffect(() => {
   
    const timer = setInterval(() => {
      const newerTime = new Date().toLocaleTimeString('en-US')
      setTime(newerTime)
    }, 1000);
 
  }, []);

  /*

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);




  */












  return (
    <div className="app-container">
      <div className="header">
      <h1>Hello DeVon</h1>
      <p>This is going to get better</p>
      </div>
      <div className="sub-header">
        <h3>{month} {day}, {year}</h3>
        <p>{time}</p>
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
