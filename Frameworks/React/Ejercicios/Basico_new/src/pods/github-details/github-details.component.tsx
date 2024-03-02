import React from "react";
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { MemberDetailEntity } from "./github-details.vm";

interface Props{
    member: MemberDetailEntity;
}


export const GitHubDetailsComponent: React.FC<Props> = (props) => {
    const {member} = props;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(routes.github);
    }

    return <>
        <div>
            <h1>Github Detalle {member.login}</h1>
            <br />
            <br />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={member.avatar_url}
                        alt="member image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {member.name}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            {member.id} - {member.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {member.bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
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