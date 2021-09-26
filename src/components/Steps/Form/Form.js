import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

function Form(props) {
    const { form, onAdd: handleSubmit, onEditForm: handleInputValue } = props;

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-date">
                <label htmlFor="form-date" className="form-label form-date-label">
                    Дата(ДД.ММ.ГГ)
                </label>
                <input type="text" id='form-date' name='date' className="form-input form-date-input" onChange={handleInputValue} value={form.date} required/>
            </div>
            <div className="form-value">
                <label htmlFor="form-value" className="form-label form-value-label">
                    Пройдено км
                </label>
                <input type="text" id='form-value' name='distance' className="form-input form-value-label" onChange={handleInputValue} value={form.distance} required/>
            </div>
            <button className='form-button'>OK</button>
        </form>
    )
}

Form.propTypes = {
    form: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onEditForm: PropTypes.func.isRequired,
};

export default Form;

