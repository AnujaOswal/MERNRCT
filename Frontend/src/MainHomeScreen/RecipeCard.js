import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  
import { Grid } from '@material-ui/core';      
import { styled } from '@material-ui/core';
import { Paper } from '@material-ui/core';

//material ui styles->
 const useStyles = makeStyles((theme) => ({
          root: {
            maxWidth: 480,
            margin:8,
            display: "inline-block",
            
          },
          media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          },
          expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          },
          expandOpen: {
            transform: 'rotate(180deg)',
          },
          
        }));
///-------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  border:'none',
}));


function RecipeCard({title,image,ingredients,deletekey,_id}) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteHandler= (_id) =>{
    deletekey(_id)
    console.log("_id",_id)
  };

  return (
    <>
      <Grid item xs={6}>
      <Item>
     
    <Card className={classes.root} >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <DeleteIcon style={{ color: "rgb(187, 13, 13)" }}
                        fontSize="small" onClick={() => deleteHandler(_id)}
                        />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
           {ingredients}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Item>
    </Grid>
</>
  )
}

export default RecipeCard;