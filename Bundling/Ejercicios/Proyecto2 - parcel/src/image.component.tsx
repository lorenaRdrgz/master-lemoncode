import React from "react";
import * as classes from "./image.module.css"


export const ImageComponent:React.FC = () =>{
    return <img className={classes.imagen} src="./assets/logo_1.png" alt="" />
}