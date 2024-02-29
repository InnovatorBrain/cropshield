import React from 'react'
import "./DashPageTitleDiv.css"
import { MdLastPage } from "react-icons/md";
const DashPageTitleDiv = (props) => {
    return (
        <>
            <div className='DashTitle-main-container'>
                <p className='DashTitle-title'>
                    <MdLastPage className='DashTitle-page-icon' /> {props.title}
                </p>
                <div className='DashTitle-pannel-option'>
                    Info Panel
                </div>
            </div>
        </>

    )
}

export default DashPageTitleDiv