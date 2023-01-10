import React from "react";
// import data from "../../MOCK_DATA.json";
// import data from "../../Sample.json";
interface Props{
    rowClass?:string;
    considerClass?:string;
    clearClass?:string;
    data:any;
}

const TableContent = ({rowClass,considerClass,clearClass,data}:Props) => {
    return (
        <>
            {data.map((item:any) => {
                return (
                <tr className={rowClass}>
                    <td>{item.name}</td>
                    <td> - </td>
                    <td>
                        <span className={item.status === 'CONSIDER'? considerClass:clearClass}>{item.status}</span>
                    </td>
                    <td>{item.location}</td>
                    <td>{item.date}</td>
                </tr>
                );
            })}
        </>
    );
};

export default TableContent;
