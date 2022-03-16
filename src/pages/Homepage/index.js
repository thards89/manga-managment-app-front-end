import * as React from "react";
import Paper from "@mui/material/Paper";

export default function Homepage() {


  return (
    <div className="homeContainers">
      <Paper
        sx={{
          marginTop: 7,
          height: 650,
          width: 600,
          backgroundColor: "#fff",
          fontFamily: "Helvetica Neue",
          listStyleImage: "none",
        }}
      >
        <p className="HomePagetitle">Welcome Otaku!</p>
        <p className="HomePageFirstText">
          In this website you can manage all your manga collection!{" "}
        </p>
        <p className="HomePageText">
          <ul>
            <li>Register all the titles you have and easily filter them;</li>
            <li>
              Manage the mangas you are reading and in which volume you have
              stopped
            </li>
            <li>
              Easily manage how many volumes you own and check which collections
              are complete
            </li>
            <p className="HomePageFirstText">
              Click on Sign Up or Login to Start!
            </p>
          </ul>
        </p>
      </Paper>
      <Paper
        sx={{
          marginTop: 7,
          height: 650,
          width: 800,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          src="library.jpg"
          alt="library"
          style={{ width: 800, height: 650 }}
        />
      </Paper>
    </div>
  );
}

//   <div className="card">
//     <h4>Welcome Otaku!</h4>
//     <p className="card-text">In this website you can manage all your manga collection! </p>
//     <p>
//       Register all the titles you have Manage what you have read, which
//       colletions are complete, and how much is left to complete it.
//     </p>
//     <p>
//       {" "}
//       Interact with other anime fans, creating a Manga Reading Club, selling
//       the mangas you dont`t want anymore or exchange it.
//     </p>
//     <p>
//       <button>Sign In</button>
//       <button>Login</button>
//     </p>
//   </div>
