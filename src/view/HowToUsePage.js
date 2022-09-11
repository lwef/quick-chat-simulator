import React from 'react';
import './HowToUsePage.css';

function HowToUsePage() {
    return (
        <div className='HowToUse'>
            <h2>How To Use<br/>Quick Chat Simulator</h2>
            <div className='InfoPage__box'>
                <h3>Step 1</h3>
                <p>Select options. - color, bold, size, italic</p>
                <p>You can choose <span style={{color:"red"}}>one or two options</span> because of <span style={{color:"red"}}>code length limit.</span></p>
                <p>If you want to remove color or size code, click "default color" or "default size" button.</p>
                <h3>Step 2</h3>
                <p>Write down your chat.</p>
                <h3>Step 3</h3>
                <p>Modify options.</p>
                <h3>Step 4</h3>
                <p>See result, copy code, and paste at quick chat setting in game.</p>
            </div>
        </div>
    )
}

export default HowToUsePage;