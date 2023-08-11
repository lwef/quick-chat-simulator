import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'

import { useTranslation } from "react-i18next"; //i18n
import i18n from "../locales/i18n";

const Nav = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [lang, setLang] = useState('ko');
    const [language, setLanguage] = useState('KOR');
    const { t } = useTranslation();     //i18n
    const onChangeLang = () => {        //언어 변경하기
        if(language==='KOR') {
            setLang('en');
            setLanguage('ENG');
        }
        else {
            setLang('ko');
            setLanguage('KOR');
        }
        
    };

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]); //lang이 바뀔 때마다 실행, asynchronous 문제 해결
    

    return (
        <div className='navbar'>
            <div className='navbar__logo'
                style={{fontWeight: path === '/Main' && 'bold' }} //AND 연산자(&&)를 활용한 조건부 렌더링
                onClick={() => navigate('/Main')}
            >
                {t('nav.appName')}
            </div>
            <ul className='navbar__menu'>
                <div 
                    style={{fontWeight: path === '/Main' && 'bold' }} 
                    onClick={() => navigate('/Main')}
                >{t('nav.mainPage')}</div>
                <div 
                    style={{fontWeight: path === '/HowToUsePage' && 'bold' }} 
                    onClick={() => navigate('/HowToUsePage')}
                >{t('nav.howToUse')}</div>
                <div 
                    style={{fontWeight: path === '/InfoPage' && 'bold' }} 
                    onClick={() => navigate('/InfoPage')}
                >{t('nav.info')}</div>
                <button 
                    onClick= {onChangeLang}
                >{language}</button>
            </ul>
        </div>
    )
}

export default Nav;