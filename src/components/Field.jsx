import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Field = () => {
    const { language } = useLanguage()

    const nameText = language === 'English' ? 'Name' : 'Naam'

    return (
        <div className="ui field">
            <label>{nameText} : </label>
            <input />
        </div>
    )
}

export default Field
