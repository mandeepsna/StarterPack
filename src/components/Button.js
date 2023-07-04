import React from "react";
const Button=(props)=>
{
    
    return( 
    <>
     <button className={props.classname} onClick={props.BtnClicked}>{props.children}</button>
    </>
    );
}

export default React.memo(Button) ;