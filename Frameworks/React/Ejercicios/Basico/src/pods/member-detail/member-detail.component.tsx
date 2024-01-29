import React from "react";
import { useNavigate } from "react-router-dom";
import { MemberDetailEntity } from "./member-detail.vm";
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

interface Props {
  member: MemberDetailEntity;
}

export const MemberDetail: React.FC<Props> = (props) => {
  const { member } = props;
  const navigate = useNavigate();

  return (
    <>
      {member ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={member.avatar_url}
                alt={member.login}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {member.login}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {member.id} - {member.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
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
