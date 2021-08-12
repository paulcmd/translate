import React, { useContext } from 'react'
import { LanguageStore } from '../contexts/LanguageContext'

const LanguageSelector = (props) => {
    const value = useContext(Context)
    console.log('value : ', value)
    return (
        
        <div>
            Select a language :
            <i
                className="flag us"
                onClick={() => props.onLanguageChange('English')}
            />
            <i className="flag nl" onClick={() => props.onLanguageChange('Dutch')} />
        </div>
    )
}

export default LanguageSelector
