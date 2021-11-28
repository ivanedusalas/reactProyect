import react, { Fragment, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Formulario from '../Components/Formulario';
import axios from 'axios';

const NewCar = () => {

    const handleProps = (values) => {
        const URL = 'http://localhost:8080/api/car'
        axios.post(URL, values).then((response) => {
                
            }).catch(error => {
                console.error('Something went wrong!', error);
            }
        );
    }

    return (
        <Fragment>
            <Formulario onClick={(values) => handleProps(values)} ></Formulario>
        </Fragment>
    )
}

export default NewCar;