import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends Component {
    static contextType = LanguageContext
	render() {
		console.log(this.context)
        return <button className="ui button primary">Submit</button>
    }
}

export default Button


/* static creates contextType as an instance of this(Button) class
its the same as saying Button.contextType = LanguageContext


*/