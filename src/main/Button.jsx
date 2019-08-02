import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    return (
        <button
            onClick={() => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}

