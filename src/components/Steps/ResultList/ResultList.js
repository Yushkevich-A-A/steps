import React from 'react';
import PropTypes from 'prop-types';
import './ResultList.css';
import Step from './Step/Step';

function ResultList(props) {
    const { list, onRemove: handleRemove, onEdit: handleEdit } = props;
    console.log(list);

    return (
        <div className='result-container'>
            <ul className='result-header'>
                <li className='result-header-data'>Дата(ДД.ММ.ГГ)</li>
                <li className='result-header-data'>Пройдено км</li>
                <li className='result-header-data'>Действия</li>
            </ul>
            <ul className="result-list">
                {
                    list.map( step => <Step key={step.id} step={step} onRemove={handleRemove} onEdit={handleEdit}/>)
                }
            </ul>
        </div>
    )
}

ResultList.propTypes = {

};

export default ResultList;

