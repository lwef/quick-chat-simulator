import React, { useState, useEffect, useCallback } from 'react';
import './Footer.css'

const Footer = (data) => {
    const [code, setCode] = useState('');
    const [word, setWord] = useState('');
    //console.log(data.sendData); //전송된 데이터
    const userData = data.sendData;

    useEffect(() => {
        var myCode = word;
        if(userData[0] != false) {
            myCode = "<color=" + userData[0] + ">" + myCode + "</color>";
        }
        if(userData[1] === true) {
            myCode = "<b>" + myCode + "</b>";
        }
        if(userData[2] !== 0) {
            myCode = "<size=" + userData[2] + ">" + myCode + "</size>";
        }
        if(userData[3] === true) {
            myCode = "<i>" + myCode + "</i>";
        }
        //console.log(myCode);
        setCode(myCode);

    }, [data, word]);

    useEffect(() => {
        if (!code) {
          setCode('');
        }
        setCode(code);
    }, [code]);


    const onChangeWord = (e) => { 
        setWord(e.target.value);
    };
    /*
    const handleCodeChange = (param) => {
        setCode(param);
    }
    */

    return (
        <div className="footer">
            <div className="footer__show">
                this is footer
            </div>
            <input placeholder='write your word' value={word} onChange={onChangeWord}/>
            <input 
                className="footer__code" 
                placeholder='code'
                value={code} /* value={data.sendData} */
                readOnly
            />
            <button className="footer__copy">
                copy
            </button>
        </div>
    )
}
export default Footer;