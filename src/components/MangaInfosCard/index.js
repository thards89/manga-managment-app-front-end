import { NavLink } from "react-router-dom";
import "./index.css";

import * as React from "react"; 
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  margin: "1px",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export default function CollectionDetails(props) {
  // console.log("What are my props", props);

  const [expanded, setExpanded] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
   const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

   const navigateNewManga = () => {
    setAnchorElNav(navigate("/registerNewManga"));
  };

  
  return (
    <div>
      <CssBaseline />
      <main>
        <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid>
            <Grid
              item
              key={0}
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  sx={{ height: 300, width: "100%", margin: "auto" }}
                  component="img"
                  image={props.imgUrl}
                  alt="img"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                  </Typography>
                  <Typography>
                    {
                      <p>
                        <b>Author:</b> {props.author}
                      </p>
                    }
                    <p>
                      <b>Publisher:</b> {props.publisher}
                    </p>
                    <p>
                      <b>Volumes Owned:</b> {props.volumesOwned}/
                      {props.totalVolumes}
                    </p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={navigateNewManga}>
                    Edit
                  </Button>
                  {/* <Button size="small">View</Button> */}
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <span
                      style={{
                        fontFamily: "Helvetica",
                        fontSize: 13,
                        color: "#1976d2",
                        fontWeight: 400,
                      }}
                    >
                      DETAILS
                    </span>
                    <ExpandMoreIcon> </ExpandMoreIcon>
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      <p>
                        <b>Are you reading it?:</b>{" "}
                        {props.reading ? "Yes" : "No"}
                      </p>
                      <p>
                        <b>Last Volume Read: </b>
                        {props.lastVolumeRead}
                      </p>
                      <p>
                        <b>Is the Collection Complete?:</b>{" "}
                        {props.collectionComplete ? "Yes" : "No"}
                      </p>
                      <p>
                        <b>Stars:</b> {props.star}
                      </p>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}



 // <div className="MangasPage">
    //   <div className="card" style={{ width: 300 }}>
    //     <h1>{props.title} </h1>
    //     <img style={{ width: 200 }} src={props.imgUrl} alt="ïmg"></img>
    //     <p>Author:{props.author}</p>
    //     <p>Publisher:{props.publisher}</p>
    //     <p>
    //       Volumes Owned: {props.volumesOwned}/{props.totalVolumes}
    //     </p>
    //     {props.buttonDetails ? (
    //       <NavLink to={`/mangas/${props.id}`}>
    //         <Button>Details</Button>
    //       </NavLink>
    //     ) : null}
    //     {props.details ? (
    //       <div>
    //         {/* <p>Total Volumes: {props.totalVolumes}</p> */}
    //         <p>Are you reading it?: {props.reading ? "Yes" : "No"}</p>
    //         <p>Last Volume Read: {props.lastVolumeRead}</p>
    //         <p>
    //           Is the Collection Complete?:{" "}
    //           {props.collectionComplete ? "Yes" : "No"}
    //         </p>
    //         <p>Stars: {props.star}</p>
    //         {props.buttonEdit ? (
    //           <NavLink to={`/`}>
    //             <Button>Edit</Button>
    //           </NavLink>
    //         ) : null}
    //       </div>
    //     ) : null}