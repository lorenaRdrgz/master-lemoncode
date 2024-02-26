import React from "react";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/routes";


export const HomeComponent: React.FC = () => {
    const navigate = useNavigate();
    return <>
        <Card sx={{ padding: "20px" }}>
            <CardHeader title="Home" />
            <CardContent>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            navigate(switchRoutes.github);
                        }}
                    >
                        GitHub
                    </Button>

                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            navigate(switchRoutes.rick);
                        }}
                    >
                        Rick & Morty
                    </Button>

                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            navigate(switchRoutes.login);
                        }}
                    >
                        Volver
                    </Button>
                </div>
            </CardContent>
        </Card >
    </>
};