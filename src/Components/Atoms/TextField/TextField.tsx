import React from "react";

export interface Props {
    className?:string;
    type: string;
    placeholder: string;
    min?: string;
    max?: string;
    css?:{}
}
export const TextField = (props: Props) => {
    return <input className="inp" style={props.css} {...props} />;
};
