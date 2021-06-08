import React from "react";
import Card from "@material-ui/core/Card";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

export default function ProjectCard(props) {

    const useStyles = makeStyles({
        media: {
            height: 200,
        }
    })

    const uiStyle = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                className={uiStyle.media}
                image={props.image}
                title="project1"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.detail}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={props.url} target="blank">
                    Check code on Github
                </Button>
            </CardActions>
        </Card>
    )
}