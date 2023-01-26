import React, {useState} from 'react';



function NewGoal(props){

    function onCancelHandler(){
        props.onClick();
    }

    function onSubmitHandler(evt){
        evt.preventDefault();
        props.addGoal({title,description});
        props.onClick();
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function titleHandler(evt){
        setTitle(() => evt.target.value);
    }

    function descriptionHandler(evt){
        setDescription(() => evt.target.value);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title:</label>
                <input type='text' onChange={titleHandler}></input>
                <label>Description:</label>
                <input type='text' onChange={descriptionHandler}></input>
            </div>
            <div>
                <button type='button' onClick={onCancelHandler}>Cancel</button>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default NewGoal;