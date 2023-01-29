import React, {useState} from 'react';
import classes from './NewGoal.module.css';



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
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <div className={classes.box}>
                <label className={`${classes.label} ${classes.label1}`}>Title:</label>
                <input type='text' onChange={titleHandler} className={classes.input}></input>
            </div>
            <div className={classes.box}>
                <label className={classes.label}>Description:</label>
                <input type='text' onChange={descriptionHandler} className={classes.input}></input>
            </div>
            <div className={`${classes.box} ${classes.buttons}`}>
                <button type='button' onClick={onCancelHandler} className={classes.btn}>Cancel</button>
                <button type='submit' className={classes.btn}>Add</button>
            </div>
        </form>
    )
}

export default NewGoal;