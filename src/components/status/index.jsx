import React from 'react';
import './status.scss'

const StatusComp = ({ status, setStatus }) => {
    return (
        <div className="container">
            <div className="status">
                <span className="status__title">STRENGTH</span>

                <ul className='status__container'>
                    <span className='status__output'>{status[0]}</span>
                    <li className='status__box'></li>
                    <li className='status__box'></li>
                    <li className='status__box'></li>
                    <li className='status__box'></li>
                </ul>
            </div>
        </div>
    )
}

export default StatusComp;