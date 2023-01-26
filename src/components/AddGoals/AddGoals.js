import React, {useState} from "react";
import NewGoal from "./NewGoal";


function AddGoals(props){

    const [flag, setFlag] = useState(false);

    function onClickHandler(){
        setFlag(() => !flag)
    }

    return (
        <div>
            {flag?<NewGoal onClick={onClickHandler} addGoal={props.addGoal}/>:<div onClick={onClickHandler}>Add Goals</div>}
        </div>
    )

}

export default AddGoals;