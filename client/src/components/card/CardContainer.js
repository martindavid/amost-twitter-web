import React from 'react';

const CardContainer = props => {
    return (
        <div className="card">
            <div className="card-header" data-background-color={props.backgroundColor}>
                <h4 className="title">{props.title}</h4>
                <p className="category">{props.description}</p>
            </div>
            <div className="card-content">
                {props.children}
            </div>
        </div>
    );
}

export default CardContainer;