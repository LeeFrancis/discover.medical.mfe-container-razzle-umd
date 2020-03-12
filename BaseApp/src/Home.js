import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <ul className="Home-resources">
          <li>
            <a href="/topic">Topic</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
