import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterDetailEntity } from "./character-detail.vm";
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

interface Props {
  character: CharacterDetailEntity;
}

export const CharacterDetail: React.FC<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <>
      {character ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {character.id} - {character.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.episode}
                  {character.species}
                  {character.created}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <br /><br />
      <Button variant="contained"
        onClick={() => {
          navigate(-1);
        }}>
        <ArrowCircleLeftIcon />
        Atrás
      </Button>
    </>
  );
};
