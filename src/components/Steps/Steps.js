import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ResultList from './ResultList/ResultList';
import Form from './Form/Form';
import StepModel from './StepModel/StepModel';
import { compareDesc, parse  } from 'date-fns'
import { nanoid } from 'nanoid';
import './Steps.css';

function Steps() {
    const [ steps, setSteps ] = useState([]);
    const [ form, setForm ] = useState({id: nanoid(), date: '', distance: ''});

    const handleAdd = (step) => {
        const currentStep = steps.find( item => item.date === step.date );
        if (currentStep) {
            console.log('такая дата существует')
            const sumDistance = parseFloat(step.distance) + parseFloat(currentStep.distance);
            setSteps(steps.map( item => (item.id === currentStep.id) ?
                                new StepModel(currentStep.id, currentStep.date, sumDistance) :
                                item));
        } else {
            const newStepsArr = steps.map( item => item.id === step.id ? new StepModel(step.id, step.date, step.distance) : item );
            setSteps(newStepsArr.sort((a, b) => compareDesc(
                parse(a.date, 'dd.MM.yyyy', new Date()),
                parse(b.date, 'dd.MM.yyyy', new Date())
                )))
        }
        setForm({id: nanoid(), date: '', distance: ''});
    }

    const handleRemove = (id) => {
        setSteps(steps => steps.filter( item => item.id !== id) )
    }

    const handleEdit = (id) => {
        setForm(steps.find( item => item.id === id));
    }

    const handleInputValue = event => {
        const { name,value } = event.target;
        setForm( prevForm => ({ ...prevForm, [name]: value}) );
    }

    const handleSubmit = event => {
        event.preventDefault();
        handleAdd(form);
    }

    return (
        <div className='steps-container'>
            <Form form={form} onEditForm={handleInputValue} onAdd={handleSubmit}/>
            <ResultList list={steps} onRemove={handleRemove} onEdit={handleEdit}/>
        </div>
    )
}

Steps.propTypes = {

};

export default Steps;