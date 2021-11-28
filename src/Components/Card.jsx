import React, { Fragment, useState } from "react";

const Card = (props) => {
    return (
        <Fragment>
        <div className="card cardCar">
            <div className="card-header">
                {props.title}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.desc}</li>
                <li className="list-group-item">{props.subdesc}</li>
                <li className="list-group-item">{props.number}</li>
            </ul>
        </div>
        </Fragment>
    )
}

export default Card;


