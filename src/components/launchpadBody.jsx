import React, { Component } from 'react';
import './css/launchpadbody.css';
import One from '../audio/1.wav';
import Two from '../audio/2.wav';
import Three from '../audio/3.wav';
import Four from '../audio/4.wav';
import SecondOne from '../audio/21.wav';
import SecondTwo from '../audio/22.wav';
import SecondThree from '../audio/23.wav';
import SecondFour from '../audio/24.wav';
import ThirdOne from '../audio/31.wav';
import ThirdTwo from '../audio/32.wav';
import ThirdThree from '../audio/33.wav';
import ThirdFour from '../audio/34.wav';
import FourthOne from '../audio/41.wav';
import FourthTwo from '../audio/42.wav';
import FourthThree from '../audio/43.wav';
import FourthFour from '../audio/44.wav';
import {Howl, Howler} from 'howler';

const rowOne = [
    {sound : One},
    {sound : Two},
    {sound : Three},
    {sound : Four}
]

const rowTwo = [
    {sound : SecondOne},
    {sound : SecondTwo},
    {sound : SecondThree},
    {sound : SecondFour}
]

const rowThree = [
    {sound : ThirdOne},
    {sound : ThirdTwo},
    {sound : ThirdThree},
    {sound : ThirdFour}
]

const rowFour = [
    {sound : FourthOne},
    {sound : FourthTwo},
    {sound : FourthThree},
    {sound : FourthFour}
]



class LaunchpadBody extends Component {
    SoundPlay =(src) => {
        const sound = new Howl({
            html5 : true ,
            preload : true,
            src
            

        });
        sound.play();
        Howler.volume(0.5)
    }
    RenderFirstRow=()=>{
        return rowOne.map((soundObj, index) =>{
            return(
                <div key={index} className="button buttonOne" onClick={()=> this.SoundPlay(soundObj.sound)}></div> 
            )
        })
    }
    RenderSecondRow=()=>{
        return rowTwo.map((soundObj, index) =>{
            return(
                <div key={index} className="button buttonTwo" onClick={()=> this.SoundPlay(soundObj.sound)}></div> 
            )
        })
    }
    RenderThirdRow=()=>{
        return rowThree.map((soundObj, index) =>{
            return(
                <div key={index} className="button buttonThree" onClick={()=> this.SoundPlay(soundObj.sound)}></div> 
            )
        })
    }
    RenderFourthRow=()=>{
        return rowFour.map((soundObj, index) =>{
            return(
                <div key={index} className="button buttonFour" onClick={()=> this.SoundPlay(soundObj.sound)}></div> 
            )
        })
    }
    render() { 
        return ( 
         <div className="launchpad-body flex-grow-1 d-flex flex-column"> 
            <div className="d-flex"> 
                {this.RenderFirstRow()}
            </div>
            <div className="d-flex"> 
            {this.RenderSecondRow()}
            </div>
            <div className="d-flex"> 
            {this.RenderThirdRow()}
            </div>
            <div className="d-flex"> 
            {this.RenderFourthRow()}
            </div>        
          </div>
         );
    }
}
 
export default LaunchpadBody;

