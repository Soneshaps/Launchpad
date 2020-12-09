import React from 'react';
import './css/launchpadMain.css'
import LaunchpadBody from '../components/launchpadBody'
function LaunchpadMain(){



return(
    <div className="d-flex flex-column launchpad-main">
        <div className="text-center">
            <span>LAUNCHPAD</span>
        </div>
        <LaunchpadBody/>
    </div>
);    
} 

export default LaunchpadMain;
