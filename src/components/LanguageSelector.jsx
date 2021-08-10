import React from 'react'

const LanguageSelector = ({onLanguageChange}) => {
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
