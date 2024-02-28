import React from "react";
import { Card, CardHeader, CardContent, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { TextField } from "@/common/components/text-field.component";
import { UserProfileContext } from "@/core/providers/user-profile/user-profile.context";
interface LoginInfo {
    login: string;
    password: string;
}

export const LoginComponent: React.FC = () => {
    const [loginInfo, setLoginInfo] = React.useState<LoginInfo>({ login: '', password: '' });
    const [error, setError] = React.useState<boolean>(false);
    const  {username, setUsername} = React.useContext(UserProfileContext);
    const navigate = useNavigate();
    const handleNavigation = (e) => {
        e.preventDefault();
        if (loginInfo.login == 'admin' && loginInfo.password == 'test') {
            setUsername(loginInfo.login);
            navigate(routes.home);
        }
        else {
            setError(true);
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
            {error && (
                <Alert severity="error">
                    Usuario o contraseña incorrectos.
                </Alert>
            )}
        </Card >
    </>
};