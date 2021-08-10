import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends Component {
    static contextType = LanguageContext

    render() {
        const nameText = this.context === 'English' ? 'Name' : 'Naam'
        return (
            <div className="ui field">
                <label>{nameText} : </label>
                <input />
            </div>
        )
    }
}

export default Field
