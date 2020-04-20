import React, { useState } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

function App(props) {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addSmurf(fields);
    setFields({
      name: '',
      age: '',
      height: ''
    })
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <form>
        <label>Add Smurfs:
          <input
            name="name"
            onChange={handleChange}
            type='text'
            value={fields.name}
            placeholder='Name'
          />
          <input
            age="age"
            onChange={handleChange}
            type='text'
            value={fields.age}
            placeholder='Age'
          />
          <input
            height="height"
            onChange={handleChange}
            type='text'
            value={fields.height}
            placeholder='Height'
          />
        </label>
        <button type='submit' onClick={handleSubmit}>Add</button>
      </form>
      <SmurfList />
    </div>
  );
}

export default connect(null, { addSmurf })(App);
