import React from "react";
import ButtonMUI, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
    text: string;
    className?: string;
}

export const Button: React.FC<Props> = (props) => {
    const { text, className, ...rest } = props;
    return (
        <ButtonMUI {...rest} className={className}>
            {text}
        </ButtonMUI>
    );
};