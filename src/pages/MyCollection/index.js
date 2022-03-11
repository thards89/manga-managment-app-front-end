import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUsersManga } from "../../store/user/selectors";
import CollectionDetails from "../../components/CollectionDetails";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

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

  if (!mangas) return <div>loading</div>;
  return (
    <div>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
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
      <div>
        Filter by Status:{" "}
        <select
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        >
          <option value="">Unfiltered</option>
          <option value="reading">Reading</option>
          <option value="unread">Unread</option>
          <option value="completed">Complete Collection</option>
          <option value="collection_incomplete">Collection Incomplete</option>
        </select>
      </div>
      <div>
        Sort by:{" "}
        <select
          onChange={(event) => setSortBy(event.target.value)}
          value={sortBy}
        >
          <option value="">Unsorted</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publisher">Publisher</option>
        </select>
      </div>
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
          <div>
            <CollectionDetails
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
          </div>
        );
      })}
    </div>
  );
}
