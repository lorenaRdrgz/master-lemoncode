import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/routes";


export const ApiRickComponent: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(switchRoutes.home);
    }
    return <>
        <div>
            <h1>Rick & Morty</h1>
            <br />
            <br />
            <br />
            <Button 
                type="submit" 
                variant="contained"
                onClick={handleNavigation}
            >
                Volver
            </Button>
        </div>
    </>
};