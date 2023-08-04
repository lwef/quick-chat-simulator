import React from 'react';
import './HowToUsePage.css';

function HowToUsePage() {
    return (
        <div className='HowToUse'>
            <h2>How To Use<br/>Quick Chat Simulator</h2>
            <div className='InfoPage__box'>
                <h3>Step 1</h3>
                <p>Write down your chat.</p>
                <h3>Step 2</h3>
                <p>Select options. - color, bold, size, italic</p>
                <p>Because of <span style={{color:"red"}}>code length limit,</span> you can choose <span style={{color:"red"}}>one or two options</span> </p>
                <p>Click <span style={{color:"red"}}>"default color" or "default size" button</span> to remove color or size code, </p>
                <h3>Step 3</h3>
                <p>Modify options.</p>
                <h3>Step 4</h3>
                <p>See result, copy code, and paste at quick chat setting in game.</p>
            </div>
        </div>
    )
}

export default HowToUsePage;