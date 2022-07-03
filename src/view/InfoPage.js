import React, {useState} from 'react';
import './InfoPage.css';
import License from './License';

function InfoPage() {

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
        }
    ]

    return (
    <div>
        <div id='intro'>
            This is fan website of the game "Castle Defense Online".
        </div>
        <div>
            <h2>Open Source License</h2>
            <License data={licenseData[0]}/>
            <License data={licenseData[1]}/>
        </div>
        <div>
            <h2>License</h2>
        </div>
        <div>
            <h2>Developer</h2>
        </div>
    </div>
    )
}

export default InfoPage;