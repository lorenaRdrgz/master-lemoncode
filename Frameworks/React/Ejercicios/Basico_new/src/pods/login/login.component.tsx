import React from "react";
import { Card, CardHeader, CardContent, Button, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/routes";


interface LoginInfo {
    login: string;
    password: string;
}

export const LoginComponent: React.FC = () => {
    const [loginInfo, setLoginInfo] = React.useState<LoginInfo>({ login: '', password: '' });
    const navigate = useNavigate();
    const handleNavigation = (e) => {
        e.preventDefault();
        if (loginInfo.login == 'admin' && loginInfo.password == 'test') {
            navigate(switchRoutes.home);
        }
        else {
            alert("Usuario o contraseña incorrectos.");
        }
    }
    return <>
        <Card sx={{ padding: "20px" }}>
            <CardHeader title="Login" />
            <CardContent>
                <form onSubmit={handleNavigation}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <TextField
                            type="text"
                            value={loginInfo.login}
                            onChange={(e) => setLoginInfo({
                                ...loginInfo,
                                login: e.target.value,
                            })}
                            placeholder="Login" />
                        <TextField
                            type="password"
                            value={loginInfo.password}
                            onChange={(e) => setLoginInfo({
                                ...loginInfo,
                                password: e.target.value,
                            })}
                            placeholder="Password" />
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </CardContent>
            {/* <Alert severity="error">
                Usuario o contraseña incorrectos.
            </Alert> */}
        </Card >
    </>
};