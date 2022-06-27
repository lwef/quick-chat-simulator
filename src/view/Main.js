import React from 'react';
import Footer from '../component/Footer';
import './Main.css';

function Main() {
    const chatSize = () => {
        const result = [];
        for (let i = 1; i < 30; i++) {
            result.push(<option key={i} value={i}>{i}</option>)
        }
        return result;
    }

    return (
        <div className='main'>
            <Footer/>
            <div className='main__colorPick'>
                choose color #1<br/>
                <div className='colorWrap'>
                    <div style={{background:"red"}}></div>
                    <div style={{background:"yellow"}}></div>
                    <div style={{background:"blue"}}></div>
                    <div style={{background:"aqua"}}></div>
                    <div style={{background:"olive"}}></div>
                    <div style={{background:"silver"}}></div>
                    <div style={{background:"maroon"}}></div>
                    <div style={{background:"navy"}}></div>
                    <div style={{background:"white"}}></div>
                    <div style={{background:"black"}}></div>
                </div>
            </div>
            <div className='main__colorPick'>
                choose color #2
            </div>
            <div className='main__smallBox'>
                select bold ?
                <button>yes</button>
                <button>no</button>
            </div>
            <div className='main__smallBox'>
                select size<br/>
                <select name="pets" id="pet-select">
                    {chatSize()}
                </select>
            </div>
            <div className='main__smallBox'>
                select italic ?
                <button>yes</button>
                <button>no</button>
            </div>
        </div>
    )
}

export default Main;