import React from 'react'
import { InputStyle } from './Input.style'

const Input = (props) => {
    const {
        titleLabel,
        classLabel,
        classInput,
        type,
        value,
        onChange,
        placeholder,
        name
    } = props
    return (

        <InputStyle>
            <div className='form'>
                {titleLabel ? (<label className={`label ${classLabel}`}>{titleLabel}</label>) : null}
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                    className={`input ${classInput}`}
                    placeholder={placeholder}
                />
            </div>

        </InputStyle>
    )
}

export default Input