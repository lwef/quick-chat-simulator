import React, { useState, useEffect, useCallback } from 'react';
import Footer from '../component/Footer';
import './Main.css';
import { ChromePicker } from 'react-color';

import { useTranslation } from "react-i18next"; //i18n

function Main() {
    const { t } = useTranslation();     //i18n
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
            result.push(<div className='paletteColor' key={i} style={{background:colorSet[i]}} onClick = {()=> {
                //console.log(colorSet[i]);
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

    const onChangeBold = () => {
        
        setBold(!bold);
        
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
                {t('main.chooseColor')} #1<br/>
                <div className='colorWrap'>
                    {colorPicker1()}
                </div>
            </div>
            <div className='main__colorPick2' style={{background:color}}>
                <center>
                {t('main.chooseColor')} #2<br/>
                <ChromePicker
                    color={color}
                    onChange={color => handleColorChange(color.hex)}
                />
                <input
                    value={color}
                    onChange={e => handleColorChange(e.target.value)}
                />
                <button style={{background:colorbutton}}onClick={handleColorDefault}>{t('main.defaultColor')}</button>
                </center>
            </div>
            <div className='main__smallBoxContainer'>
            <div className='main__smallBox'>
                {t('main.selectBold')}
                <button style={{background:boldColor}} onClick={onChangeBold}>{boldState==='yes'? t('main.yes') : t('main.no')}</button> //조건부 렌더링
            </div>
            <div className='main__smallBox'>
                {t('main.selectSize')}<br/>
                <select value={size} onChange={(e) => {onChangeSize(e.target.value)}}>
                    {chatSize()}
                </select>
                <button style={{background:sizeButtonColor}}onClick={handleSizeDefault}>{t('main.defaultSize')}</button>
            </div>
            <div className='main__smallBox'>
                {t('main.selectItalic')}
                <button style={{background:italicColor}} onClick={onChangeItalic}>{italicState==='yes'? t('main.yes') : t('main.no')}</button>
            </div>
            </div>
            <div className='main__bottom'></div>
        </div>
    )
}

export default Main;