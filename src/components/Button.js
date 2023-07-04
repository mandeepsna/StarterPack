import React from "react";
const Button=(props)=>
{
    // console.log("Button rendered");
    return( 
    <>
     <button className={props.classname} onClick={props.BtnClicked}>{props.children}</button>
    </>
    );
}

export default React.memo(Button) ;