import React from "react";

function Inputtwo(props){
    
    return(
        <input type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder} 
                pattern={props.pattern}
                className="full-name">{props.text}
        </input>
    );
}
export default Inputtwo;