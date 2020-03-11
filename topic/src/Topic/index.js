import React, { Component } from "react";
import Detail from "../Detail"
import "./_index.css";

class Topic extends Component { 

  render() {
    return (
      <div className="Topic">
      <header className="Topic-header">
        <p>
          THIS IS TOPIC PAGE
        </p>
        <Detail />
      </header>
    </div>
      
    )
  }
}

export default Topic;