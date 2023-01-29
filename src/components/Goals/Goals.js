import React from "react";
import Goal from "./Goal";


function Goals(props){
    return(
        <div>
            {props.goals.map((goal) => <Goal goal={goal} key={goal.key} onClick={props.deleteGoal}/>)}
        </div>
    )

}

export default Goals;