import React from 'react'

export interface TableCellProps{
    text:string,
    css?:{},
    bool?:true
}


export const TableCell = ({text,css}:TableCellProps) => {
  return (
    <td style={css}>{text}</td>
  )
}
