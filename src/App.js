import './App.css';
import Form from './Components/Form';
import React, { useState } from 'react';


function App() {
  
  const [member, setMember] = useState([]);
  const [values, setValues] = useState({ name: '', food: '', role: '' })

  const onSubmit = () => {
    setMember([values, ...member]);
    setValues({ name: '', food: '', role: '' });
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="App">
      <h1>Family Builder</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
      />
     {member.map((member, indx) => {
      return (
        <h2 key={indx}>
          {`${member.name} likes ${member.food}. Their role is the ${member.role}.`}
        </h2>
      )
     })}
      
    </div>
  );
}

export default App;
