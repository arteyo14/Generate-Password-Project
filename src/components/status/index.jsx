import { useState, useEffect } from 'react'
import { passwordStrength } from 'check-password-strength'
import React from 'react';
import './status.scss'


const StatusComp = ({ pass, status, setStatus }) => {
    const [style, setStyle] = useState("")

    const statusChange = (key) => {
        return pass === "Choose a least one optional" ? setStatus(passwordStrength(key).value) : setStatus("No Pass");
    }

    const fillBox = (key) => {
        switch (key) {
            case "Too weak":
                return setStyle("too_weak");
            case "Weak":
                return setStyle("weak");
            case "Medium":
                return setStyle("medium");
            case "Strong":
                return setStyle("strong");
            default:
                return setStyle("");
        }
    }

    useEffect(() => {
        statusChange(pass);
        fillBox(status);
    }, [pass, status])

    return (
        <div className="container">
            <div className="status">
                <span className="status__title">STRENGTH</span>

                <ul className='status__container'>
                    <span className='status__output'>{status ? status.toUpperCase() : null}</span>
                    <li className={`status__box ${style}`}></li>
                    <li className={`status__box ${style}`}></li>
                    <li className={`status__box ${style}`}></li>
                    <li className={`status__box ${style}`}></li>
                </ul>
            </div>
        </div>
    )
}

export default StatusComp;