import { NavLink } from "react-router-dom";
import "./index.css";
import { updateUserManga } from "../../store/user/actions"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectUsersManga } from "../../store/user/selectors";
import { selectAllMangas } from "../../store/manga/selectors";

import * as React from "react"; 
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MarkUnreadChatAlt } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandMoreEdit = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  margin:5,
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


export default function MangaCard(props) {
  // console.log("What are my props", props);

  const [expanded, setExpanded] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();


  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  
  const dispatch = useDispatch();
  const [reading, setReading] = useState(props.reading);
  const [volumesOwned, setVolumesOwned] = useState(props.volumesOwned);
  const [lastVolumeRead, setLastVolumeRead] = useState(props.lastVolumeRead);
  const [collectionComplete, setCollectionComplete] = useState(props.collectionComplete);
  const [star, setStar] = useState(props.star);
 
  
   const user = useSelector(selectUser);
   const userId = user.id;
   const mangaDbId = props.id;


  const handleExpandClick1 = () => {
  setExpanded1(!expanded1);
  };

    const handleExpandClick2 = () => {
  setExpanded2(!expanded2);
  };

   const navigateNewManga = () => {
    setAnchorElNav(navigate("/registerNewManga"));
  };

   function submitForm(event) {
     event.preventDefault();
     dispatch(
       updateUserManga(
         volumesOwned,
         reading,
         lastVolumeRead,
         collectionComplete,
         star,
         userId,
         mangaDbId,
       )
     );
     console.log("submiting form");
   }

  
  return (
    <div>
      <CssBaseline />
      <main>
        <Container sx={{ py: 1 }} maxWidth="md">
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
              flexWrap="wrap"
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: 250,
                }}
              >
                <CardMedia
                  sx={{ height: 300, width: "100%", margin: "auto" }}
                  component="img"
                  image={props.imgUrl}
                  alt="img"
                />
                <CardContent sx={{ flexGrow: 0 }}>
                  <Typography gutterBottom variant="h5" component="h2" noWrap>
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
                      <b>Total Volumes:</b> {props.totalVolumes}
                    </p>
                  </Typography>
                </CardContent>

                <CardActions>
                  {/* toggle Details */}
                  <ExpandMore
                    expand={expanded2}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
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
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Are you reading it?:</b> {props.reading ? "Yes" : "No"}
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Last Volume Read: </b>
                      {props.lastVolumeRead}
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Is the Collection Complete?:</b>{" "}
                      {props.collectionComplete ? "Yes" : "No"}
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Stars:</b> {props.star}
                    </Typography>
                  </CardContent>
                </Collapse>

                <CardActions>
                  {/* toggle Edit */}
                  <ExpandMoreEdit
                    expand={expanded1}
                    onClick={handleExpandClick1}
                    aria-expanded={expanded1}
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
                      UPDATE
                    </span>
                    <ExpandMoreIcon> </ExpandMoreIcon>
                  </ExpandMoreEdit>
                </CardActions>
                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Volumes Owned: </b>
                      <TextField
                        id="standard-basic"
                        value={volumesOwned}
                        type="number"
                        variant="standard"
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        onChange={(e) => {
                          setVolumesOwned(e.target.value);
                        }}
                      />
                    </Typography>
                    <FormGroup controlId="formBasicArtist">
                      <FormGroup>
                        <FormLabel>Are you reading it?</FormLabel>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={reading}
                              onChange={() => {
                                setCollectionComplete(!reading);
                              }}
                            />
                          }
                          label="Yes"
                        />
                      </FormGroup>
                    </FormGroup>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Last Volume Read: </b>
                      <TextField
                        id="standard-basic"
                        value={lastVolumeRead}
                        variant="standard"
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        onChange={(e) => {
                          setLastVolumeRead(e.target.value);
                        }}
                      />
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      {" "}
                      <FormGroup>
                        <FormLabel>
                          <b>Is the Collection Complete?:</b>
                        </FormLabel>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label={props.collectionComplete ? "Yes" : "No"}
                        />
                      </FormGroup>
                    </Typography>
                    <Typography
                      paragraph
                      style={{ marginBottom: 10, padding: 10 }}
                    >
                      <b>Stars:</b>{" "}
                      <TextField
                        style={{ marginBottom: 10 }}
                        id="standard-basic"
                        value={star}
                        variant="standard"
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        onChange={(e) => {
                          setStar(e.target.value);
                        }}
                      />
                    </Typography>
                    <FormGroup>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={submitForm}
                        style={{
                          backgroundColor: "black",
                          borderBlockColor: "black",
                          color: "white",
                          marginBottom: 10,
                        }}
                      >
                        Submit
                      </Button>
                    </FormGroup>
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