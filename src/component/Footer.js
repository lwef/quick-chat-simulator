import React, { useState, useCallback } from 'react';
import './Footer.css'

const Footer = (data) => {
    const [code, setCode] = useState('');
    console.log(data); //전송된 데이터 확인
    const onChangeCode = (e) => { setCode(e.target.value) };
    const handleCodeChange = (param) => {
        setCode(param);
    }

    return (
        <div className="footer">
            <div className="footer__show">
                this is footer
            </div>
            <input placeholder='write your word' value={code} onChange={onChangeCode}/>
            <input 
                className="footer__code" 
                placeholder='code'
                value={code} /* value={data.sendData} */
                onChange={e => handleCodeChange(e.target.value)}
            />
            <button>
                copy
            </button>
        </div>
    )
}
//<button className="footer__copy">
export default Footer;