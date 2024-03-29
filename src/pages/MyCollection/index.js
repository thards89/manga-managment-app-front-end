import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUsersManga } from "../../store/user/selectors";
import MangaCard from "../../components/MangaCard";

import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const themeTitle = createTheme({
  typography: {
    fontSize: "10",
    fontFamily: ["Great Vibes", "cursive"].join(","),
  },
});

export default function MyCollection() {
  const mangas = useSelector(selectUsersManga);
  console.log("selector", mangas);

  //states Hook
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filteredMangas, setFilteredMangas] = useState([]);

  useEffect(() => {
    setFilteredMangas(mangas);
  }, [mangas]);

  useEffect(() => {
    switch (sortBy) {
      case "title":
        setFilteredMangas([...mangas].sort(compareMangaTitle));
        break;
      case "author":
        setFilteredMangas([...mangas].sort(compareMangaAuthor));
        break;
      case "publisher":
        setFilteredMangas([...mangas].sort(compareMangaPublisher));
        break;
      //  case "date":
      //     setFilteredMangas([...mangas].sort(compareMangaDate));
      //     break;

      default:
        const managaList = mangas ? mangas : [];
        setFilteredMangas([...managaList]);
    }
  }, [sortBy]);

  useEffect(() => {
    switch (filter) {
      case "reading":
        setFilteredMangas([...mangas].filter(bringReadingMangas));
        break;
      case "unread":
        setFilteredMangas([...mangas].filter(bringUnreadMangas));
        break;
      case "completed":
        setFilteredMangas([...mangas].filter(bringCompleteCollections));
        break;
      case "collection_incomplete":
        setFilteredMangas([...mangas].filter(bringIncompleteCollections));
        break;
      default:
        const managaList = mangas ? mangas : [];
        setFilteredMangas([...managaList]);
    }
  }, [filter]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setFilter("");
      setSortBy("");
      setFilteredMangas(
        [...mangas].filter(
          (manga) =>
            manga.title
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            manga.author.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
      );
    }
  }, [searchTerm]);

  //sort functions
  function compareMangaTitle(manga_a, manga_b) {
    return manga_a.title.localeCompare(manga_b.title);
  }

  function compareMangaAuthor(manga_a, manga_b) {
    return manga_a.author.localeCompare(manga_b.author);
  }

  function compareMangaPublisher(manga_a, manga_b) {
    return manga_a.publisher.localeCompare(manga_b.publisher);
  }

  function bringReadingMangas(manga) {
    return manga.userMangas.reading === true;
  }

  function bringUnreadMangas(manga) {
    return manga.userMangas.reading !== true;
  }

  function bringCompleteCollections(manga) {
    return manga.userMangas.collectionComplete === true;
  }

  function bringIncompleteCollections(manga) {
    return manga.userMangas.collectionComplete !== true;
  }

  // function compareMangaDate(manga) {
  //   return manga.userMangas.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1);
  // }

  if (!mangas) return <div>loading</div>;
  return (
    <div>
      {/* top text */}
      <Container sx={{ py: 0 }} maxWidth="md">
        <ThemeProvider theme={themeTitle}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            padding={4}
          >
            My Collection
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={themeTitle}>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            marginBottom={0}
          >
            Total Mangas Registered: {mangas.length}
          </Typography>
        </ThemeProvider>
      </Container>
      {/* (//search bar) */}
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-2">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <b>Search</b>
          </Form.Label>
          <Form.Control
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            type="search"
            required
          />
        </Form.Group>
      </Form>
      {/* (//select bars) */}
      {/* filter by */}
      <div className="selectBars">
        <FormControl sx={{ m: 10, minWidth: 120, marginTop: 3 }}>
          <InputLabel
            id="demo-simple-select-standard-label"
            style={{ fontSize: 15, marginTop: -10 }}
          >
            Filter by:{" "}
          </InputLabel>
          <Select
            className="selectFilters"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            label="Filter by"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="reading">Reading</MenuItem>
            <MenuItem value="completed">Collection Complete</MenuItem>
            <MenuItem value="collection_incomplete">
              Collection Incomplete
            </MenuItem>
          </Select>
        </FormControl>
        {/* sort by */}
        <FormControl sx={{ m: 10, minWidth: 120, marginTop: 3 }}>
          <InputLabel
            id="demo-simple-select-standard-label"
            style={{ fontSize: 15, marginTop: -10 }}
          >
            Sort by:{" "}
          </InputLabel>
          <Select
            className="selectFilters"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            label="Sort by"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="publisher">Publisher</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* cards */}
      <div className="index">
        {filteredMangas.map((manga) => {
          const { id, title, author, imgUrl, publisher, totalVolumes } = manga;
          const {
            volumesOwned,
            collectionComplete,
            lastVolumeRead,
            reading,
            star,
          } = manga.userMangas;

          return (
            <MangaCard
              key={id}
              id={id}
              title={title}
              imgUrl={imgUrl}
              author={author}
              publisher={publisher}
              totalVolumes={totalVolumes}
              volumesOwned={volumesOwned}
              reading={reading}
              lastVolumeRead={lastVolumeRead}
              collectionComplete={collectionComplete}
              star={star}
              buttonDetails={true}
              details={false}
              buttonEdit={false}
            />
          );
        })}
      </div>
    </div>
  );
}
