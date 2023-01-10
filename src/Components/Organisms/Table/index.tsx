import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import theme from "../../../Theme/Theme";
import TableHead from "../../Molecules/TableHead";
import TableContent from "../TableContent";
import dummyData from "../../../MOCK_DATA.json";
import Filter from "../Filter";

interface Props {
    showFilter?: boolean;
}

const useStyles = makeStyles({
    table: {
        // height:'82%',
        width: "100%",
        fontSize: "12px",
        borderSpacing: "0",
        "& td": {
            borderBottom: `1px solid ${theme.palette.grey[50]}`,
        },
        "& th": {
            borderBottom: `1px solid ${theme.palette.grey[50]} !important`,
            borderTop: `1px solid ${theme.palette.grey[50]} !important`,
        },
        textAlign: "left",
        position: "relative",
    },
    tHead: {
        height: "42px",
        color: theme.palette.grey[100],
        background: theme.palette.grey[300],
        "& th": {
            paddingLeft: "1.515%",
            border: "none",
        },
        "& :nth-child(1)": {
            width: "20% ",
        },
        "& :nth-child(2)": {
            width: "20% ",
        },
        "& :nth-child(3)": {
            width: "20% ",
        },
        "& :nth-child(4)": {
            width: "20% ",
        },
    },
    tRows: {
        height: "42px",
        width: "100%",
        fontSize: "14px",
        fontWeight: "400",
        "& td": {
            paddingLeft: "1.515%",
        },
        "& :first-child": {
            color: theme.palette.primary.main,
        },
        borderBottom: `1px solid ${theme.palette.grey[50]}`,
    },
    consider: {
        background: "#FAF8EB",
        color: "#A08817 !important",
        padding: "0.25rem 1em",
        borderRadius: "4px",
        fontSize: "12px",
    },
    clear: {
        borderRadius: "4px",
        padding: "0.25rem 1em",
        color: "#17A076 !important",
        background: "#F2FCFB",
        fontSize: "12px",
    },
    filter: {
        position: "absolute",
        top: "0.2%",
        left: "65%",
        display: "none",
    },
    show: {
        display: "block",
    },
});

const Table = ({ showFilter }: Props) => {
    const headings = ["NAME", "ADJUDICATION", "STATUS", "LOCATION", "DATE"];
    const classes = useStyles();
    let newArray = dummyData;

    const initialState = {
        1: false,
        2: false,
        3: false,
    };
    const [statusObj, setStatusObj] = useState(initialState);
    const handleSetStatusObj = (e: any) => {
        const name = e.target.id;
        setStatusObj((prev) => {
            return { ...prev, [name]: e.target.checked };
        });
        console.log(e.target.checked);
    };

    let filteredArray = newArray.filter((item) => {
        if (statusObj[2] && statusObj[3]) return true;
        else if (statusObj[3]) return item.status === "CONSIDER";
        else if (statusObj[2]) return item.status === "CLEAR"
        else return true;
    });
    console.log(statusObj);
    return (
        <table className={classes.table}>
            <TableHead colHeadings={headings} css={classes.tHead} />

            <TableContent
                data={filteredArray}
                rowClass={classes.tRows}
                considerClass={classes.consider}
                clearClass={classes.clear}
            />

            <Filter
                classFilter={
                    showFilter
                        ? `${classes.show} ${classes.filter}`
                        : classes.filter
                }
                updateStatusArr={handleSetStatusObj}
            />
        </table>
    );
};

export default Table;
