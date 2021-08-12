import React from 'react'

const Field = ({language}) => {
    const nameText = language === 'English' ? 'Name' : 'Naam'

    return (
        <div className="ui field">
            <label>{nameText} : </label>
            <input />
        </div>
    )
}

export default Field
