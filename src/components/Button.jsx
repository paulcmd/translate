import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends Component {
    renderSubmit(value) {
        return value === 'English' ? 'Submit' : 'Voorleggen'
    }

    render() {
        //console.log(this.context)

        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        )
    }
}

export default Button

/* static creates contextType as an instance of this(Button) class
its the same as saying Button.contextType = LanguageContext
-you only need to assign static if you're going to use this.context property and not
  Consumer

- Consumer can consumer more than 1 object. this.context, just 1

*/
