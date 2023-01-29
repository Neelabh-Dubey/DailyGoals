import React from "react";
import classes from "./Goal.module.css";


function Goal(props){

    function onClickHandler(evt){
        props.onClick(evt.target.id);
    }
    return(
        <div className={classes.goal} onClick={onClickHandler} id={props.goal.key}>{props.goal.title}</div>
    )
}

export default Goal;