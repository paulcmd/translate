import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Button = () => {
    const { language } = useLanguage()

    const renderSubmit = (language) => {
        return language === 'English' ? 'Submit' : 'Voorleggen'
    }
    return (
        <button className="ui button primary">{renderSubmit(language)}</button>
    )
}

export default Button

/* 

const Button = () => {
    const renderSubmit = (language) => {
        return language === 'English' ? 'Submit' : 'Voorleggen'
    }
    return (
        <button className= 'ui button primary' >
            <LanguageProvider.Consumer>
                {({ language }) => renderSubmit(language)}
            </LanguageProvider.Consumer>
        </button>
    )
}

export default Button


static creates contextType as an instance of this(Button) class
its the same as saying Button.contextType = LanguageContext
-you only need to assign static if you're going to use this.context property and not
  Consumer

- Consumer can consumer more than 1 object. this.context, just 1

*/
