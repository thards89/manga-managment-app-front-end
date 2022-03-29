import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { selectUsersManga, selectUser } from "../../store/user/selectors";
import { selectAllMangas } from "../../store/manga/selectors";
import fetchMangas from "../../store/manga/actions";
import { useNavigate } from "react-router-dom";

import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { postManga } from "../../store/user/actions";


const themeTitle = createTheme({
  typography: {
    fontSize: "11",
    fontFamily: ["Great Vibes", "cursive"].join(","),
  },
});

export default function MangaRegistrationForm() {
  const user = useSelector(selectUser);
  const userId = user.id;
  

  const [mangaTitle, setMangaTitle] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [totalVolumes, setTotalVolumes] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [volumesOwned, setVolumesOwned] = useState("");
  const [lastVolumeRead, setVolumeRead] = useState("");
  const [reading, setReading] = useState(false);
  const [collectionComplete, setCollectionComplete] = useState(false);
  const [star, setStar] = useState("");
  const [mangaId, setMangaId] = useState ("")
  const dispatch = useDispatch();
  


useEffect(() => {
  setMangaTitle(dispatch(fetchMangas));
}, [dispatch]);

const mangasDb = useSelector(selectAllMangas);
console.log("what is my selector", mangasDb);

const onChangeHandler = (text) =>{
  let matches = []
  if (text.length > 0) {
    matches = mangasDb.filter((manga) => {
      const regex = new RegExp(`${text}`, "gi");
      return manga.title.match(regex);
    });
  }
  console.log("what matches", matches)
  setSuggestions(matches)
  setTitle(text)
}

  const onSuggestHandler = (suggestion) => {
    // console.log("suggestion", suggestion)
    setMangaId(suggestion.id)
    setTitle(suggestion.title)
    setAuthor(suggestion.author);
    setPublisher(suggestion.publisher);
    setTotalVolumes(suggestion.totalVolumes);
    setImgUrl(suggestion.imgUrl)
    setSuggestions([])
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const navigateMyCollection = () => {
    setAnchorElNav(navigate("/mangas"));
     };

  function submitForm(event) {
    event.preventDefault();
    if (
      volumesOwned > totalVolumes ||
      lastVolumeRead > volumesOwned ||
      star > 6
    ) {
      return 
    } else {
      dispatch(
        postManga(
          userId,
          mangaId,
          title,
          author,
          publisher,
          totalVolumes,
          imgUrl,
          volumesOwned,
          reading,
          lastVolumeRead,
          collectionComplete,
          star
        ),
        navigateMyCollection()
      );}
    console.log("submiting form");
  }

  const checkCollectionComplete = () => {
    if (volumesOwned < totalVolumes) {
      return collectionComplete === false
    }
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
            onChange={(event) => onChangeHandler(event.target.value)}
            type="text"
            placeholder="Enter the Title of your manga"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            style={{ marginBottom: "15px" }}
            // onBlur={() => {
            //   setTimeout(() => {
            //     setSuggestions([]);
            //   }, 100);
            // }}
          />
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div
                key={i}
                className="suggestion"
                onClick={() => onSuggestHandler(suggestion)}
              >
                {suggestion.title}
              </div>
            ))}
        </FormGroup>
        <FormGroup>
          <TextField
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            type="text"
            placeholder="Enter the name of the author"
            id="outlined-basic"
            label="Author"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
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
          <TextField
            value={totalVolumes}
            onChange={(event) => setTotalVolumes(event.target.value)}
            type="text"
            id="outlined-basic"
            label="Total Volumes"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            value={imgUrl}
            onChange={(event) => setImgUrl(event.target.value)}
            type="text"
            id="outlined-basic"
            label="Image Url"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <FormGroup>
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
          {volumesOwned > totalVolumes ? (
            <p>
              Please insert an amount less or equal than the total of volumes
            </p>
          ) : null}
        </FormGroup>
        <FormGroup controlId="formBasicArtist">
          <FormGroup>
            <FormLabel>Are you reading this title?</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  value={reading}
                  onChange={() => {
                    setReading(!reading);
                  }}
                />
              }
              label="Yes"
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
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
          {lastVolumeRead > volumesOwned ? (
            <p>Please insert an amount less than the last volume read</p>
          ) : null}
        </FormGroup>
        <FormGroup controlId="formBasicArtist">
          <FormGroup>
            <FormLabel>Is this collection complete?</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  value={collectionComplete}
                  onChange={() => {
                    setCollectionComplete(!collectionComplete);
                  }}
                />
              }
              label="Yes"
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          Stars
          <Slider
            value={star}
            onChange={(event) => setStar(event.target.value)}
            type="range"
            min={1}
            max={5}
            valueLabelDisplay="auto"
            placeholder="From 1 to 5, how many stars would you give to this title?"
            id="outlined-basic"
            label="Stars"
            variant="outlined"
            style={{ marginBottom: "20px", width: "80px" }}
          />
          {star > 5 ? (
            <p>Please insert an amount less or equal than 5</p>
          ) : null}
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
