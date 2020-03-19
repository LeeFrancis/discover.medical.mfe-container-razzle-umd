import React, { Component } from "react";
import Detail from "../Detail"
import "./_index.css";
import { Header } from "discover.medical.react-component-library";

class Topic extends Component { 

  render() {
    return (
      <div className="Topic">
        <Header
          title="Heart Failure Alternative Treatments"
          data-auto="topic-heading"
        />
        <Detail />
    </div>
      
    )
  }
}

export default Topic;