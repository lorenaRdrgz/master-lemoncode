import React, { FormEvent } from "react";
import { Card, CardHeader, CardContent, Button, Alert } from "@mui/material";
import { TextField } from "@/common/components/text-field.component";
interface Props {
    onLogin: (username:string, password:string) => void,
    error:boolean    
}

export const LoginComponent: React.FC<Props> = (props) => {
    const { onLogin, error } = props;
    const [loginInfo, setLoginInfo] = React.useState<LoginInfo>({ username: '', password: '' });

    const handleNavigation = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onLogin(loginInfo.username, loginInfo.password);
    }

    return <>
        <Card sx={{ padding: "20px" }}>
            <CardHeader title="Login" />
            <CardContent>
                <form onSubmit={handleNavigation}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <TextField
                            type="text"
                            value={loginInfo.username}
                            onChange={(e) => setLoginInfo({
                                ...loginInfo,
                                username: e.target.value,
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