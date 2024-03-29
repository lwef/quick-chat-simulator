import React from 'react';
import './InfoPage.css';
import License from './License';
import logo from '../asset/CDO.jpg';

import { useTranslation, Trans } from "react-i18next"; //i18n

function InfoPage() {
    const { t } = useTranslation();     //i18n

    const licenseData = [
        {
            type: "Apache License 2.0",
            title: "web-vitals",
            homepage: "https://github.com/GoogleChrome/web-vitals",
            copyright: "Copyright 2020 Google LLC"
        },
        {
            type: "mit",
            title: "@testing-library/user-event",
            homepage: "https://github.com/testing-library/user-event",
            copyright: "Copyright (c) 2020 Giorgio Polvara"
        },
        {
            type: "mit",
            title: "jest-dom",
            homepage: "https://github.com/testing-library/jest-dom",
            copyright: "Copyright (c) 2017 Kent C. Dodds"
        },
        {
            type: "mit",
            title: "Facebook React",
            homepage: "https://github.com/facebook/react",
            copyright: "Copyright (c) 2013-present, Facebook, Inc"
        },
        {
            type: "mit",
            title: "Create React App",
            homepage: "https://github.com/facebook/create-react-app",
            copyright: "Copyright (c) 2013-present, Facebook, Inc."
        },
        {
            type: "mit",
            title: "React Testing Library",
            homepage: "https://github.com/testing-library/react-testing-library",
            copyright: "Copyright (c) 2017 Kent C. Dodds"
        },
        {
            type: "mit",
            title: "React Router",
            homepage: "https://github.com/ReactTraining/react-router",
            copyright: "Copyright (c) React Training 2016-2018"
        },
        {
            type: "mit",
            title: "react-color",
            homepage: "https://github.com/casesandberg/react-color",
            copyright: "Copyright (c) 2015 Case Sandberg"
        },
        {
            type: "BSD 3-Clause",
            title: "chromium",
            homepage: "https://www.chromium.org/chromium-projects/",
            copyright: "Copyright (c) 2015 The Chromium Authors."
        },
        {
            type: "mit",
            title: "i18next",
            homepage: "https://github.com/i18next/i18next",
            copyright: "Copyright (c) 2023 i18next"
        }
    ]

    return (
    <center>
        <div id='intro'>
            <h2>Information</h2>
            <div className='InfoPage__box'>
                <Trans i18nKey="info.info1" components={[<br></br>, <span style={{color:"red"}}></span>]} values={{value: "Castle Defense Online"}}/>
                <br/>
                <img src={logo} width="100px" height="100px" alt="CDO Logo"></img>
                <br/>
                {t('info.support1')} ➡️ {t('info.support2')} &nbsp;
                <a href="https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html">{t('info.support3')}</a>
            </div>
        </div>
        <div>
            <h2>Open Source License</h2>
            {licenseData.map((i, index) => {
                return (
                    <License key={index} data={i}/>
                )
            })}
        </div>
        <div className='Spacing'></div>
        <div>
            <h2>
                <div className='Hidden__1' onClick={()=>{
                alert("nickname: 비올")}}>a</div>
                Developer
                <div className='Hidden__2' onClick={()=>{
                alert("Mfno.1")}}>a</div>
            </h2>
            <p className='Hidden__3'>lwef</p>
        </div>
    </center>
    )
}

/*
        <div>
            <h2>License</h2>
            <div className='InfoPage__box'>
                <pre>
                MIT License<br/>
                </pre>
            </div>
        </div>
*/

export default InfoPage;