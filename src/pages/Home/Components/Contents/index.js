import React, { useContext, useState } from 'react'
import "./style.css"
import { Input } from './Input.style';
import { HomeContext } from '../../../../HomeProvider';
const Contents = ({ className }) => {
    const themes = useContext(HomeContext)
    const { theme, onTheme, toggle, onToggle } = themes
    return (
        <div className={className}>
            <Input> <input className='toggletheme' type='checkBox' value={theme} onChange={onTheme} /></Input>
            <button onClick={onToggle}>toggle Sidebar</button>
        </div>
    )
}

export default Contents