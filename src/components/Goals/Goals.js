import React from "react";
import Goal from "./Goal";


function Goals(props){

    return(
        <div>
            {props.goals.map((goal) => <Goal goal={goal} key={Math.round(Math.random()*1000)} />)}
        </div>
    )

}

export default Goals;