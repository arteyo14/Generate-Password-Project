import React from 'react'
import './condition.scss'

const Condition = ({ check, setCheck }) => {
    return (
        <ul className="checkbox">
            <li className='checkbox__list'>
                <input type="checkbox" name="upper" id="checbox__upper" className='checkbox__checked' defaultChecked={check.upper} onChange={(e) => setCheck.setUpper(e.target.checked)} /><span className='checkbox__style'></span>
                <label htmlFor="checbox__upper">Include Uppercase Letters</label>
            </li>
            <li className='checkbox__list'>
                <input type="checkbox" name="lower" id="checbox__lower" className='checkbox__checked' defaultChecked={check.lower} onChange={(e) => setCheck.setLower(check.lower = e.target.checked)} />
                <label htmlFor="checbox__lower">Include Lowercase Letters</label>
            </li>
            <li className='checkbox__list'>
                <input type="checkbox" name="number" id="checbox__number" className='checkbox__checked' defaultChecked={check.number} onChange={(e) => setCheck.setNumber(check.number = e.target.checked)} />
                <label htmlFor="checbox__number">Include Number</label>
            </li>
            <li className='checkbox__list'>
                <input type="checkbox" name="symbol" id="checbox__symbol" className='checkbox__checked' defaultChecked={check.symbol} onChange={(e) => setCheck.setSymbol(check.symbol = e.target.checked)} />
                <label htmlFor="checbox__symbol">Include Symbol</label>
            </li>
        </ul>
    )
}

export default Condition;