import React from 'react';

const Smurfs = (props) => {
    return (
        <div>
            <h1>Name: {props.smurfs.name}</h1>
            <h2>Age: {props.smurfs.age}</h2>
            <h2>Height: {props.smurfs.height}</h2>
        </div>
    );
};

export default Smurfs;