import React, { useState, useEffect } from "react";

import { CustomBgText } from "./styles/Paragraph.styled";

export const BgTextVariableSz = (props) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return (() => {
            window.removeEventListener('cleanup', handleResize)
        })
    })

    const sz = width >= 1000 ? props.textSz : props.textSz * width / 1000;
    return(
        <CustomBgText sz={sz} top={props.top}>
            {props.children}
        </CustomBgText>
    )
}