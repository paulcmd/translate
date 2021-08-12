import React, { useContext, useState } from 'react'

const LanguageContext = React.createContext()

export const useLanguage = () => {
	return useContext(LanguageContext)
}

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('English')

    const onLanguageChange = (language) => {
        setLanguage(language)
        console.log(language)
    }

    return (
        <LanguageContext.Provider value={{ language, onLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    )
}


/* 
we are creating a LanguageStore as a single source of truth. It will store the state value/object, 
and method for changing that language/state

value in the Provider is a defined word, not made up

useLanguage() is a custom hook that returns value of useContext(LanguageContext)

the return statement is not really rendering anything to the screen.
Context must be capitalized because anytime we create a component for react to 
render it must be capitalized



*/
