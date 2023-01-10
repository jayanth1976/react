import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const useStyles = makeStyles({
    count: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "orange",
        width: "60%",
        height: "70%",
        margin: "0 auto",
        borderRadius: "0.5rem",
        fontSize: "2.5rem",
    },
    con: {
        width: "40vw",
        height: "60vh",
    },
    btns: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "60%",
        height: "20%",
        margin: "0 auto",
        marginTop: "2vh",
    },
    btn: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "none",
        width: "15%",
        height: "40%",
        fontSize: "1.5rem",
        background: "skyblue",
        borderRadius: "0.25rem",
        cursor: "pointer",
    },
});

const Counter = () => {
    const classes = useStyles();

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("count")) {
            let cnt = localStorage.getItem("count");
            if (!cnt) cnt = "0";
            setCount(parseInt(cnt));
            // console.log('hi')
        }
    }, []);

    const handleClick = (e: any) => {
        let name = e.target.id;
        if (name === "reset") {
            setCount(0);
        } else if (name === "add") {
            setCount((prev) => {
                updateLocalStorage(++prev);
                return ++prev;
            });
        } else {
            setCount((prev) => {
                updateLocalStorage(--prev);
                return --prev;
            });
        }
        
    };
    const updateLocalStorage = (cnt:number) =>
        localStorage.setItem("count", cnt.toString());
    // console.log('hello')
    return (
        <div className={classes.con}>
            <div className={classes.count}>
                <p>{count}</p>
            </div>
            <div className={classes.btns}>
                <button id="add" className={classes.btn} onClick={handleClick}>
                    +
                </button>
                <button
                    className={classes.btn}
                    onClick={handleClick}
                    id="reset"
                >
                    <RestartAltIcon id="reset" />
                </button>
                <button id="sub" className={classes.btn} onClick={handleClick}>
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;
