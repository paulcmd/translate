import React, { useState } from 'react'

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
            {`Current Language : ${language}`}
        </div>
    )
}

export default App
