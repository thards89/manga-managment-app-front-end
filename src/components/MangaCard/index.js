import { updateUserManga } from "../../store/user/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { useEffect, useState } from "react";
import { selectUsersManga } from "../../store/user/selectors";

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
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
  margin: 5,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MangaCard(props) {
  const mangas = useSelector(selectUsersManga);

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const dispatch = useDispatch();
  const [reading, setReading] = useState(props.reading);
  const [volumesOwned, setVolumesOwned] = useState(props.volumesOwned);
  const [lastVolumeRead, setLastVolumeRead] = useState(props.lastVolumeRead);
  const [collectionComplete, setCollectionComplete] = useState(
    props.collectionComplete
  );
  const [star, setStar] = useState(props.star);
  const [updatedMangas, setUpdatedMangas] = useState();

  const user = useSelector(selectUser);
  const userId = user.id;
  const mangaDbId = props.id;

  useEffect(() => {
    setUpdatedMangas();
  }, []);

  useEffect(() => {
    setCollectionComplete(collectionComplete);
  }, []);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
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
        mangaDbId
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
                  maxWidth: 240,
                  borderBlockColor: "black",
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
                      <b>Volumes Owned: </b>
                      {volumesOwned}
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Are you reading it?:</b> {props.reading ? "Yes" : "No"}
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Last Volume Read: </b>
                      {lastVolumeRead}
                    </Typography>
                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Is the Collection Complete?:</b>{" "}
                      {collectionComplete ? "Yes" : "No"}
                    </Typography>
                    <FormGroup>
                      <Box sx={{ "& > legend": { mt: 1, marginTop: 1 } }}>
                        <Typography component="legend">
                          <b>Stars</b>
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={star}
                          readOnly
                        />
                      </Box>
                    </FormGroup>
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
                        inputProps={{
                          min: 0,
                          style: { textAlign: "center", width: 120 },
                        }}
                        onChange={(e) => {
                          setVolumesOwned(parseInt(e.target.value));
                        }}
                      />
                      {volumesOwned > props.totalVolumes ? (
                        <p>
                          Please insert an amount less or equal than the total
                          of volumes
                        </p>
                      ) : null}
                    </Typography>

                    <FormControl
                      sx={{
                        m: 3,
                        minWidth: 150,
                        marginTop: 3,
                        marginLeft: 0.5,
                      }}
                    >
                      <InputLabel
                        id="demo-simple-select-standard-label"
                        style={{ fontSize: 15, marginTop: -10 }}
                      >
                        Reading?{" "}
                      </InputLabel>
                      <Select
                        className="selectFilters"
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard reading"
                        value={reading}
                        onChange={(event) => setReading(event.target.value)}
                        label="Collection Complete?"
                      >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </Select>
                    </FormControl>

                    <Typography paragraph style={{ marginBottom: 10 }}>
                      <b>Last Volume Read: </b>
                      <TextField
                        id="standard-basic"
                        value={lastVolumeRead}
                        variant="standard"
                        inputProps={{
                          min: 0,
                          style: { textAlign: "center", width: 120 },
                        }}
                        onChange={(e) => {
                          setLastVolumeRead(parseInt(e.target.value));
                        }}
                      />
                      {lastVolumeRead > volumesOwned ? (
                        <p>
                          Please insert an amount less than the last volume
                          owned
                        </p>
                      ) : null}
                    </Typography>

                    <FormControl
                      sx={{
                        m: 1,
                        minWidth: 200,
                        marginTop: 2,
                        marginLeft: 0.5,
                      }}
                    >
                      <InputLabel
                        id="demo-simple-select-standard-label"
                        style={{ fontSize: 15, marginTop: -10 }}
                      >
                        Collection Complete?{" "}
                      </InputLabel>
                      <Select
                        className="selectFilters"
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard reading"
                        value={
                          volumesOwned === props.totalVolumes
                            ? !collectionComplete
                            : collectionComplete
                        }
                        label="Collection Complete?"
                        inputProps={{ readOnly: true }}
                      >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </Select>
                    </FormControl>

                    <FormGroup>
                      <Box sx={{ "& > legend": { mt: 1, marginTop: 1 } }}>
                        <Typography component="legend">
                          <b>Stars</b>
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={star}
                          onChange={(event, newValue) => {
                            setStar(newValue);
                          }}
                        />
                      </Box>
                    </FormGroup>

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
