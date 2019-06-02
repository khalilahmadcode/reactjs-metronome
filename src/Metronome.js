import React from 'react';
import './Metronome.css'; 
import click1 from './click1.wav';
import click2 from './click2.wav';  

class Metronome extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            playing: false,  
            count: 0,
            bpm: 100, 
            beastPerMeasure: 4
        }; 

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);  
    }

    handleBpmChange = (event) => {
        const bpm = event.target.value; 
        if(this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
            this.setState({count: 0, bpm}); 
        } else {
            this.setState({bpm}); 
        }
        this.setState({ bpm }); 
    }
    
    playClick = () => {
        const { count, beastPerMeasure } = this.state; 

        if (count % beastPerMeasure === 0){
            this.click2.play(); 
        } else {
            this.click1.play(); 
        }

        this.setState(state => ({
            count : (state.count + 1) % state.beastPerMeasure
        })); 
    }

    startStope = () => {
        //console.log(this.state.playing);

        if(this.state.playing) {
            clearInterval (this.timer); 
            this.setState({
                playing: false
            }); 
        } else {
            this.timer = setInterval(
                this.playClick, 
                (60 / this.state.npm) * 1000
            ); 
            //console.log(v);
            this.setState(
                {
                    count : 0, 
                    playing: true
                }, 
                this.playClick
            );
        }   
    }

    render(){
        const { playing, bpm} = this.state; 
        
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input onChange={this.handleBpmChange} type="range" min="60" max="240" value={bpm}/> 
                </div>
                <button onClick={this.startStope}>{playing ? 'Stop' : 'Start'} </button>
            </div>
        ); 

    }
}

export default Metronome; 