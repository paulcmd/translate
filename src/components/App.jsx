import React, { useState } from 'react'
import UserCreate from './UserCreate'

const App = () => {
    const [language, setLanguage] = useState('')

    const onLanguageChange = (language) => {
        setLanguage(language)
        console.log('current language', language)
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
            <UserCreate />
        </div>
    )
}

export default App
