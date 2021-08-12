import React from 'react'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const Button = () => {
    const renderSubmit = (language) => {
        return language === 'English' ? 'Submit' : 'Voorleggen'
    }
    return (
        <ColorContext.Consumer>
            {(color) => (
                <button className={`ui button ${color}`}>
                    <LanguageStore.Consumer>
                        {({language}) => renderSubmit(language)}
                    </LanguageStore.Consumer>
                </button>
            )}
        </ColorContext.Consumer>
    )
}

export default Button

/* static creates contextType as an instance of this(Button) class
its the same as saying Button.contextType = LanguageContext
-you only need to assign static if you're going to use this.context property and not
  Consumer

- Consumer can consumer more than 1 object. this.context, just 1

*/
