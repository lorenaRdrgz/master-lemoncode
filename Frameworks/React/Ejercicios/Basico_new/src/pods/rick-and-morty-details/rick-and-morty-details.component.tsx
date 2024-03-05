import React from "react";
import { Button, Card, CardActionArea, CardContent, CardMedia, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { CharacterDetailEntity } from "./rick-and-morty-details.vm";

interface Props {
    character: CharacterDetailEntity;
}


export const RickAndMortyDetailsComponent: React.FC<Props> = (props) => {
    const { character } = props;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(routes.rick);
    }

    return <>
        <div>
            <h1>Bio {character.name}</h1>
            <br />
            <br />
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={character.image}
                        alt="character image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {character.name}   {character.gender == 'Female' && (<FemaleIcon />)}{character.gender == 'Male' && (<MaleIcon />)} {character.gender == 'unknown' && (<QuestionMarkIcon />)}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            {character.species} -  {character.status}
                        </Typography>
                        {
                            character.episode.map((ep) => (
                                <>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton href={ep} target="_blank">
                                                <ListItemIcon>
                                                    <MovieIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={ep} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </>
                            ))
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
            <br />
            <Button
                className="button"
                type="button"
                variant="contained"
                onClick={() => {
                    navigate(routes.rick);
                }}>
                <ArrowBackIosIcon />
                Volver
            </Button>
        </div >
    </>
};