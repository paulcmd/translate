import React from 'react'
import { LanguageProvider } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import UserCreate from './UserCreate'

const App = () => {
        
    
    return (
        <div className="ui container">
            <LanguageProvider>
                <LanguageSelector />
                <UserCreate />
            </LanguageProvider>
        </div>
    )
}

export default App

/* 
LanguageStore is providing onLanguageChange to LanguageSelectore and the
the state value(currently selected language) to UserCreate


                    
                
*/