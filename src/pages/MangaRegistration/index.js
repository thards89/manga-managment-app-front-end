import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import {
//   createAuction,
//   getUserWithStoredToken,
// } from "../../store/user/actions";
// import { selectUser } from "../../store/user/selectors";
// import { showMessageWithTimeout } from "../../store/appState/actions";

export default function CreateAuction() {
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
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Register your Collection</h1>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter the title of your manga"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            type="number"
            placeholder="Enter the name of the author"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Publisher</Form.Label>
          <Form.Control
            value={publisher}
            onChange={(event) => setPublisher(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total Volumes</Form.Label>
          <Form.Control
            value={totalVolumes}
            onChange={(event) => setTotalVolumes(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            required
          />
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Save
          </Button>
        </Form.Group>

        <Form.Group>
          <Form.Label>Volumes Owned</Form.Label>
          <Form.Control
            value={volumesOwned}
            onChange={(event) => setVolumesOwned(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicArtist">
          <Form.Label>Are you Reading this title? </Form.Label>
          <Form.Check
            // value={isArtist}
            // onChange={() => {
            //   dispatch(updateIsArtist());
            // }}
            type="checkbox"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Volume Read</Form.Label>
          <Form.Control
            value={lastVolumeRead}
            onChange={(event) => setVolumeRead(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicArtist">
          <Form.Label>Is this collection complete? </Form.Label>
          <Form.Check
            // value={isArtist}
            // onChange={() => {
            //   dispatch(updateIsArtist());
            // }}
            type="checkbox"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Stars</Form.Label>
          <Form.Control
            value={stars}
            onChange={(event) => setStars(event.target.value)}
            type="text"
            placeholder="Enter the publisher name"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
