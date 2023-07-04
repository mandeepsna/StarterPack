import React from "react";
const Span=(props)=>
{
    // console.log("Span Rendered");
    return(
        <>
        <span>{props.children}</span>
        </>
    );
}

export default React.memo(Span);