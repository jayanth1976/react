import React from 'react'

export interface Props{
    text:string,
    css?:{},
    bool?:true
}


export const TableCell = ({text,css}:Props) => {
  return (
    <td style={css}>{text}</td>
  )
}
