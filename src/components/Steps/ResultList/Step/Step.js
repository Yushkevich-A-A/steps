import React from 'react';
import PropTypes from 'prop-types';

import './Step.css';

function Step(props) {
    const { step, onRemove: handleRemove, onEdit: handleEdit } = props;

    return (
        <li className='step'>
            <div className="step-data tiem-date">{step.date}</div>
            <div className="step-data step-distance">{step.distance}</div>
            <div className="step-data step-actions">
                <button className='step-action step-action-edit'
                onClick={() => handleEdit(step.id)}
                ></button>
                <button className='step-action step-action-delete' 
                onClick={() => handleRemove(step.id)}
                ></button>
            </div>
        </li>
    )
}

Step.propTypes = {

};

export default Step;

