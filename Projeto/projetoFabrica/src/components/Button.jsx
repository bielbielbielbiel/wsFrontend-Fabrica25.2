import React from 'react'

const Button = ({ label, onclick }) => {
    return (
        <button onClick={onclick} className='button'>{label}</button>
    )
}

export default Button