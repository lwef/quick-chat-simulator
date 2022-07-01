import React, { useState, useEffect, useCallback } from 'react';
import Footer from '../component/Footer';
import './Main.css';
import { ChromePicker } from 'react-color';

function Main() {
    const [color, setColor] = useState(false);
    const [bold, setBold] = useState(false);
    const [size, setSize] = useState(0);
    const [italic, setItalic] = useState(false);

    const [boldColor, setBoldColor] = useState('#f16969'); //red
    const [italicColor, setItalicColor] = useState('#f16969'); 
    const [colorbutton, setColorButton] = useState('#a7ffa7'); //green
    const [sizeButtonColor, setSizeButtonColor] = useState('#a7ffa7');
    const [boldState, setBoldState] = useState('no');
    const [italicState, setItalicState] = useState('no');

    var data = ["", "", "", ""]; //color, bold, size, italic
    data[0] = color;
    data[1] = bold;
    data[2] = size;
    data[3] = italic;
    /*
    const [data, setData] = useState(
        {
            color: null,
            bold: null,
            size: null, 
            italic: null
        }
    );
    */
    
    const colorPicker1 = () => {
        const colorSet = ["red", "yellow", "blue", "aqua", "olive", "silver", "maroon", "navy", "white", "black",
            "brown", "darkblue", "magenta", "green", "grey", "lightblue", "lime", "orange", "purple", "teal"];
        const result = [];
        const numOfColor = colorSet.length;
        for (let i=0; i<numOfColor; i++) {
            result.push(<div key={i} style={{background:colorSet[i]}} onClick = {()=> {
                console.log(colorSet[i]);
                setColor(colorSet[i]);
                setColorButton('#f16969'); //default color 버튼 비활성화의 표시로 빨간색으로 바꿈
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
        setColorButton('#f16969'); //default color 버튼 비활성화의 표시로 빨간색으로 바꿈
    }, [color]) //컬러 데이터가 바뀔때마다 이 함수는 갱신된다.

    const chatSize = () => {
        const result = [];
        for (let i = 1; i < 30; i++) {
            result.push(<option key={i} value={i}>{i}</option>)
        }
        return result;
    }

    const onChangeBold = (e) => {
        e.preventDefault();
        setBold(!bold);
        //console.log(bold);
        
        if(boldState==='yes') {
            setBoldState('no');
            setBoldColor('#f16969');
        }
        else {
            setBoldState('yes');
            setBoldColor('#a7ffa7');
        }
      }
    const onChangeSize = (size) => {
        setSize(size);
        setSizeButtonColor('#f16969');
    }
    const onChangeItalic = (e) => {
        e.preventDefault();
        setItalic(!italic);
        
        if(italicState==='yes') {
            setItalicState('no');
            setItalicColor('#f16969');
        }
        else {
            setItalicState('yes');
            setItalicColor('#a7ffa7');
        }
    }
    const handleColorDefault = () => {
        setColor(false);
        setColorButton('#a7ffa7'); //default color 버튼 활성화의 표시로 초록색으로 바꿈
    }
    const handleSizeDefault = () => {
        setSize(0);
        setSizeButtonColor('#a7ffa7');
    }

    return (
        <div className='main'>
            <Footer sendData={data}/>
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
                <button style={{background:colorbutton}}onClick={handleColorDefault}>default color</button>
                </center>
            </div>
            <div className='main__smallBox'>
                select bold ?
                <button style={{background:boldColor}} onClick={onChangeBold}>{boldState}</button>
            </div>
            <div className='main__smallBox'>
                select size<br/>
                <select value={size} onChange={(e) => {onChangeSize(e.target.value)}}>
                    {chatSize()}
                </select>
                <button style={{background:sizeButtonColor}}onClick={handleSizeDefault}>default size</button>
            </div>
            <div className='main__smallBox'>
                select italic ?
                <button style={{background:italicColor}} onClick={onChangeItalic}>{italicState}</button>
            </div>
            <div style={{height:100}}></div>
        </div>
    )
}

export default Main;