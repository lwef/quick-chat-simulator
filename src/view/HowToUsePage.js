import React from 'react';
import './HowToUsePage.css';

import { useTranslation, Trans } from "react-i18next"; //i18n

function HowToUsePage() {
    const { t } = useTranslation();     //i18n

    return (
        <div className='HowToUse'>
            <h2>How To Use<br/>Quick Chat Simulator</h2>
            <div className='InfoPage__box'>
                <h3>Step 1</h3>
                <p>{t('howToUse.instruction1')}</p>
                <h3>Step 2</h3>
                <p>{t('howToUse.instruction2-1')}</p>
                <p><Trans i18nKey="howToUse.instruction2-2" components={[<span style={{color:"red"}}></span>]}/></p>
                <p><Trans i18nKey="howToUse.instruction2-3" components={[<span style={{color:"red"}}></span>]}/></p>
                <h3>Step 3</h3>
                <p>{t('howToUse.instruction3')}</p>
                <h3>Step 4</h3>
                <p>{t('howToUse.instruction4')}</p>
            </div>
        </div>
    )
}

export default HowToUsePage;