import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;

    return (
        <div className='navbar'>
            <div className='navbar__logo'
                style={{fontWeight: path === '/' && 'bold' }} 
                onClick={() => navigate('/')}
            >
                QuickChat Simulator
            </div>
            <ul className='navbar__menu'>
                <div 
                    style={{fontWeight: path === '/HowToUsePage' && 'bold' }} 
                    onClick={() => navigate('/HowToUsePage')}
                >How To Use</div>
                <div 
                    style={{fontWeight: path === '/InfoPage' && 'bold' }} 
                    onClick={() => navigate('/InfoPage')}
                >Info</div>
                <div 
                    style={{fontWeight: path === '/QuickChatWord' && 'bold' }} 
                    onClick={() => navigate('/QuickChatWord')}
                >퀵챗에 넣을 말</div>
            </ul>
        </div>
    )
}

export default Nav;