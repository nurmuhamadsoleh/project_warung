import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 140,
  },
});

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fceklist.id%2Fwp-content%2Fuploads%2F2022%2F05%2FSSD-Terbaik-untuk-Laptop-dan-PC.jpg&imgrefurl=https%3A%2F%2Fceklist.id%2F25752%2Fmerk-ssd-terbaik-untuk-laptop-pc%2F&tbnid=i8YxPPE1XyoV5M&vet=12ahUKEwik6tm0mvb4AhWfgGMGHQTYAOcQMygDegUIARDdAg..i&docid=ZUI9zrMbqzlBrM&w=1215&h=809&q=ssd%20laptop&client=firefox-b-d&ved=2ahUKEwik6tm0mvb4AhWfgGMGHQTYAOcQMygDegUIARDdAg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;