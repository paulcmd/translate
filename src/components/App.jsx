import React from 'react'
import { LanguageStore } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import ColorContext from '../contexts/ColorContext'
import UserCreate from './UserCreate'

const App = () => {
        
    
    return (
        <div className="ui container">
            <LanguageStore>
                <LanguageSelector />
                
            </LanguageStore>
        </div>
    )
}

export default App

/* 
LanguageStore is providing onLanguageChange to LanguageSelectore and the
the state value(currently selected language) to UserCreate

<ColorContext.Provider value="red">
                    <UserCreate />
                </ColorContext.Provider>
*/