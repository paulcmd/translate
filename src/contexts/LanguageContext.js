import React, { useState } from 'react'

const Context = React.createContext('English')

export const LanguageStore = ({children}) => {
    const [language, setLanguage] = useState('English')

    const onLanguageChange = (language) => {
        setLanguage(language)
        //console.log('current language', language)
    }

    return (
        <Context.Provider value={{ ...language, onLanguageChange }}>
            {children}
        </Context.Provider>
    )
}

/* 
we are creating a LanguageStore as a single source of truth. It will store the current
language in state, and method for changing that language

...language   we are taking everything in state and placing in a new spread object

Context must be capitalized because anytime we create a component for react to 
render it must be capitalized
*/
