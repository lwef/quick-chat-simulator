import React from 'react';
import Footer from '../component/Footer';
import './Main.css';

function Main() {
    const colorPicker1 = () => {
        const color = ["red", "yellow", "blue", "aqua", "olive", "silver", "maroon", "navy", "white", "black",
            "brown", "darkblue", "magenta", "green", "grey", "lightblue", "lime", "orange", "purple", "teal"];
        const result = [];
        const numOfColor = color.length;
        for (let i=0; i<numOfColor; i++) {
            result.push(<div key={i} style={{background:color[i]}} onClick = {()=> {console.log(color[i])}}></div>);
        }
        return result;
    }

    const chatSize = () => {
        const result = [];
        for (let i = 1; i < 30; i++) {
            result.push(<option key={i} value={i}>{i}</option>)
        }
        return result;
    }

    return (
        <div className='main'>
            <Footer/>
            <div className='main__colorPick'>
                choose color #1<br/>
                <div className='colorWrap'>
                    {colorPicker1()}
                </div>
            </div>
            <div className='main__colorPick'>
                choose color #2
            </div>
            <div className='main__smallBox'>
                select bold ?
                <button>yes</button>
                <button>no</button>
            </div>
            <div className='main__smallBox'>
                select size<br/>
                <select name="pets" id="pet-select">
                    {chatSize()}
                </select>
            </div>
            <div className='main__smallBox'>
                select italic ?
                <button>yes</button>
                <button>no</button>
            </div>
        </div>
    )
}

export default Main;