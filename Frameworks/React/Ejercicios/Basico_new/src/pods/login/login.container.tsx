import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { LoginComponent } from "./login.component";
import { UserProfileContext } from "@/core/providers/user-profile/user-profile.context";


export const LoginContainer: React.FC = () => {
    const  {setUsername} = React.useContext(UserProfileContext);
    const [error, setError] = React.useState<boolean>(false);

    const navigate = useNavigate();
    
    const handleLogin = (username:string, password:string) => {
        if (username == 'admin' && password == 'test') {
            setUsername(username);
            navigate(routes.home);
        }
        else{
            setError(true);
        }
    }

    return <LoginComponent onLogin={handleLogin} error={error}/>

}