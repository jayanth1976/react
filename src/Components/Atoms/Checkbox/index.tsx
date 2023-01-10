import React from "react";
import "../../../index.css";
export interface Props {
    name: string;
    id: string;
    text: string;
    css?: {};
    className?: string;
    handleClick?:any;
    check?:boolean;
}
const center =  {
    display: "flex",
    alignItems: "center",

}

const lableStyles = { marginLeft: "11px" };
export const Checkbox = ({ name, id, text, css,handleClick}: Props):JSX.Element => {
    return (
        <div style={{...css,...center}}>
            <input type="checkbox" name={name} id={id} onClick={(e)=>{handleClick(e)}}/>
            <label htmlFor={id} style={lableStyles}>
                {text}
            </label>
        </div>
    );
};
