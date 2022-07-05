import React, { useState, useEffect, useCallback } from 'react';
import './Footer.css'

const Footer = (data) => {
    const [code, setCode] = useState('');
    const [word, setWord] = useState('');
    const [showStyle, setShowStyle] = useState(
        {
            color: "#F2F5A9",
            fontWeight: null,
            fontStyle: null,
            fontSize: "18px"
        }
    );
    //console.log(data.sendData); //전송된 데이터
    const userData = data.sendData;

    useEffect(() => {
        var myCode = word;
        var showResult = [];

        if(userData[0] !== false) {
            myCode = "<color=" + userData[0] + ">" + myCode + "</color>";
            showResult.color = userData[0];
        }
        if(userData[1] === true) {
            myCode = "<b>" + myCode + "</b>";
            showResult.fontWeight = "bold";
        }
        if(userData[2] !== 0) {
            myCode = "<size=" + userData[2] + ">" + myCode + "</size>";
            showResult.fontSize = userData[2] + "px";
        }
        if(userData[3] === true) {
            myCode = "<i>" + myCode + "</i>";
            showResult.fontStyle = "italic";
        }
        //console.log(myCode);
        //console.log(showResult);
        setCode(myCode);
        setShowStyle(showResult);

    }, [data, word]);

    useEffect(() => {
        if (!code) {
          setCode('');
        }
        setCode(code);
    }, [code]);


    const onChangeWord = (e) => { 
        setWord(e.target.value); //->useEffect
    };
    /*
    const handleCodeChange = (param) => {
        setCode(param);
    }
    */

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(code);
            alert("copy success!");
        } catch {
            alert("copy error");
        }
    }

    const alertMaxLength = () => {
        if(code.length>30) {
            return (
                <div>
                    <div className='footer__altert'>❗Code exceeds maximum length❗</div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="footer">
            <div style={showStyle} className="footer__show" >
                {word}
            </div>
            <div className='footer__else'>
            <input className='footer__input' placeholder='write your word' value={word} maxLength = '30' onChange={onChangeWord}/>
                <div>
                    <input 
                        className="footer__code" 
                        placeholder='code'
                        value={code} /* value={data.sendData} */
                        readOnly
                    />
                    <button onClick={handleCopy}>
                        copy
                    </button>
                </div>
                {alertMaxLength()}
            </div>
        </div>
    )
}
export default Footer;