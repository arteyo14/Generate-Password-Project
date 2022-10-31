import React from 'react';
import './selector.scss';

const Selector = ({ length, setLength }) => {
    return (
        <section className="selector">
            <div className="selector__header">
                <div className="selector__container">
                    <span className="selector__title">Charactor Length</span>
                    <span>{length}</span>
                </div>
                <input type="range" name="length" id="input__length" className='input__length' min={0} max={20} step={1} defaultValue={10} onChange={(e) => setLength(e.target.value)} />
                <div className="sliderbar"></div>
            </div>
        </section>
    )
}

export default Selector;