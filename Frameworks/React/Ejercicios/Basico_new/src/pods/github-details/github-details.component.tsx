import React from "react";
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "@/router/routes";

interface MemberDetailEntity {
    id: string;
    name: string;
    company: string;
    bio: string;
    login: string;
    avatar_url: string;
}

const createDefaultMemberDetail = (): MemberDetailEntity => ({
    id: '',
    name: '',
    company: '',
    bio: '',
    login: '',
    avatar_url: ''
});

export const GitHubDetailsComponent: React.FC = () => {
    const { id } = useParams();
    const [member, setMember] = React.useState(createDefaultMemberDetail());
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(routes.github);
    }
    React.useEffect(() => {
        fetch(`https://api.github.com/user/${id}`)
            .then(response => response.json()
                .then(json => setMember(json)))
    }, []);
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