import React from 'react';

const Card = (props) => {
    
        return (
            <li>
                <div className="contact-item">{props.lastName}</div>
                <div className="contact-item">{props.name}</div>
                <div className="contact-item">{props.phoneNumber}</div>      
                <button className="fas fa-pencil-alt" onClick={props.onChange}></button>
                <button className="fas fa-trash-alt" onClick={props.onDelete}></button>        
            </li>
        );
}

export default Card;
