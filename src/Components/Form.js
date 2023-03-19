import React from "react";

const Form = (props) => {

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
                <input
                    name="name" 
                    placeholder="Enter your name"
                    value={props.values.name}
                    onChange={handleChange}
                />
            </label>
            <label>Favorite Food
                <input
                    name="food"
                    placeholder="What's your favorite food?"
                    value={props.values.food}
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <select value={props.values.role} name="role" onChange={handleChange}>
                    <option value="">--- Select a Role ---</option>
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Child">Child</option>
                    <option value="Cat">Cat</option>
                </select>
            </label>
            <input type="submit" value="Create your character!" />
        </form>
    )
}

export default Form;