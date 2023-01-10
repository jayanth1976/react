import React from "react";
// import {Checkbox} from "../Atoms/Checkbox/Checkbox";
import Adjudication from "../Molecules/Adjudication";
import Status from "../Molecules/Status";
import { makeStyles } from "@mui/styles";

interface Props{
    classFilter?:string;
    updateStatusArr?:any;
}

const useStyles = makeStyles({
filterStyles :{
    width: "285px",
    height: "352px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "Inter",
    position:'absolute',
    background:'white'
},
filterPara : {
    padding: "0.75rem 1rem",
    fontWeight: "500",
    borderBottom: "1px solid #E5E7ED",
},
statusPara :{
    padding: "0.75rem 1rem",
    fontWeight: "500",
    color: "#818287",
    paddingBottom: "12px",
}

})

const Filter = ({classFilter,updateStatusArr}:Props) => {
    const classes = useStyles()
    return (
        <div className={`${classes.filterStyles} ${classFilter}`}>
            <p className={classes.filterPara}>Filters</p>
            <p className={classes.statusPara}>Status</p>
            <Status handleUpdate={updateStatusArr}/>
            <p className={classes.statusPara}>Adjudication</p>
            <Adjudication />
        </div>
    );
};

export default Filter;
