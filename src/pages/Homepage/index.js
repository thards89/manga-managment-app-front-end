import Card from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Homepage() {
  return (
    <div className="card">
      <h4>Welcome Otaku!</h4>
      <p className="card-text">In this website you can manage all your manga collection! </p>
      <p>
        Register all the titles you have Manage what you have read, which
        colletions are complete, and how much is left to complete it.
      </p>
      <p>
        {" "}
        Interact with other anime fans, creating a Manga Reading Club, selling
        the mangas you dont`t want anymore or exchange it.
      </p>
      <p>
        <button>Sign In</button>
        <button>Login</button>
      </p>
    </div>
  );
}
