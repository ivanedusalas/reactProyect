import React, { Fragment } from "react";
import { ErrorMessage, Field} from "formik";

const Input = (props) => {

    const renderSelect = () => (
        <Fragment>
            <label className="inputBlock">{props.label}</label>
            <Field
                className='form-select'
                name={props.name}
                as="select"
            >
                <option value="">Seleccione</option>
                {
                    props.options.map(option => 
                        <option value={option}>{option}</option>
                    )
                }
            </Field>
            <ErrorMessage 
                name={props.name} 
                component={
                    () => (
                        <div class="alert alert-danger" role="alert">
                            {props.error}
                        </div>
                    )
                } 
            />
        </Fragment>
    )

    const renderInput = () => (
        <Fragment>
            <label>{props.label}</label>
            <Field
                className='form-control'
                type='text'
                placeholder={props.placeholder}
                name={props.name}
            />
            <ErrorMessage name={props.name} component={() => (<div class="alert alert-danger" role="alert">{props.error}</div>)} />
        </Fragment>
    )

    const renderRadio = () => (
        <Fragment>
            <label className="inputBlock">{props.label}</label>
            <div>
                {
                    props.options.map(option =>  
                        <Fragment>
                            {console.log(option)}
                            <Field
                                className="form-check-input"
                                type="radio"
                                name={props.name}
                                value={option.value}
                            />
                            <label className="inputGenre">{option.label}</label>
                        </Fragment>
                    )
                }
            </div>
            <ErrorMessage name={props.name} component={() => (<div class="alert alert-danger" role="alert">{props.error}</div>)} />
        </Fragment>
    )
        
    

    const renderContent = () => {
        if (props.type) {
            if (props.type === 'text') {
                return renderInput();
            } else if (props.type === 'select') {
                return renderSelect();
            } else {
                return renderRadio();
            }
        } else {
            throw Error('Type prop is mandatory');
        }
    }

    return (
        <div className="inputForm">
            { renderContent() }
        </div>
    )

}

export default Input;