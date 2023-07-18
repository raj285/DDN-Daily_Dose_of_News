import React from "react";
import notecontext from "./CmntContext";
const NoteState = (props)=>{
    const state={
        "name" :"Nishant",
        "email_id":"goswaminishant9670@gmail.com"
    }
    return (
        <notecontext.Providerrovider value={state}>
            {props.children}
        </notecontext.Providerrovider>
    )
}
export default NoteState;