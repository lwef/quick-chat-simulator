import React, { useState, useEffect, useCallback } from 'react';
import Footer from '../component/Footer';
import './Main.css';
import { ChromePicker } from 'react-color';

function Main() {
    const [color, setColor] = useState('');
    
    const colorPicker1 = () => {
        const colorSet = ["red", "yellow", "blue", "aqua", "olive", "silver", "maroon", "navy", "white", "black",
            "brown", "darkblue", "magenta", "green", "grey", "lightblue", "lime", "orange", "purple", "teal"];
        const result = [];
        const numOfColor = colorSet.length;
        for (let i=0; i<numOfColor; i++) {
            result.push(<div key={i} style={{background:colorSet[i]}} onClick = {()=> {
                console.log(colorSet[i]);
                setColor(colorSet[i]);
            }}></div>);
        }
        return result;
    }

    useEffect(() => {
        if (!color) {
          setColor('');
        }
        setColor(color);
    }, [color]);

    const handleColorChange = useCallback((color) => {
        setColor(color);
    }, [color]) //컬러 데이터가 바뀔때마다 이 함수는 갱신된다.

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
            <div className='main__colorPick' style={{background:color}}>
                choose color #1<br/>
                <div className='colorWrap'>
                    {colorPicker1()}
                </div>
            </div>
            <div className='main__colorPick2' style={{background:color}}>
                <center>
                choose color #2<br/>
                <ChromePicker
                    color={color}
                    onChange={color => handleColorChange(color.hex)}
                />
                <input
                    value={color}
                    onChange={e => handleColorChange(e.target.value)}
                />
                </center>
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