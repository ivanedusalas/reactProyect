import react, { Fragment, useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

const Car = (props) => {

    const [car, SetCar] = useState()
    let showCar = []

    useEffect(() => {
        axios.get('http://localhost:8080/api/car').then((res) => {
            SetCar(res.data);
        })
    }, []);

    if (car) {
        console.log(car);
        showCar = car.map((data) => 
            <Card
                title={data.name}
                desc={data.brand}
                subdesc={data.color}
                number={data.sizeType}
            ></Card>
        )
    }

    console.log(showCar);
    return (
        <Fragment>
            <div>
                {showCar}
            </div>
        </Fragment>
    )
}

export default Car;