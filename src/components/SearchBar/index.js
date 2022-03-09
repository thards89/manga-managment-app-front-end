import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import {  FormControl } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default function SearchBar() {
    const [search, setSearch] = useState("");

  return (
    <div>
      <FormControl
        type="text"
        value={search}
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
        className="login-input"
      />
      <FormControl.Feedback>
        <span style={{ top: "5px" }}>
          <FontAwesome name="check" spin key="icon" />
        </span>
      </FormControl.Feedback>
    </div>
    // <div className="input-group col-md-4">
    //   <input
    //     className="form-control py-2 border-right-0 border"
    //     type="search"
    //     defaultValue="search"
    //     id="example-search-input"
    //   />
    //   <span className="input-group-append">
    //     <div className="btn btn-outline-secondary border-left-0 border">
    //       <FaBeer />
    //     </div>
    //   </span>
    // </div>
    // <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label><b>Search</b></Form.Label>
    //     <Form.Control
    //       value={search}
    //       onChange={(event) => setSearch(event.target.value)}
    //       type="search"
    //       required
    //     />
    //   </Form.Group>
    // </Form>
  );
}
