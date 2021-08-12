import React, { useState } from 'react'

const Context = React.createContext('English')


const LanguageStore = () => {
	const [language, setLanguage] = useState('English')

	const onLanguageChange = (language) => {
        setLanguage(language)
        //console.log('current language', language)
    }
}



/* 
we are creating a LanguageStore as a single source of truth. It will store the current
language in state, and method for changing that language

Context must be capitalized because */