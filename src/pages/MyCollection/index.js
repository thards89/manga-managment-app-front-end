import { useSelector } from "react-redux";
import { useState } from "react";
import { selectUsersManga } from "../../store/user/selectors";
import CollectionDetails from "../../components/CollectionDetails";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

export default function MyCollection() {
  const mangas = useSelector(selectUsersManga);

  const [searchTerm, setSearchTerm] = useState("");

  console.log("what is my selector", mangas);

  const filteredMangas =
    mangas &&
    [...mangas].filter(
      (manga) =>
        manga.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        manga.author.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  console.log("filter", filteredMangas);
  console.log("search", searchTerm);

  function submitForm(event) {
    event.preventDefault();
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
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="search"
            required
          />
        </Form.Group>
      </Form>
      {filteredMangas.map((manga) => {
        const { id, title, author, imgUrl, publisher, totalVolumes } = manga;
        // console.log("the manga", manga);
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
