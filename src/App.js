import React from 'react';
import './App.css';
import LaunchpadMain from './components/launchpadMain'

function App() {
  return (
    <div className="container-fluid main">
     <div className="row d-flex justify-content-center">
        <div className="col-xl-6 col-lg-11 text-center launchpad-main-wrapper">
          <LaunchpadMain/>
        </div>
      </div>    
    </div>
  );
}

export default App;
