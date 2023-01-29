import React, {useState} from "react";
import NewGoal from "./NewGoal";
import classes from "./AddGoals.module.css";


function AddGoals(props){

    const [flag, setFlag] = useState(false);

    function onClickHandler(){
        setFlag(() => !flag)
    }

    return (
        <div>
            {flag?<NewGoal onClick={onClickHandler} addGoal={props.addGoal}/>:<button onClick={onClickHandler} className={classes.btn}>Add Goals</button>}
        </div>
    )

}

export default AddGoals;