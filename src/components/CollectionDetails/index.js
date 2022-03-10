import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function CollectionDetails(props) {
  // console.log("What are my props", props);

  function submitForm(event) {
    event.preventDefault();
    console.log("submiting form");
  }

  return (
    <div className="MangasPage">
      <div className="card" style={{ width: 300 }}>
        <h1>{props.title} </h1>
        <img style={{ width: 200 }} src={props.imgUrl} alt="ïmg"></img>
        <p>Author:{props.author}</p>
        <p>Publisher:{props.publisher}</p>
        <p>
          Volumes Owned: {props.volumesOwned}/{props.totalVolumes}
        </p>
        {props.buttonDetails ? (
          <NavLink to={`/mangas/${props.id}`}>
            <Button>Details</Button>
          </NavLink>
        ) : null}
        {props.details ? (
          <div>
            {/* <p>Total Volumes: {props.totalVolumes}</p> */}
            <p>Are you reading it?: {props.reading ? "Yes" : "No"}</p>
            <p>Last Volume Read: {props.lastVolumeRead}</p>
            <p>
              Is the Collection Complete?:{" "}
              {props.collectionComplete ? "Yes" : "No"}
            </p>
            <p>Stars: {props.star}</p>
            {props.buttonEdit ? (
              <NavLink to={`/`}>
                <Button>Edit</Button>
              </NavLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
