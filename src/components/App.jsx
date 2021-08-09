import React, { useState } from 'react'
import LanguageContext from '../contexts/LanguageContext'

import UserCreate from './UserCreate'

const App = () => {
    const [language, setLanguage] = useState('')

    const onLanguageChange = (language) => {
        setLanguage(language)
        //console.log('current language', language)
    }
    return (
        <div className="ui container">
            <div>
                Select a language :
                <i
                    className="flag us"
                    onClick={() => onLanguageChange('English')}
                />
                <i
                    className="flag nl"
                    onClick={() => onLanguageChange('Dutch')}
                />
            </div>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>
        </div>
    )
}

export default App

/* 
value in the Provider is a defined word, not made up
*/