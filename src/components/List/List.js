import React from 'react';
import Card from './Card';

const List = (props) => {
    
    return (
        <div>
            <ul className="list">
                {props.data.map((item) => (
                    <Card
                        key={item.id}
                        lastName={item.lastName}
                        name={item.name}
                        phoneNumber={item.phoneNumber}
                        onChange={() => props.onChange(item.id)}
                        onDelete={() => props.onDelete(item.id)}
                    />
                ))}
            </ul>
        </div>
    );
    
}

export default List;
