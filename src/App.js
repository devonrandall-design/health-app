import React, {useState} from "react";
import "./style.css";
import Footer from './footer.js'
import Entry from './entry.js'

export default function App() {

const month = new Date().toLocaleString(
  'default', {month: 'long'}
);

const day = new Date().getDate() 
const year = new Date().getFullYear() 
const time = new Date().getHours() + ':' + new Date().getMinutes()



console.log(time)



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
