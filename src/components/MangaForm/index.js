import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// import {
//   createAuction,
//   getUserWithStoredToken,
// } from "../../store/user/actions";
// import { selectUser } from "../../store/user/selectors";
// import { showMessageWithTimeout } from "../../store/appState/actions";

const themeTitle = createTheme({
  typography: {
    fontSize: "11",
    fontFamily: ["Great Vibes", "cursive"].join(","),
  },
});

export default function MangaForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [totalVolumes, setTotalVolumes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [volumesOwned, setVolumesOwned] = useState("");
  const [lastVolumeRead, setVolumeRead] = useState("");
  const [stars, setStars] = useState("");
  //   const user = useSelector(selectUser);

  function submitForm(event) {
    event.preventDefault();
    console.log("submiting form");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }}>
        <ThemeProvider theme={themeTitle}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            padding={5}
          >
            Register a Manga
          </Typography>
        </ThemeProvider>
        <FormGroup>
          <TextField
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter the Title of your manga"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
          {/* <FormLabel>Author</FormLabel> */}
          <TextField
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            type="number"
            placeholder="Enter the name of the author"
            id="outlined-basic"
            label="Author"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
          {/* <FormLabel>Publisher</FormLabel> */}
          <TextField
            value={publisher}
            onChange={(event) => setPublisher(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            id="outlined-basic"
            label="Publisher"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
          {/* <FormLabel>Total Volumes</FormLabel> */}
          <TextField
            value={totalVolumes}
            onChange={(event) => setTotalVolumes(event.target.value)}
            type="text"
            id="outlined-basic"
            label="Total Volumes"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
          {/* <FormLabel>Image Url</FormLabel> */}
          <TextField
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            id="outlined-basic"
            label="Image Url"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
          {/* <FormLabel>Volumes Owned</FormLabel> */}
          <TextField
            value={volumesOwned}
            onChange={(event) => setVolumesOwned(event.target.value)}
            type="text"
            placeholder="Enter how many volumes do you have of this title"
            id="outlined-basic"
            label="Volumes Owned"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup controlId="formBasicArtist">
          {/* <FormLabel>Are you Reading this title? </FormLabel> */}
          <FormGroup>
            <FormLabel>Are you reading this title?</FormLabel>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Yes"
            />
            <FormControlLabel control={<Checkbox />} label="No" />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          {/* <FormLabel>Last Volume Read</FormLabel> */}
          <TextField
            value={lastVolumeRead}
            onChange={(event) => setVolumeRead(event.target.value)}
            type="text"
            placeholder="Enter the number of the last volume read"
            id="outlined-basic"
            label="Last Volume Read"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup controlId="formBasicArtist">
          {/* <FormLabel>Is this collection complete? </FormLabel> */}
          {/* // value={isArtist}
            // onChange={() => {
            //   dispatch(updateIsArtist());
            // }} */}
          <FormGroup>
            <FormLabel>Is this collection complete?</FormLabel>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Yes"
            />
            <FormControlLabel control={<Checkbox />} label="No" />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          {/* <FormLabel>Stars</FormLabel> */}
          <TextField
            value={stars}
            onChange={(event) => setStars(event.target.value)}
            type="text"
            placeholder="From 1 to 5, how many stars would you give to this title?"
            id="outlined-basic"
            label="Stars"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
          <Button
            variant="primary"
            type="submit"
            onClick={submitForm}
            style={{
              backgroundColor: "black",
              borderBlockColor: "black",
              marginBottom: 10,
            }}
          >
            Submit
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
}
