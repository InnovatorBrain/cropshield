import React from 'react'
import { Link } from 'react-router-dom'
import "./Headings.css"

const Headings = (props) => {
    return (
        <>
            <div className="Headings-main-container">
                <h className="Headings-title">{props.title}</h>
                <p className="Headings-text">{props.text}</p>
                <Link to="" className="Headings-link">{props.linkText}</Link> 
            </div>
        </>
    )
}

export default Headings