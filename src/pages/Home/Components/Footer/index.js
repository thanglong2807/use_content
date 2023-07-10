import React, { useContext } from 'react'
import { HomeContext } from '../../../../HomeProvider'

const Footer = ({ className }) => {
    const texts = useContext(HomeContext)
    const { text } = texts
    return (
        <div className={className}>
            <h2>Show text:{text}</h2>
        </div>
    )
}

export default Footer