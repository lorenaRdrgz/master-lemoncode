import React from "react";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";


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
                            navigate(routes.github);
                        }}
                    >
                        GitHub
                    </Button>

                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            navigate(routes.rick);
                        }}
                    >
                        Rick & Morty
                    </Button>

                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            navigate(routes.login);
                        }}
                    >
                        Volver
                    </Button>
                </div>
            </CardContent>
        </Card >
    </>
};