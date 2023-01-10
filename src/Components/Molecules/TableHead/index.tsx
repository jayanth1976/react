import React from 'react'

interface Props{
    colHeadings:string[];
    css?:string;
}

const TableHead = ({colHeadings,css}:Props) => {
  return (
    <tr className={css}>
        {
            colHeadings.map((item)=>{
                return (
                    <th>{item}</th>
                );
            })
        }
    </tr>
  )
}

export default TableHead