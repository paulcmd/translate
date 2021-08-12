import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSelector = () => {
    const { onLanguageChange } = useLanguage()
    //console.log('Language : ',contextValues.language)
    return (
        
        <div>
            Select a language :
            <i
                className="flag us"
                onClick={() => onLanguageChange('English')}
            />
            <i className="flag nl" onClick={() => onLanguageChange('Dutch')} />
        </div>
    )
}

export default LanguageSelector
