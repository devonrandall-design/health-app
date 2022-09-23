import React from "react";
import "./style.css";
import Footer from './footer.js'

export default function App() {
  return (
    <div className="app-container">
      <div className="header">
      <h1>Hello DeVon</h1>
      <p>This is going to get better</p>
      </div>
      <div className="sub-header">
        <h3>September 22, 2022</h3>
        <p>12:35 am</p>
        </div>
        <h3 className="entry-title">Entries</h3>
      <div className="mainbody">
      
      </div>
      <Footer />
    </div>
  );
}
