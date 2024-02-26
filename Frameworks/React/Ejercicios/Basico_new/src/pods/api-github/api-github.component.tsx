import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/routes";


export const ApiGitHubComponent: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(switchRoutes.home);
    }
    return <>
        <div>
            <h1>Github</h1>
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