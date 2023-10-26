import React, { useContext, useEffect } from "react";
import { useScrollTrigger } from "@mui/material";
import { AdelContext } from "../store/Context";
import { MAIN_COLOR, SECONDARY_COLOR } from "../constant";

const ScrollHandler = props => {
    const { dispatch } = useContext(AdelContext)
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined
    });
    useEffect(() => {
        dispatch({ type: 'SCROLLTRIGGER', payload: trigger })
    }, [trigger, dispatch])
    return React.cloneElement(props.children, {

        style: {
            backgroundColor: trigger ? MAIN_COLOR : "transparent",
            color: trigger ? "black" : SECONDARY_COLOR,
            // opacity:trigger?0.5:"",
            transition: trigger ? "0.70s" : "0.60s",
            boxShadow: "none",
        }
    });
};

const ScrollToColor = props => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;